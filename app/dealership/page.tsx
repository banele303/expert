"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Car,
  Filter,
  Search,
  Loader2,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { Metadata } from "next";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function DealershipPage() {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<string>("all");
  const [minYear, setMinYear] = useState<string>("all");
  const [maxMileage, setMaxMileage] = useState<string>("all");

  const cars = useQuery(api.cars.getAll, {
    make: selectedMake === "all" ? undefined : selectedMake,
  });
  const makes = useQuery(api.cars.getMakes);

  const isLoading = cars === undefined;

  // Client-side filtering
  const filteredCars = cars?.filter((car) => {
    // Price Filter
    if (maxPrice !== "all" && car.price > parseInt(maxPrice)) return false;
    // Year Filter
    if (minYear !== "all" && car.year < parseInt(minYear)) return false;
    // Mileage Filter
    if (maxMileage !== "all" && (car.mileage || 0) > parseInt(maxMileage)) return false;
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-12"
        >
           <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.p
            variants={fadeInUp}
             className="text-muted-foreground max-w-2xl mx-auto"
          >
            Browse our curated selection of quality pre-owned vehicles, high-performance bicycles, and professional tools.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <div className="glass rounded-2xl p-6 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* Make Filter */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                 <Filter className="h-4 w-4" /> Filter by Make
               </label>
               <Select value={selectedMake} onValueChange={setSelectedMake}>
                 <SelectTrigger className="w-full bg-background border-border">
                   <SelectValue placeholder="All Makes" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="all">All Makes</SelectItem>
                   {makes?.map((make) => (
                     <SelectItem key={make} value={make}>
                       {make}
                     </SelectItem>
                   ))}
                 </SelectContent>
               </Select>
             </div>

             {/* Price Filter */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-muted-foreground">Max Price</label>
               <Select value={maxPrice} onValueChange={setMaxPrice}>
                 <SelectTrigger className="w-full bg-background border-border">
                   <SelectValue placeholder="Any Price" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="all">Any Price</SelectItem>
                   <SelectItem value="200000">R200,000</SelectItem>
                   <SelectItem value="300000">R300,000</SelectItem>
                   <SelectItem value="400000">R400,000</SelectItem>
                   <SelectItem value="500000">R500,000</SelectItem>
                   <SelectItem value="750000">R750,000</SelectItem>
                   <SelectItem value="1000000">R1,000,000</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             {/* Year Filter */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-muted-foreground">Min Year</label>
               <Select value={minYear} onValueChange={setMinYear}>
                 <SelectTrigger className="w-full bg-background border-border">
                   <SelectValue placeholder="Any Year" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="all">Any Year</SelectItem>
                   <SelectItem value="2015">2015+</SelectItem>
                   <SelectItem value="2018">2018+</SelectItem>
                   <SelectItem value="2020">2020+</SelectItem>
                   <SelectItem value="2022">2022+</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             {/* Mileage Filter */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-muted-foreground">Max Mileage</label>
               <Select value={maxMileage} onValueChange={setMaxMileage}>
                 <SelectTrigger className="w-full bg-background border-border">
                   <SelectValue placeholder="Any Mileage" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="all">Any Mileage</SelectItem>
                   <SelectItem value="50000">50,000 km</SelectItem>
                   <SelectItem value="100000">100,000 km</SelectItem>
                   <SelectItem value="150000">150,000 km</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center border-t border-border pt-4">
             <span className="text-sm text-muted-foreground">
               Showing <span className="font-bold text-foreground">{filteredCars?.length || 0}</span> vehicles
             </span>
             {(selectedMake !== "all" || maxPrice !== "all" || minYear !== "all" || maxMileage !== "all") && (
               <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setSelectedMake("all");
                  setMaxPrice("all");
                  setMinYear("all");
                  setMaxMileage("all");
                }}
                className="text-muted-foreground hover:text-foreground"
               >
                 Clear Filters
               </Button>
             )}
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="glass rounded-3xl overflow-hidden animate-pulse border border-border"
                >
                  <div className="aspect-[4/3] bg-muted/50" />
                  <div className="p-5 space-y-3">
                    <div className="h-6 bg-muted/50 rounded-lg w-3/4" />
                    <div className="h-4 bg-muted/50 rounded-lg w-1/2" />
                    <div className="h-8 bg-muted/50 rounded-lg w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCars && filteredCars.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCars.map((car) => (
                <motion.div key={car._id} variants={fadeInUp}>
                  <CarCard car={car} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full glass border border-border flex items-center justify-center">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                No Vehicles Found
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSelectedMake("all");
                  setMaxPrice("all");
                  setMinYear("all");
                  setMaxMileage("all");
                }}
                variant="outline"
                className="glass border-border"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Simplified CTA background for light mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our inventory is constantly updated. Contact us and we'll help you
              find your perfect vehicle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gold rounded-full px-8">
                <a href="tel:0662011492">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 066 201 1492
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full glass border-border hover:bg-muted/50"
              >
                <a href="https://wa.me/27662011492" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
