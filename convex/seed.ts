import { mutation } from "./_generated/server";

// Seed function - Demo data removed as requested
export const seed = mutation({
  handler: async (ctx) => {
    const existingProducts = await ctx.db.query("cars").collect();
    if (existingProducts.length > 0) {
      return { message: "Database has data", count: existingProducts.length };
    }

    // Demo data removed. 
    // To add products, use the admin dashboard or uncomment and populate this array.
    const demoProducts: any[] = [];

    for (const product of demoProducts) {
        await ctx.db.insert("cars", product);
    }

    return { message: "Seed complated (No data added)", count: 0 };
  },
});
