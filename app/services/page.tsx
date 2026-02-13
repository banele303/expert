"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  Wrench,
  CreditCard,
  Shield,
  FileCheck,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Bike,
  Globe,
  Package,
  Hammer,
  SprayCan,
  ShieldCheck,
  Gauge,
  Zap,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const services = [
  {
    icon: Hammer,
    title: "Panel Beating",
    subtitle: "Precision Body Repair",
    description:
      "Expert restoration of vehicle bodies. We use advanced techniques to remove dents and repair body damage to factory specifications.",
    features: [
      "Major & Minor body repairs",
      "Structural alignment",
      "Dent pull & repair",
      "Corrosion treatment",
    ],
    href: "/contact",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: SprayCan,
    title: "Spray Painting",
    subtitle: "Showroom Finish",
    description:
      "Computerized color matching and state-of-the-art spray booths ensure a flawless, long-lasting finish for your vehicle.",
    features: [
      "Color matching technology",
      "Custom paint jobs",
      "Clear coat protection",
      "Oven-baked finishes",
    ],
    href: "/contact",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Package,
    title: "Body Parts",
    subtitle: "Quality Supplier",
    description:
      "We supply a wide range of genuine and certified aftermarket auto body parts for various makes and models in Johannesburg.",
    features: [
      "Bumper & Hood replacements",
      "Headlights & Tail lights",
      "Grilles & Mirrors",
      "Bulk parts supply",
    ],
    href: "/contact",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Repairs",
    subtitle: "Hassle-Free Processing",
    description:
      "We are approved by major insurance providers. We handle the paperwork and process to ensure a smooth repair journey for you.",
    features: [
      "Digital quoting (Audatex)",
      "Direct insurance billing",
      "Claims assistance",
      "Accredited by major insurers",
    ],
    href: "/contact",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Gauge,
    title: "Chassis Straightening",
    subtitle: "Structural Integrity",
    description:
      "Using laser-guided technology to ensure your vehicle's frame and chassis are aligned perfectly for maximum safety.",
    features: [
      "Laser alignment",
      "Frame straightening",
      "Suspension checks",
      "Post-accident safety checks",
    ],
    href: "/contact",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Zap,
    title: "Dent Removal",
    subtitle: "Paintless Solution",
    description:
      "PDR (Paintless Dent Removal) for those minor door dings and hail damage without needing a full respray.",
    features: [
      "Eco-friendly process",
      "Original paint preserved",
      "Faster turnaround time",
      "Cost-effective",
    ],
    href: "/contact",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Shield,
    title: "Hail Damage",
    subtitle: "Specialized Repair",
    description:
      "Comprehensive hail damage repair services to bring your car back to pre-storm condition quickly and effectively.",
    features: [
      "Specialized PDR tools",
      "Large scale repair capacity",
      "Insurance approved",
      "Guaranteed results",
    ],
    href: "/contact",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Wrench,
    title: "Restoration",
    subtitle: "Classic & Vintage",
    description:
      "Passionate restoration services for classic and vintage vehicles, bringing them back to their former glory with meticulous care.",
    features: [
      "Custom fabrication",
      "Original part sourcing",
      "Heritage color matching",
      "Full rebuilds",
    ],
    href: "/contact",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Elite Showcase */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28">
        {/* Deep Industrial Background */}
        <div className="absolute inset-0 z-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(237,137,54,0.1),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block px-5 py-2 glass-premium rounded-none text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-8"
                >
                  Precision Engineered Solutions
                </motion.span>
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-9xl font-display font-medium tracking-tighter mb-8 leading-[0.85] text-white"
                >
                  ELITE <br />
                  <span className="gradient-text italic">SERVICES.</span>
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-3xl text-muted-foreground font-light max-w-xl leading-snug italic"
                >
                  From catastrophic damage to concours-level restoration, we provide the ultimate choice for <span className="text-white font-medium not-italic">discerning vehicle owners</span> in Johannesburg.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="pt-10">
                   <Button asChild size="xl" className="btn-primary rounded-none px-12 py-8 text-xl font-black uppercase tracking-widest">
                      <a href="https://wa.me/27837086050">Get An Assessment</a>
                   </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Cinematic Visual: ximage.png */}
            <div className="lg:col-span-5 relative hidden lg:block">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8, x: 50 }}
                 animate={{ opacity: 1, scale: 1, x: 0 }}
                 transition={{ duration: 1 }}
                 className="relative aspect-square"
               >
                  <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                  <div className="relative z-10 w-full h-full">
                     <Image 
                       src="/workshop-services.png" 
                       alt="Service Excellence" 
                       fill 
                       className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" 
                     />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="glass-premium rounded-[2.5rem] p-6 md:p-10 h-full border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  {/* Background Icon Glow */}
                  <service.icon className="absolute -right-8 -bottom-8 h-48 w-48 text-primary/5 group-hover:text-primary/10 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none mb-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow font-light">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 mb-10">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild className="btn-primary rounded-full px-8 flex-1">
                        <Link href={service.href}>Details</Link>
                      </Button>
                      <Button asChild variant="outline" className="glass border-white/10 rounded-full px-8 flex-1">
                        <a href="https://wa.me/27837086050">Enquire</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free assessment and quote. Our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gold rounded-full px-8">
                <a href="tel:0837086050">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 083 708 6050
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full glass border-white/20"
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
