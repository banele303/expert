"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import CarCard from "@/components/CarCard";
import DealOfWeek from "@/components/DealOfWeek";
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
} from "lucide-react";

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
  const featuredCars = useQuery(api.cars.getFeatured, { limit: 6 });
  const dealOfWeek = useQuery(api.cars.getDealOfWeek);
  const carMakes = useQuery(api.cars.getMakes);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Upgraded with Split Layout & Cinematic feel */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-32">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop"
            alt="Premium Automotive"
            fill
            className="object-cover object-right lg:object-center brightness-[0.4] scale-105 animate-float"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 glass-premium rounded-full mb-6 lg:mb-8"
              >
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-accent">
                  Excellence in Motion
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-4 md:mb-6 lg:mb-8 tracking-tighter"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="gradient-text drop-shadow-[0_0_30px_rgba(237,137,54,0.3)]">GOSHEN</span>
                <br />
                <span className="text-foreground text-4xl md:text-6xl lg:text-7xl">AUTO PARTS</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 lg:mb-12 max-w-xl leading-relaxed font-light"
              >
                We sell: <span className="text-primary font-medium">CARS</span> •{" "}
                <span className="text-primary font-medium">BICYCLES</span> •{" "}
                <span className="text-primary font-medium">TOOLS</span>
                <br />
                <span className="text-accent/80 mt-2 block text-sm md:text-base">IMPORTATION SERVICE AVAILABLE GLOBALLY</span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <Button
                  asChild
                  size="xl"
                  className="w-full sm:w-auto btn-primary rounded-full px-10 py-8 text-xl font-bold group"
                >
                  <Link href="/dealership">
                    Explore Inventory
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background overflow-hidden relative glass">
                        <Image 
                          src={`https://i.pravatar.cc/150?u=${i}`} 
                          alt="Customer" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold">
                      500+
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground">Trusted by 500+ Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Floating Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:block relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
              <div className="relative z-10 w-full h-full glass-premium rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl rotate-3">
                 <Image
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2670&auto=format&fit=crop"
                  alt="Luxury Car Showcase"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-premium p-6 rounded-3xl z-20 shadow-2xl border-accent/20"
              >
                 <Bike className="h-12 w-12 text-primary mb-2" />
                 <p className="font-bold">Premium Bicycles</p>
                 <span className="text-xs text-muted-foreground">High-End Quality</span>
              </motion.div>
              <motion.div
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-10 -left-10 glass-premium p-6 rounded-3xl z-20 shadow-2xl border-primary/20"
              >
                 <Wrench className="h-12 w-12 text-accent mb-2" />
                 <p className="font-bold">Pro Tools</p>
                 <span className="text-xs text-muted-foreground">Lifetime Warranty</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Reveal */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50">
           <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
           >
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
             <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
           </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-primary py-3 md:py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 mx-6 md:mx-12">
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" /> Goshen Auto Parts And More Ltd
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Car className="h-4 w-4 md:h-5 md:w-5" /> Premium Cars
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Bike className="h-4 w-4 md:h-5 md:w-5" /> High-End Bicycles
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Wrench className="h-4 w-4 md:h-5 md:w-5" /> Pro Tools
              </span>
              <span className="text-sm md:text-lg text-primary-foreground/60">•</span>
              <span className="text-sm md:text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <Globe className="h-4 w-4 md:h-5 md:w-5" /> Global Importation
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
              The Goshen Experience
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
                icon: Car,
                title: "PREMIUM CARS",
                subtitle: "Luxury & Performance",
                description: "Handpicked high-performance vehicles, certified and road-ready.",
                gradient: "from-blue-500/20 to-indigo-500/10",
              },
              {
                icon: Bike,
                title: "BICYCLES",
                subtitle: "Elite Motion",
                description: "From carbon road racers to rugged mountain explorers.",
                gradient: "from-emerald-500/20 to-green-500/10",
              },
              {
                icon: Wrench,
                title: "PRO TOOLS",
                subtitle: "Master Hardware",
                description: "Professional-grade equipment for the ultimate workshop.",
                gradient: "from-amber-500/20 to-orange-500/10",
              },
              {
                icon: Globe,
                title: "IMPORTATION",
                subtitle: "Global Sourcing",
                description: "Seamless global logistics for your specialized needs.",
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

      {/* Workshop Services Section - Redesigned */}
      <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6 md:space-y-8"
            >
              <span className="inline-block px-4 py-2 glass-premium rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-accent">
                RMI CERTIFIED WORKSHOP
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-tight">
                Masterpiece <br />
                <span className="gradient-text italic">Maintenance.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Our state-of-the-art facility combines precision technology with artisanal mechanical expertise to keep your machine in peak condition.
              </p>
              
              <div className="space-y-4 pt-4 md:pt-6">
                {[
                  { title: "Precision Panel Beating", icon: Hammer },
                  { title: "Showroom Spray Painting", icon: SprayCan },
                  { title: "Expert Mechanical Diagnostics", icon: Settings },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-base md:text-lg font-medium group-hover:text-primary transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto btn-gold rounded-full px-8 py-7 mt-8"
              >
                <Link href="/services">
                  View Full Service Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-premium border border-white/10 group">
                  <Image src="/workshop-services.png" alt="Workshop" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="bg-primary p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] text-primary-foreground">
                   <div className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">100%</div>
                   <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-80">Guaranteed Service Quality</p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="bg-accent p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] text-accent-foreground">
                   <div className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">RMI</div>
                   <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-80">Approved Association</p>
                </div>
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-premium border border-white/10 group">
                  <Image src="/repair-services.png" alt="Repair" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
          {/* CTA for Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto btn-primary rounded-full px-8 py-6 text-lg"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Deal of the Week */}
      {dealOfWeek && <DealOfWeek car={dealOfWeek} />}

      {/* Featured Collection */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 glass rounded-full text-xs md:text-sm font-medium text-primary mb-4">
                <Car className="inline h-4 w-4 mr-2" />
                Our Collection
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold">
                Handpicked. Road-Ready.{" "}
                <span className="gradient-text">Yours.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full md:w-auto rounded-full glass border-white/20"
              >
                <Link href="/dealership">
                  View All Cars <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Loading Skeletons */}
          {!featuredCars && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="glass rounded-3xl overflow-hidden border border-border">
                  <Skeleton className="aspect-[16/10] w-full" />
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actual Cars */}
          {featuredCars && featuredCars.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredCars.map((car, index) => (
                <motion.div key={car._id} variants={fadeInUp}>
                  <CarCard car={car} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 glass rounded-full text-xs md:text-sm font-medium text-accent mb-4"
            >
              How It Works
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold"
            >
              Smart Savings <span className="gradient-text-gold">Start Here</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Browse Collection",
                description:
                  "Explore our handpicked selection of quality pre-owned vehicles. Filter by make, model, or budget.",
              },
              {
                step: "02",
                title: "Contact Us",
                description:
                  "Reach out via WhatsApp, call, or visit us. Our team is ready to help you find your perfect match.",
              },
              {
                step: "03",
                title: "Drive Away Happy",
                description:
                  "Complete your purchase with flexible finance options and drive away with warranty coverage.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="glass rounded-3xl p-6 md:p-8 h-full border border-border card-hover">
                  <div className="text-5xl md:text-6xl font-display font-bold gradient-text-gold opacity-30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-accent/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2566&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6"
              >
                Come Visit Us!
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-display gradient-text-gold mb-8"
              >
                And drive away with your new car!
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 mb-10 text-lg"
              >
                <a
                  href="mailto:sales@goshenauto.co.za"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  sales@goshenauto.co.za
                </a>
                <a
                  href="https://maps.google.com/?q=391+Steve+Biko+Road+Gezina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  391 Steve Biko Road, Gezina
                </a>
                <a
                  href="tel:0662011492"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  Tel: 066 201 1492
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="btn-gold rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <a href="tel:0662011492">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg glass border-border"
                >
                  <a href="https://wa.me/27662011492" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                    WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
