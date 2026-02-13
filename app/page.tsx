"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Shield,
  Award,
  CreditCard,
  Wrench,
  Users,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  Car,
  CheckCircle,
  Sparkles,
  Settings,
  Gauge,
  ClipboardCheck,
  Hammer,
  SprayCan,
  Bike,
  Globe,
  Package,
  FileCheck,
} from "lucide-react";
import NextImage from "next/image";

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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - The "WOW" Factor */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020202]">
        {/* Deep Space Background with Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[200px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[200px] rounded-full animate-pulse-slow" />
          
          {/* Mobile Background Image - NEW */}
          <div className="absolute inset-0 lg:hidden block">
            <NextImage 
              src="/repair-services.png" 
              alt="Repair Background" 
              fill 
              className="object-cover brightness-[0.2]" 
              priority
            />
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black lg:from-transparent lg:via-black/50 lg:to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-32 md:pt-40 pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-6 py-2 glass-premium rounded-none border-l-4 border-primary mb-10"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">
                  Elite Restoration Studio
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold leading-[0.8] mb-6 md:mb-8 tracking-tighter"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]">MASTER</span>
                <br />
                <span className="gradient-text italic opacity-90 drop-shadow-[0_0_80px_rgba(237,137,54,0.4)]">PIECE.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-3xl text-muted-foreground mb-10 md:mb-12 max-w-xl leading-[1.1] font-light italic"
              >
                Beyond repair. We specialize in <span className="text-white font-black not-italic decoration-primary decoration-4 underline-offset-8 text-base md:text-2xl">TOTAL REBIRTH</span> of your automotive assets.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-6 md:gap-8"
              >
                <Button
                  asChild
                  size="xl"
                  className="btn-primary rounded-none h-20 md:h-24 px-10 md:px-16 text-xl md:text-2xl font-black uppercase tracking-widest group relative overflow-hidden"
                >
                  <Link href="/services">
                    <span className="relative z-10 flex items-center gap-4">
                      Explore Services
                      <ArrowRight className="h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-3 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </Link>
                </Button>
                
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-black mb-1">Direct Hotline</span>
                  <a href="tel:0837086050" className="text-3xl font-display font-bold text-white hover:text-primary transition-colors tracking-tighter">083 708 6050</a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Futuristic 3D Visual */}
            <div className="relative h-[400px] md:h-[600px] lg:h-[800px] w-full flex items-center justify-center lg:mt-0 mt-12">
               {/* Orbital Glow */}
               <div className="absolute w-[80%] h-[80%] border border-primary/20 rounded-full animate-spin-slow" />
               <div className="absolute w-[90%] h-[90%] border border-blue-500/10 rounded-full animate-spin-reverse-slow" />
               
               {/* Main "COOL" Visual: ximage.png with 3D Float */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotateY: 30, z: -100 }}
                 animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 className="relative z-10 w-full h-full flex items-center justify-center"
               >
                  <motion.div
                    animate={{ 
                      y: [0, -30, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative w-full h-full drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                  >
                    <Image
                      src="/vehicle-maintenance.png"
                      alt="Expert Vehicle Maintenance"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
               </motion.div>

               {/* Floating Elements */}
               <motion.div
                 animate={{ y: [20, -20, 20] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-20 right-0 glass-premium p-6 rounded-none border border-white/20 z-20 backdrop-blur-3xl"
               >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-widest leading-none">Insurance</p>
                      <p className="text-[10px] text-primary font-bold">Approved Provider</p>
                    </div>
                  </div>
               </motion.div>

               <motion.div
                 animate={{ x: [-20, 20, -20] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-40 left-0 glass-premium p-6 rounded-none border border-white/20 z-20"
               >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-widest leading-none">Quality</p>
                      <p className="text-[10px] text-muted-foreground font-bold">100% Guaranteed</p>
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Bottom High-Tech Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
          >
            {[
              { label: "Workshop Capacity", val: "50+ Vehicles", icon: Car },
              { label: "Years Experience", val: "25+ Expertly", icon: Award },
              { label: "Success Rate", val: "99.9% Perfect", icon: Gauge },
              { label: "Claims Processed", val: "10k+ Done", icon: FileCheck },
            ].map((stat, i) => (
              <div key={i} className="bg-black/40 backdrop-blur-xl p-6 md:p-8 group hover:bg-primary transition-colors duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-white/70">{stat.label}</span>
                </div>
                <p className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-white">{stat.val}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-primary py-3 md:py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 mx-6 md:mx-12">
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" /> Xpert Panel Beaters
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Hammer className="h-4 w-4 md:h-5 md:w-5" /> Professional Panel Beating
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <SprayCan className="h-4 w-4 md:h-5 md:w-5" /> Showroom Spray Painting
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Package className="h-4 w-4 md:h-5 md:w-5" /> Auto Body Parts Supplier
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5" /> Insurance Approved Fixes
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Offerings Section - Upgraded */}
      <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-16 lg:mb-24"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 glass-premium rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 md:mb-6"
            >
              The Xpert Experience
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-7xl font-display font-medium tracking-tighter mb-4 md:mb-6 lg:mb-8"
            >
              Curated <span className="gradient-text italic">Excellence</span> <br className="hidden md:block" /> Across Every Drive
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            >
              From the roar of a premium engine to the precision of professional tools, we define quality on your terms.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Hammer,
                title: "PANEL BEATING",
                subtitle: "Precision Repair",
                description: "Expert restoring of vehicle bodies to their original factory condition.",
                gradient: "from-blue-500/20 to-indigo-500/10",
              },
              {
                icon: SprayCan,
                title: "SPRAY PAINTING",
                subtitle: "Factory Finish",
                description: "Computerized color matching and high-quality oven-baked finish.",
                gradient: "from-emerald-500/20 to-green-500/10",
              },
              {
                icon: Package,
                title: "BODY PARTS",
                subtitle: "Quality Supplier",
                description: "Wide range of genuine and aftermarket auto body parts in Johannesburg.",
                gradient: "from-amber-500/20 to-orange-500/10",
              },
              {
                icon: Shield,
                title: "INSURANCE",
                subtitle: "Approved Repairs",
                description: "Seamless processing of insurance claims for all major providers.",
                gradient: "from-purple-500/20 to-pink-500/10",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="relative glass-card rounded-[2rem] p-6 md:p-10 h-full border border-white/5 transition-all duration-500 group-hover:border-primary/50 overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshop Section - High-End Aesthetic */}
      <section className="py-20 md:py-32 lg:py-48 relative overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-none text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">
                  Elite Craftsmanship
                </span>
                <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-[0.85] text-white">
                  THE <span className="gradient-text italic">GOLD</span> <br />
                  STANDARD.
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
                Our state-of-the-art facility in Johannesburg isn't just a workshop—it's a sanctuary for automotive perfection. 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                {[
                  { title: "Artisanal Panel Beating", desc: "Hand-crafted precision for complex bodywork.", icon: Hammer },
                  { title: "Spectro Color Match", desc: "Digital color matching for a flawless finish.", icon: SprayCan },
                  { title: "Structural Integrity", desc: "Rigorous chassis realignment to factory spec.", icon: Gauge },
                  { title: "Insurance Direct", desc: "Seamless handling of all major providers.", icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-10 flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="xl"
                  className="btn-gold rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest"
                >
                  <Link href="/services">
                    Our Expertise
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="glass border-white/10 rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest"
                >
                  <Link href="/contact">
                    Find Us
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Showcase Visuals: x2image.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-float-slow" />
              <div className="relative z-10 grid grid-cols-12 gap-4">
                <div className="col-span-8 space-y-4">
                  <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-white/10 shadow-3xl">
                    <Image 
                      src="/work-shop.png" 
                      alt="Workshop Excellence" 
                      fill 
                      className="object-cover hover:scale-110 transition-transform duration-[2s]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                       <span className="text-3xl font-black text-white italic tracking-tighter">Elite Facility</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 space-y-4 pt-12">
                   <div className="relative aspect-[3/4] rounded-none overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src="/panel-pitting.png" 
                      alt="Artisan Work" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-primary p-8 rounded-none flex flex-col justify-end aspect-square">
                     <span className="text-4xl font-black text-white tracking-tighter">100%</span>
                     <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest leading-tight">Accurate Alignment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Cinematic Steps */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-background">
         <div className="container mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-24 md:mb-32"
            >
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">The Master Workflow</span>
               <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-white">
                  FROM CRASH TO <span className="gradient-text italic">CONCOURS.</span>
               </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-0 border border-white/5 divide-x divide-white/5">
                {[
                  {
                    step: "01",
                    title: "ASSESSMENT",
                    desc: "Precision digital appraisal and insurance integration."
                  },
                  {
                    step: "02",
                    title: "RESTORATION",
                    desc: "Artisanal panel beating and factory-grade finishes."
                  },
                  {
                    step: "03",
                    title: "DELIVERY",
                    desc: "Final concours-level inspection and showroom reveal."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-12 md:p-20 group hover:bg-white/[0.02] transition-colors"
                  >
                     <span className="text-7xl md:text-[10rem] font-black text-white/5 group-hover:text-primary/10 transition-colors leading-none tracking-tighter mb-8 block">{item.step}</span>
                     <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                     <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-2 glass rounded-full text-xs md:text-sm font-medium text-primary mb-4">
                Our Blog
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Latest Insights & <span className="gradient-text">Pro Tips.</span>
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 glass border-white/20">
              <Link href="/blog">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Maintain Your Car's Paint Job",
                excerpt: "Discover the best practices for keeping your vehicle's spray paint looking fresh and vibrant for years.",
                date: "Feb 12, 2026",
                image: "/spray-paint.png"
              },
              {
                title: "Understanding Insurance Deductibles",
                excerpt: "Navigating the world of insurance claims can be tricky. We break down what you need to know about deductibles.",
                date: "Feb 10, 2026",
                image: "/workshop-services.png"
              },
              {
                title: "Finding the Right Replacement Parts",
                excerpt: "When to choose OEM vs. aftermarket body parts. An expert guide for Johannesburg car owners.",
                date: "Feb 08, 2026",
                image: "/repair-services.png"
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[2rem] overflow-hidden border border-white/5 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Repair Guide
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs text-accent font-bold mb-2 block">{post.date}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                  <Link href="/blog" className="text-sm font-bold flex items-center gap-2 group/link">
                    Read More <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Aggressive & Premium */}
      <section className="relative py-24 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/work-shop.png"
            alt="Final Result"
            fill
            className="object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-6xl md:text-9xl font-display font-medium tracking-tighter text-white mb-10">
              READY FOR <br />
              <span className="gradient-text italic">PERFECTION?</span>
            </h2>
            
            <p className="text-xl md:text-3xl text-muted-foreground font-light mb-16 max-w-2xl mx-auto italic">
              Don't settle for "fixed." Demand <span className="text-white font-medium not-italic">restored.</span> 
              Contact Johannesburg's elite panel beating team today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                asChild
                size="xl"
                className="w-full sm:w-auto btn-gold rounded-none px-16 py-10 text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <a href="tel:0837086050">
                  <Phone className="mr-4 h-8 w-8" />
                  Call 083 708 6050
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                className="w-full sm:w-auto btn-primary rounded-none px-16 py-10 text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-4 h-8 w-8 text-green-400" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Johannesburg, ZA</span>
               </div>
               <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Insurance Approved</span>
               </div>
               <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Top Rated Choice</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
