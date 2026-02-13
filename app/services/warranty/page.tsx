"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Wrench,
  Car,
  AlertCircle,
  Award,
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

const coverage = [
  {
    icon: Wrench,
    title: "Engine Coverage",
    description: "Complete engine protection including all major components",
  },
  {
    icon: Car,
    title: "Transmission",
    description: "Full coverage for gearbox and transmission systems",
  },
  {
    icon: Shield,
    title: "Electrical Systems",
    description: "Protection for electrical components and systems",
  },
  {
    icon: AlertCircle,
    title: "Cooling System",
    description: "Coverage for radiator, water pump, and cooling components",
  },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6"
            >
              <Shield className="h-4 w-4" />
              Warranty Plans
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Drive with{" "}
              <span className="gradient-text">Peace of Mind</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Comprehensive warranty coverage to protect your investment. Our 6-month warranty plans cover major mechanical components.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="btn-primary rounded-full px-8">
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                  Learn More
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full glass border-white/20"
              >
                <a href="tel:0837086050">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 083 708 6050
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[oklch(0.1_0.01_260)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              What's <span className="gradient-text">Covered</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Our comprehensive warranty covers all major mechanical components
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coverage.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-3xl p-8 border border-white/5 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Warranty Benefits */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-8 text-center"
            >
              Warranty Benefits
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="glass rounded-3xl p-8 md:p-12 border border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "6-month warranty coverage",
                  "Major component protection",
                  "Nationwide support",
                  "Hassle-free claims process",
                  "No hidden fees",
                  "Transferable warranty",
                  "RMI approved repairs",
                  "24/7 roadside assistance available",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Warranty */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[oklch(0.1_0.01_260)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-display font-bold mb-12 text-center"
            >
              Why Choose Our Warranty
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Comprehensive",
                  description: "Full coverage for major mechanical components",
                },
                {
                  icon: Award,
                  title: "Trusted",
                  description: "Backed by reputable warranty providers",
                },
                {
                  icon: CheckCircle,
                  title: "Simple Claims",
                  description: "Easy and straightforward claims process",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 border border-white/5 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Protect Your Investment
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our warranty options
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gold rounded-full px-8">
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                  Get Warranty Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full glass border-white/20">
                <Link href="/contact">
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
