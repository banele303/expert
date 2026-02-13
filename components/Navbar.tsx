"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Sun, 
  Moon,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-32 h-14 flex items-center justify-center">
              <Image
                src="/expert-log.png"
                alt="Xpert Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 glass border-white/5"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center glass border-white/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><X className="h-6 w-6" /></motion.div>
                ) : (
                  <motion.div key="menu" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Menu className="h-6 w-6" /></motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-52 h-20 group-hover:scale-105 transition-transform duration-500">
              <Image src="/expert-log.png" alt="Xpert Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-primary relative group ${
                  pathname === link.href ? "text-primary" : "text-white/70"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full ${pathname === link.href ? "w-full" : ""}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="h-8 w-px bg-white/10 mx-2" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-12 h-12 glass border-white/10 group overflow-hidden"
            >
              <div className="group-hover:rotate-45 transition-transform duration-500">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </div>
            </Button>
            <Button asChild className="btn-primary rounded-none px-10 py-7 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/40 relative overflow-hidden group">
              <Link href="/services">
                <span className="relative z-10">Get Estimate</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>


      {/* Simplified Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b z-[90] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-display font-medium tracking-tight">
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                 <Button asChild className="w-full btn-primary rounded-none py-7 text-sm font-black uppercase tracking-widest">
                    <Link href="/services" onClick={() => setIsOpen(false)}>
                      Get A Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
                 <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 rounded-none h-14 border-white/10">
                       <a href="tel:0837086050" className="flex items-center justify-center gap-2">Call Now</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 rounded-none h-14 border-white/10">
                       <a href="https://wa.me/27837086050" className="flex items-center justify-center gap-2">WhatsApp</a>
                    </Button>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
