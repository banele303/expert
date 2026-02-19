import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Helper to resolve images
const resolveImages = async (ctx: any, cars: any[]) => {
  return await Promise.all(
    cars.map(async (car) => {
      const images = await Promise.all(
        car.images.map(async (img: string) => {
          if (img.startsWith("http")) return img;
          return (await ctx.storage.getUrl(img)) || img;
        })
      );
      return { ...car, images };
    })
  );
};

// Shared Logic for fetching and filtering cars
const fetchCars = async (ctx: any, args: any) => {
    let cars = await ctx.db
      .query("cars")
      .withIndex("by_available", (q: any) => q.eq("isAvailable", true))
      .collect();

    // In-memory filtering (efficient enough for < 1000 items)
    if (args.make && args.make !== "all") {
      cars = cars.filter(
        (car: any) => car.make.toLowerCase() === args.make!.toLowerCase()
      );
    }
    
    if (args.search) {
        const lowerSearch = args.search.toLowerCase();
        cars = cars.filter((c: any) => 
            c.make.toLowerCase().includes(lowerSearch) || 
            c.model.toLowerCase().includes(lowerSearch) ||
            c.description.toLowerCase().includes(lowerSearch)
        );
    }

    if (args.minPrice !== undefined) {
        cars = cars.filter((c: any) => c.price >= args.minPrice!);
    }

    if (args.maxPrice !== undefined) {
        cars = cars.filter((c: any) => c.price <= args.maxPrice!);
    }

    // Sort by newest first
    cars.sort((a: any, b: any) => b.createdAt - a.createdAt);

    if (args.limit) {
      return cars.slice(0, args.limit);
    }

    return cars;
};

// Get all available cars with filtering (Public - Resolves Image URLs)
export const getAll = query({
  args: {
    make: v.optional(v.string()),
    model: v.optional(v.string()),
    limit: v.optional(v.number()),
    search: v.optional(v.string()),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const cars = await fetchCars(ctx, args);
    return await resolveImages(ctx, cars);
  },
});

// Get all cars for Admin (Raw Storage IDs)
export const getAllAdmin = query({
  args: {
    make: v.optional(v.string()),
    model: v.optional(v.string()),
    limit: v.optional(v.number()),
    search: v.optional(v.string()),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Admin checks all cars, not just available ones? 
    // The original getAll checked "isAvailable=true".
    // Wait, the AdminProductsTab uses "getAll" which filtered only available?
    // Let's check AdminProductsTab again. If it uses getAll, it only sees "Available" cars?
    // In AdminProductsTab, there is a switch for "isAvailable".
    // If getAll filtered by isAvailable=true, then setting isAvailable=false would make it disappear from the list!
    // This implies the original getAll WAS NOT correct for Admin if Admin needs to see sold items.
    // Let's check the original code again: 
    // Line 17: .withIndex("by_available", (q) => q.eq("isAvailable", true))
    // Yes! The previous Admin implementation was FLAWED if it used getAll to manage inventory, because "Sold" items would disappear.
    // I should fix this for Admin.
    
    let cars = await ctx.db.query("cars").collect(); // Get ALL cars
    cars.sort((a, b) => b.createdAt - a.createdAt);
    return cars;
  },
});

// Get featured cars
export const getFeatured = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const cars = await ctx.db
      .query("cars")
      .withIndex("by_featured", (q) => q.eq("isFeatured", true))
      .collect();

    const availableCars = cars.filter((car) => car.isAvailable);
    const resolvedCars = await resolveImages(ctx, availableCars);

    if (args.limit) {
      return resolvedCars.slice(0, args.limit);
    }

    return resolvedCars;
  },
});

// Get deal of the week
export const getDealOfWeek = query({
  handler: async (ctx) => {
    const cars = await ctx.db
      .query("cars")
      .withIndex("by_deal", (q) => q.eq("isDealOfWeek", true))
      .collect();

    const availableCars = cars.filter((car) => car.isAvailable);
    if (availableCars.length === 0) return null;
    
    const resolved = await resolveImages(ctx, [availableCars[0]]);
    return resolved[0];
  },
});

// Get single car by ID
export const getById = query({
  args: { id: v.id("cars") },
  handler: async (ctx, args) => {
    const car = await ctx.db.get(args.id);
    if (!car) return null;
    const resolved = await resolveImages(ctx, [car]);
    return resolved[0];
  },
});

// Get unique makes for filter
export const getMakes = query({
  handler: async (ctx) => {
    const cars = await ctx.db
      .query("cars")
      .withIndex("by_available", (q) => q.eq("isAvailable", true))
      .collect();

    const makes = [...new Set(cars.map((car) => car.make))];
    return makes.sort();
  },
});

// Create a new car listing (admin only)
export const create = mutation({
  args: {
    make: v.string(),
    model: v.string(),
    year: v.number(),
    price: v.number(),
    mileage: v.optional(v.number()),
    fuelType: v.string(),
    transmission: v.string(),
    engineSize: v.optional(v.string()),
    color: v.optional(v.string()),
    bodyType: v.optional(v.string()),
    description: v.string(),
    features: v.optional(v.array(v.string())),
    images: v.array(v.string()),
    isDealOfWeek: v.optional(v.boolean()),
    isFeatured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("cars", {
      ...args,
      isAvailable: true,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update car availability
export const updateAvailability = mutation({
  args: {
    id: v.id("cars"),
    isAvailable: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      isAvailable: args.isAvailable,
      updatedAt: Date.now(),
    });
  },
});

// Get car statistics for admin dashboard
export const getStats = query({
  handler: async (ctx) => {
    const cars = await ctx.db.query("cars").collect();
    
    return {
      totalProducts: cars.length,
      activeProducts: cars.filter((c) => c.isAvailable).length,
      featuredCount: cars.filter((c) => c.isFeatured).length,
      lowStock: 0,
      jewelryCount: 0,
      decorCount: 0,
    };
  },
});

export const splitImage = mutation({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    // This is a placeholder if needed, otherwise ignore.
  }
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const remove = mutation({
  args: { id: v.id("cars") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("cars"),
    make: v.optional(v.string()),
    model: v.optional(v.string()),
    year: v.optional(v.number()),
    price: v.optional(v.number()),
    mileage: v.optional(v.number()),
    fuelType: v.optional(v.string()),
    transmission: v.optional(v.string()),
    engineSize: v.optional(v.string()),
    color: v.optional(v.string()),
    bodyType: v.optional(v.string()),
    description: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
    images: v.optional(v.array(v.string())),
    isDealOfWeek: v.optional(v.boolean()),
    isFeatured: v.optional(v.boolean()),
    isAvailable: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, {
      ...data,
      updatedAt: Date.now(),
    });
  },
});
