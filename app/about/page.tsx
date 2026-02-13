"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import {
  Shield,
  Award,
  Users,
  Car,
  Wrench,
  Star,
  HeartHandshake,
  Target,
  Phone,
  MessageCircle,
  Bike,
  Globe,
} from "lucide-react";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Upgraded */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 md:pt-32">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10" />
          <NextImage
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2670&auto=format&fit=crop"
            alt="Expert Auto Body Restoration"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 glass-premium rounded-full mb-8"
            >
              <HeartHandshake className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Our Legacy</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
            >
              Precision <br />
              <span className="gradient-text italic">Restored.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              Xpert Panel Beaters is Johannesburg's premier destination for high-quality auto body repair and parts supplier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                 <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter">Beyond the <br/><span className="gradient-text italic">Finish Line.</span></h2>
                 <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                   Founded on a vision of uncompromising quality, Xpert Panel Beaters has become the trusted name for insurance-approved repairs and premium auto body parts in Johannesburg.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                       <p className="text-4xl font-display font-black text-primary mb-2">15+</p>
                       <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years of Expertise</p>
                    </div>
                    <div>
                       <p className="text-4xl font-display font-black text-accent mb-2">4.9</p>
                       <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Certified Rating</p>
                    </div>
                 </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                 <div className="space-y-4 md:space-y-6 pt-12">
                     <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 group">
                        <NextImage src="/vehicle-maintenance.png" alt="Repair" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                    <div className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 group">
                       <NextImage src="/spray-paint.png" alt="Painting" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                 </div>
                 <div className="space-y-4 md:space-y-6">
                    <div className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 group">
                       <NextImage src="/panel-pitting.png" alt="Panel Beating" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 group">
                       <NextImage src="/workshop-services.png" alt="Workshop" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-premium p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 max-w-5xl mx-auto"
           >
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-8 italic">Experience the <span className="gradient-text not-italic font-black">Xpert</span> Standard</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Button asChild size="xl" className="w-full sm:w-auto btn-primary rounded-full px-12">
                   <Link href="/services">View Services</Link>
                 </Button>
                 <Button asChild size="xl" variant="outline" className="w-full sm:w-auto glass border-white/10 rounded-full px-12">
                   <Link href="/contact">Visit Our Facility</Link>
                 </Button>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
