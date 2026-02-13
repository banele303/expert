"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

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

const categories = ["All", "Repair Guides", "Insurance", "Customization", "Company News"];

const posts = [
  {
    title: "How to Maintain Your Car's Paint Job",
    excerpt: "Discover the best practices for keeping your vehicle's spray paint looking fresh and vibrant for years. From washing tips to wax selection.",
    date: "Feb 12, 2026",
    author: "Xpert Team",
    category: "Repair Guides",
    image: "/spray-paint.png",
    slug: "maintain-car-paint"
  },
  {
    title: "Understanding Insurance Deductibles in South Africa",
    excerpt: "Navigating the world of insurance claims can be tricky. We break down what you need to know about deductibles and third-party claims.",
    date: "Feb 10, 2026",
    author: "Xpert Team",
    category: "Insurance",
    image: "/workshop-services.png",
    slug: "insurance-deductibles"
  },
  {
    title: "Finding the Right Replacement Parts",
    excerpt: "When to choose OEM vs. aftermarket body parts. An expert guide for Johannesburg car owners on quality and safety.",
    date: "Feb 08, 2026",
    author: "Xpert Team",
    category: "Repair Guides",
    image: "/repair-services.png",
    slug: "right-replacement-parts"
  },
  {
    title: "The Importance of Chassis Alignment after a Crash",
    excerpt: "Even a small fender bender can throw off your vehicle's alignment. Learn why structural integrity is the key to safety.",
    date: "Feb 05, 2026",
    author: "Xpert Team",
    category: "Repair Guides",
    image: "/panel-pitting.png",
    slug: "chassis-alignment-importance"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 glass-premium rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6"
          >
            Insights & Guides
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6"
          >
            The Xpert <span className="gradient-text italic">Journal.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            Your go-to resource for automotive repair advice, insurance tips, and the latest from Johannesburg's premier panel beaters.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest ${
                i !== 0 ? "glass border-white/10" : ""
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md">
                    {post.category}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-primary" />
                    {post.author}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <Button asChild variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent justify-start">
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm font-bold">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
