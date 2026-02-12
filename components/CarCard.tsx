"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fuel,
  Gauge,
  Calendar,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";

interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage?: number;
  fuelType: string;
  transmission: string;
  images: string[];
  isFeatured?: boolean;
}

export default function CarCard({ car }: { car: Car }) {
  const isLiked = useQuery(api.likes.isLiked, { carId: car._id as Id<"cars"> });
  const toggleLike = useMutation(api.likes.toggle);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const liked = await toggleLike({ carId: car._id as Id<"cars"> });
      // Optional: Toast message
      // toast.success(liked ? "Added to favorites" : "Removed from favorites");
    } catch (err) {
      toast.error("Please sign in to like cars");
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (km: number) => {
    return new Intl.NumberFormat("en-ZA").format(km) + " km";
  };

  return (
    <Link href={`/car/${car._id}`} className="block group">
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative glass-card rounded-[2rem] overflow-hidden group/card h-full"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Featured Badge */}
          {car.isFeatured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20">
                Premium Choice
              </span>
            </div>
          )}

          {/* Like Button */}
           <button 
             onClick={handleLike}
             className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group/heart hover:bg-white/20"
          >
             <Heart className={`h-5 w-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-white group-hover/heart:text-red-500"}`} />
          </button>

          {/* Image */}
          <img
            src={car.images[0] || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop"}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
          />

          {/* High-End Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-[2rem] z-20 pointer-events-none" />

          {/* Quick Specs Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white/70">
              <div className="flex items-center gap-1 glass-premium border border-white/5 px-2 py-1 rounded-md">
                <Calendar className="h-3 w-3 text-primary" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-1 glass-premium border border-white/5 px-2 py-1 rounded-md">
                <Fuel className="h-3 w-3 text-primary" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center gap-1 glass-premium border border-white/5 px-2 py-1 rounded-md">
                <Gauge className="h-3 w-3 text-primary" />
                <span>{car.mileage ? formatMileage(car.mileage) : "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Title Area */}
          <div className="mb-4">
            <h3 className="text-xl font-display font-bold group-hover/card:text-primary transition-colors duration-300">
              {car.make} <span className="text-muted-foreground font-normal">{car.model}</span>
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-primary/80 font-bold uppercase tracking-widest">{car.transmission}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Available Now</span>
            </div>
          </div>

          {/* Price Area */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="text-2xl font-display font-black tracking-tighter text-foreground group-hover/card:scale-105 transition-transform duration-300">
              {formatPrice(car.price)}
            </div>
            <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
              <span className="text-[10px] font-bold">VIEW DETAILS</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
