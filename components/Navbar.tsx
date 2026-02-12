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
  { name: "Dealership", href: "/dealership" },
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-background border-border py-2" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Mobile Header: Grouping Logo and Icons close together */}
        <div className="flex lg:hidden items-center gap-4">
          {/* Logo - No rounding */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12 border border-white/10 bg-white/5">
              <Image
                src="/goshen-logo.png"
                alt="Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-display font-black tracking-tighter">GOSHEN</span>
              <span className="text-[8px] uppercase tracking-widest font-bold opacity-60">Auto Parts</span>
            </div>
          </Link>

          {/* Mobile Action Buttons - Right next to logo as requested */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 border border-white/5 rounded-none"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Header: Standard spacing */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14 border border-white/10 bg-white/5">
              <Image src="/goshen-logo.png" alt="Logo" fill className="object-contain p-1" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-display font-black tracking-tighter">GOSHEN</span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 text-muted-foreground">Auto Parts & More</span>
            </div>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
               <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 border border-white/5 rounded-none"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild className="btn-primary rounded-none px-8 py-6 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                <Link href="/dealership">Explore</Link>
              </Button>
            </div>
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
                    <Link href="/dealership" onClick={() => setIsOpen(false)}>
                      Inventory <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
                 <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 rounded-none h-14 border-white/10">
                       <a href="tel:0662011492" className="flex items-center justify-center gap-2">Call Now</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 rounded-none h-14 border-white/10">
                       <a href="https://wa.me/27662011492" className="flex items-center justify-center gap-2">WhatsApp</a>
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
