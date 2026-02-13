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
  Package,
} from "lucide-react";
import Image from "next/image";
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

  const cars = useQuery(api.cars.getAll, {
    make: selectedMake === "all" ? undefined : selectedMake,
  });
  const makes = useQuery(api.cars.getMakes);

  const isLoading = cars === undefined;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 glass-premium rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6"
          >
            Body Parts Supplier
          </motion.span>
           <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-4"
          >
            Our <span className="gradient-text italic">Inventory.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
             className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            Browse our extensive collection of high-quality auto body parts for all major vehicle makes and models in Johannesburg.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <div className="glass-premium rounded-[2.5rem] p-8 border border-white/5 max-w-2xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="flex-grow w-full space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4 flex items-center gap-2">
                 <Filter className="h-4 w-4" /> Filter by Make
               </label>
               <Select value={selectedMake} onValueChange={setSelectedMake}>
                 <SelectTrigger className="w-full h-14 rounded-2xl glass border-white/10 bg-transparent text-lg font-light">
                   <SelectValue placeholder="All Makes" />
                 </SelectTrigger>
                 <SelectContent className="glass-premium border-white/10">
                   <SelectItem value="all">All Makes</SelectItem>
                   {makes?.map((make) => (
                     <SelectItem key={make} value={make}>
                       {make}
                     </SelectItem>
                   ))}
                 </SelectContent>
               </Select>
             </div>
             
             {selectedMake !== "all" && (
                <Button 
                 variant="ghost" 
                 onClick={() => setSelectedMake("all")}
                 className="text-muted-foreground hover:text-foreground h-14 px-8 mt-6 md:mt-0 font-bold uppercase tracking-widest text-xs"
                >
                  Reset
                </Button>
             )}
          </div>
        </div>
      </div>

      {/* Parts Grid - High Impact Coming Soon */}
      <section className="pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="relative glass-premium rounded-none p-12 md:p-32 border border-white/10 max-w-6xl mx-auto overflow-hidden">
             {/* Background Image: x2image.png */}
             <div className="absolute inset-0 z-0">
                <Image 
                  src="/x2image.png" 
                  alt="Inventory" 
                  fill 
                  className="object-cover brightness-[0.15] grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
             </div>

             <div className="relative z-10">
                <div className="w-24 h-24 bg-primary/20 border border-primary/30 rounded-none flex items-center justify-center mx-auto mb-10 animate-pulse">
                    <Package className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter mb-8 text-white leading-[0.85]">
                   MASSIVE WAREHOUSE <br />
                   <span className="gradient-text italic">DIGITIZING.</span>
                </h2>
                <p className="text-xl md:text-3xl text-muted-foreground font-light leading-snug mb-16 max-w-3xl mx-auto italic">
                  We are currently uploading thousands of <span className="text-white font-medium not-italic">certified body parts</span>. Johannesburg's largest inventory is coming to your screen soon.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Button asChild size="xl" className="btn-gold rounded-none px-16 py-10 text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                       <a href="tel:0837086050">Call Parts Desk</a>
                    </Button>
                    <Button asChild size="xl" className="btn-primary rounded-none px-16 py-10 text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                       <a href="https://wa.me/27837086050">WhatsApp Order</a>
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-premium rounded-[3rem] p-12 md:p-20 border border-white/5 max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-8 italic">
              Need a Specific <span className="gradient-text not-italic font-black">Part?</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Bumpers, hoods, lights, or grilles—we source it all. Contact our parts division for the best prices in Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="xl" className="btn-gold rounded-full px-12 w-full sm:w-auto">
                <a href="tel:0837086050">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full glass border-white/10 px-12 w-full sm:w-auto"
              >
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
