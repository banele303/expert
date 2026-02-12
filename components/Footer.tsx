"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Star,
  ExternalLink,
} from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Our Cars", href: "/dealership" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Premium Cars",
  "Bicycles",
  "Professional Tools",
  "Importation Services",
  "Workshop Services",
  "Vehicle Finance",
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/27662011492",
    color: "hover:text-green-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/goshenauto",
    color: "hover:text-pink-400",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://tiktok.com/@goshenauto",
    color: "hover:text-white",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/goshenauto",
    color: "hover:text-blue-400",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative bg-gradient-to-b from-background to-[oklch(0.08_0.01_260)] border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                <NextImage
                  src="/goshen-logo.png"
                  alt="Goshen Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight font-display gradient-text leading-none">
                  GOSHEN
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mt-1">
                  Auto Parts & More
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your one-stop shop for Premium Cars, High-End Bicycles, Professional Tools, and Global Importation Services.
            </p>

            {/* Rating Badge */}
            <div className="flex items-center gap-3 p-4 glass rounded-xl">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">5.0</span>
                <span className="text-xs text-muted-foreground">
                  10 REVIEWS
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">
              Visit Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=391+Steve+Biko+Road+Gezina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  391 Steve Biko Road
                  <br />
                  Gezina, Pretoria
                </span>
              </a>

              <a
                href="tel:0662011492"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>066 201 1492</span>
              </a>

              <a
                href="mailto:sales@goshenauto.co.za"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>sales@goshenauto.co.za</span>
              </a>

              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 8:00 - 17:00</p>
                  <p>Sat: 8:00 - 13:00</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-white/10">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 glass rounded-xl text-muted-foreground ${social.color} transition-colors`}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* RMI Badge */}
          <div className="flex items-center gap-3 p-3 glass rounded-xl">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-accent" />
            </div>
            <div className="text-sm">
              <span className="font-semibold text-accent">RMI Approved</span>
              <p className="text-xs text-muted-foreground">
                Certified Workshop
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Goshen Auto Parts And More Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
