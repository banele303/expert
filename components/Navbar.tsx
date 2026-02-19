"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  ChevronDown,
  ArrowRight,
  Zap,
  Sparkles,
  LogOut,
  User,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";
import { LoginDialog } from "@/components/auth/LoginDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/services" },
  { name: "Catalog", href: "/inventory" },
  { name: "Warehouse", href: "/services/workshop" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white text-slate-900 border-b border-slate-100 shadow-sm">
      {/* Top Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo / Mascot */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-44 h-20">
               <Image 
                src="/new-lo.png" 
                alt="~Spares City" 
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </Link>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full flex items-center">
              <input
                type="text"
                placeholder="Search for parts, cars, or brands..."
                className="w-full h-11 pl-4 pr-12 rounded-full bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const query = e.currentTarget.value;
                    if (query.trim()) {
                      window.location.href = `/inventory?search=${encodeURIComponent(query)}`;
                    }
                  }
                }}
              />
              <button 
                onClick={(e) => {
                  const input = e.currentTarget.parentElement?.querySelector('input');
                  const query = input?.value;
                  if (query?.trim()) {
                    window.location.href = `/inventory?search=${encodeURIComponent(query)}`;
                  }
                }}
                className="absolute right-0 h-full px-4 rounded-r-full bg-[#ef4444] hover:bg-[#dc2626] transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <Link href="/inventory" className="text-[#ef4444] hover:text-slate-900 transition-colors uppercase font-black tracking-widest text-[11px] flex items-center gap-1">
                <Search className="w-3 h-3" />
                Inventory
              </Link>
              <Link href="/services/workshop" className="text-slate-500 hover:text-slate-900 transition-colors">Warehouse</Link>
              <Link href="/contact" className="bg-[#ef4444] text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-[#dc2626] transition-colors">
                <Zap className="w-3 h-3" />
                Request Part
              </Link>
            </div>

            {/* Icons & Auth */}
            <div className="flex items-center gap-3">
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-3 p-1 pr-4 rounded-full bg-white hover:bg-slate-50 transition-all border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/10 outline-none group">
                      <Avatar className="h-9 w-9 ring-2 ring-white">
                        <AvatarImage src={session.user.image || ""} />
                        <AvatarFallback className="bg-gradient-to-br from-red-50 to-red-100 text-red-600 font-bold border border-red-200">
                          {session.user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start text-xs hidden lg:flex">
                        <span className="font-bold text-slate-900 leading-none group-hover:text-red-600 transition-colors">
                            {session.user.name}
                        </span>
                        <span className="text-slate-500 leading-none mt-1 max-w-[140px] truncate block">
                            {session.user.email}
                        </span>
                      </div>
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors hidden lg:block ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 p-2">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-sm font-bold text-slate-900">{session.user.name}</p>
                        <p className="text-xs text-slate-500 truncate">
                          {session.user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-slate-600 focus:text-slate-900 focus:bg-slate-50 py-2.5">
                      <User className="mr-2 h-4 w-4" />
                      <span className="font-medium">My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 py-2.5">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span className="font-medium">Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:block">
                  <LoginDialog />
                </div>
              )}

              <button className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors relative border border-slate-100">
                <ShoppingCart className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#ef4444] text-white rounded-full text-[10px] flex items-center justify-center shadow-sm">0</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 rounded-lg bg-slate-50 border border-slate-100" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-slate-900" /> : <Menu className="text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <div className="relative w-full flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-11 pl-4 pr-12 rounded-lg bg-slate-50 text-slate-900 text-sm focus:outline-none border border-slate-200"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const query = e.currentTarget.value;
                      if (query.trim()) {
                        window.location.href = `/inventory?search=${encodeURIComponent(query)}`;
                        setIsOpen(false);
                      }
                    }
                  }}
                />
                <button 
                  onClick={(e) => {
                    const input = e.currentTarget.parentElement?.querySelector('input');
                    const query = input?.value;
                    if (query?.trim()) {
                      window.location.href = `/inventory?search=${encodeURIComponent(query)}`;
                      setIsOpen(false);
                    }
                  }}
                  className="absolute right-0 h-full px-4 rounded-r-lg bg-[#ef4444]"
                >
                  <Search className="w-5 h-5 text-black" />
                </button>
              </div>
              <Link href="/inventory" className="text-sm font-black uppercase py-3 border-b border-slate-50 text-slate-900">Products</Link>
              <Link href="/services" className="text-sm font-black uppercase py-3 border-b border-slate-50 text-slate-900">Catalog</Link>
              <Link href="/about" className="text-sm font-black uppercase py-3 border-b border-slate-50 text-slate-900">About</Link>
              
              {/* Mobile Auth */}
              {session ? (
                 <div className="py-3 border-b border-slate-50 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={session.user.image || ""} />
                        <AvatarFallback className="bg-slate-200">
                          {session.user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{session.user.name}</span>
                        <span className="text-xs text-slate-500">{session.user.email}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => signOut()} className="ml-auto text-red-500">
                        <LogOut className="h-5 w-5" />
                    </Button>
                 </div>
              ) : (
                 <div className="py-3">
                    <LoginDialog />
                 </div>
              )}

              <div className="flex flex-col gap-2 mt-2">
                <Link href="/contact" className="w-full h-14 bg-[#ef4444] text-white rounded-xl flex items-center justify-center font-black uppercase tracking-widest shadow-lg shadow-red-500/20 transition-all hover:bg-black">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

