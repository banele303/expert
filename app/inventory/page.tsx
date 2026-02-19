"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Car, 
  Calendar, 
  Gauge, 
  Fuel, 
  ShoppingCart, 
  X,
  Loader2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function InventoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>}>
      <InventoryContent />
    </Suspense>
  );
}

function InventoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);
  
  // Fetch products
  const products = useQuery(api.cars.getAll, { 
    make: selectedMake || undefined,
    search: searchTerm || undefined,
    minPrice: priceRange[0],
    maxPrice: priceRange[1], 
  });
  
  const makes = useQuery(api.cars.getMakes);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header Section */}
      <section className="bg-slate-900 pt-32 pb-12 text-white px-6">
        <div className="container mx-auto">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Complete Catalog</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            WAREHOUSE <span className="text-primary italic">INVENTORY.</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-xl text-lg">
            Browse our real-time stock of OEM parts, performance kits, and accessories. Direct from our Bramley HQ.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by part name, model or SKU..." 
              className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            
            {/* Make Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 px-6 hover:bg-slate-50">
                  {selectedMake || "All Makes"} <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-80 overflow-y-auto">
                <DropdownMenuItem onClick={() => setSelectedMake(null)} className="font-bold cursor-pointer">
                  All Makes
                </DropdownMenuItem>
                {makes?.map((make) => (
                  <DropdownMenuItem key={make} onClick={() => setSelectedMake(make)} className="font-medium cursor-pointer">
                    {make}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Price Filter (Basic) */}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 px-6 hover:bg-slate-50">
                  Price Range <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-4 w-64">
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}+</span>
                  </div>
                  <Slider 
                    defaultValue={[0, 100000]} 
                    max={200000} 
                    step={1000} 
                    value={priceRange}
                    onValueChange={(val) => setPriceRange(val)}
                  />
                   <Button size="sm" className="w-full mt-2" onClick={() => {}}>Apply</Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {(selectedMake || searchTerm) && (
              <Button 
                variant="ghost" 
                onClick={() => { setSelectedMake(null); setSearchTerm(""); setPriceRange([0, 100000]); }}
                className="h-12 w-12 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50"
              >
                <X className="h-5 w-5" />
              </Button>
            )}

          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6 container mx-auto">
        {!products ? (
           <div className="flex flex-col items-center justify-center py-20">
             <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Inventory...</p>
           </div>
        ) : products.length === 0 ? (
           <div className="text-center py-32 border-2 border-dashed border-slate-200 rounded-3xl">
             <p className="text-2xl font-black text-slate-300 uppercase tracking-tight mb-2">No Parts Found</p>
             <p className="text-slate-400 font-medium">Try adjusting your filters or search term.</p>
           </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
            {products.map((car: any, idx: number) => (
              <motion.div
                key={car._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              >
                <Link href={`/car/${car._id}`} className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    {/* Badge */}
                    {car.isDealOfWeek && (
                      <span className="absolute top-3 left-3 bg-[#ef4444] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm z-10">
                        Deal of Week
                      </span>
                    )}
                    <Image
                      src={car.images[0] || "/placeholder.png"}
                      alt={car.make + " " + car.model}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{car.make}</span>
                       <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${car.isAvailable ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                         {car.isAvailable ? "In Stock" : "Sold Out"}
                       </span>
                    </div>
                    
                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                      {car.year} {car.model}
                    </h3>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-slate-500 mb-6">
                      <div className="flex items-center gap-1.5">
                        <Fuel className="h-3 w-3" /> {car.fuelType}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="h-3 w-3" /> {car.mileage ? `${(car.mileage / 1000).toFixed(0)}k km` : "New"}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Export Price</span>
                        <span className="text-xl font-black text-slate-900">{formatPrice(car.price)}</span>
                      </div>
                      <button className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
}
