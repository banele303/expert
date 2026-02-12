"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
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
    icon: Car,
    title: "Vehicle Sales",
    subtitle: "Handpicked Quality Cars",
    description:
      "Browse our carefully curated selection of pre-owned vehicles. Each car is inspected, verified, and prepared to meet our high standards. We offer a wide range of makes and models to suit every need and budget.",
    features: [
      "Thorough vehicle inspection",
      "Verified service history",
      "Fair market pricing",
      "Wide selection of makes",
    ],
    href: "/dealership",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Wrench,
    title: "Workshop Services",
    subtitle: "RMI Approved Workshop",
    description:
      "Our certified technicians provide professional maintenance and repairs for all vehicle makes. From routine servicing to complex repairs, trust our RMI-approved workshop for expert care.",
    features: [
      "RMI certified technicians",
      "Genuine parts available",
      "Full service & repairs",
      "Diagnostic services",
    ],
    href: "/contact",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "Vehicle Finance",
    subtitle: "Flexible Payment Options",
    description:
      "Don't let budget constraints stop you from getting your dream car. We offer flexible finance options with competitive rates, making it easier than ever to drive away in your new vehicle.",
    features: [
      "Competitive interest rates",
      "Flexible payment terms",
      "Quick approval process",
      "Multiple bank options",
    ],
    href: "/contact",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Shield,
    title: "Warranty Plans",
    subtitle: "6-Month Coverage Available",
    description:
      "Drive with peace of mind knowing your vehicle is protected. Our comprehensive warranty plans cover major mechanical components, giving you confidence in your purchase.",
    features: [
      "6-month warranty option",
      "Major component coverage",
      "Nationwide support",
      "Hassle-free claims",
    ],
    href: "/contact",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: FileCheck,
    title: "Trade-In Service",
    subtitle: "Fair Value for Your Car",
    description:
      "Looking to upgrade? We offer fair trade-in values for your current vehicle. Our team will assess your car and provide a competitive offer, making the upgrade process seamless.",
    features: [
      "Fair market valuations",
      "Quick assessment process",
      "Trade-in towards purchase",
      "No obligation quotes",
    ],
    href: "/contact",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Bike,
    title: "Bicycles",
    subtitle: "Premium Cycles",
    description:
      "Explore our range of high-quality bicycles for all ages and terrains. From mountain bikes to road racers, we have the perfect ride for you.",
    features: [
      "Mountain & Road bikes",
      "Kids' bicycles",
      "Accessories & Gear",
      "Servicing & Repairs",
    ],
    href: "/contact",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Wrench,
    title: "Professional Tools",
    subtitle: "Quality Hardware",
    description:
      "Equip your workshop or garage with professional-grade tools. We stock a wide variety of hand and power tools for every job.",
    features: [
      "Hand tools",
      "Power tools",
      "Diagnostic equipment",
      "Workshop essentials",
    ],
    href: "/contact",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Globe,
    title: "Importation Service",
    subtitle: "Global Sourcing",
    description:
      "Need a specific part or vehicle? Our importation service handles everything from sourcing to delivery, ensuring you get exactly what you need.",
    features: [
      "Global sourcing network",
      "Customs handling",
      "Door-to-door delivery",
      "Transparent pricing",
    ],
    href: "/contact",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <NextImage 
             src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2670&auto=format&fit=crop" 
             alt="Service Excellence" 
             fill 
             className="object-cover brightness-[0.2]"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 glass-premium rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-8"
            >
              Mastery in Motion
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-8xl font-display font-medium tracking-tighter mb-6 md:mb-8 leading-[0.9] md:leading-[0.8]"
            >
              Curated <br />
              <span className="gradient-text italic">Services.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
            >
              Precision engineering meets unparalleled care. Explore the Goshen suite of elite automotive and hardware solutions.
            </motion.p>
          </motion.div>
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
                        <a href="https://wa.me/27662011492">Enquire</a>
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
              Contact us today to learn more about our services or schedule a
              visit to our dealership.
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
