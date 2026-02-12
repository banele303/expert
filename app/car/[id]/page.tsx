"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Fuel,
  Gauge,
  Calendar,
  Car,
  Palette,
  Shield,
  CreditCard,
  FileCheck,
  Share2,
  Heart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function CarDetailPage() {
  const params = useParams();
  const carId = params.id as Id<"cars">;
  const car = useQuery(api.cars.getById, { id: carId });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (km: number) => {
    return new Intl.NumberFormat("en-ZA").format(km) + " km";
  };

  if (car === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (car === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold mb-4">
            Vehicle Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            This vehicle may no longer be available.
          </p>
          <Button asChild className="btn-primary rounded-full">
            <Link href="/dealership">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const images = car.images.length > 0 ? car.images : [
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${car.year} ${car.make} ${car.model} listed at ${formatPrice(car.price)}. Is it still available?`
  );

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/dealership" className="hover:text-foreground transition">
            Collection
          </Link>
          <span>/</span>
          <span className="text-foreground">
            {car.make} {car.model}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass">
              <img
                src={images[currentImageIndex]}
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-30" />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 glass px-3 py-1.5 rounded-full text-sm">
                {currentImageIndex + 1}/{images.length}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-18 rounded-xl overflow-hidden border-2 transition ${
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-transparent hover:border-white/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title & Price */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-sm text-green-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
                {car.year} {car.make}
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                {car.model}
              </h2>
              <div className="mt-4">
                <span className="text-sm text-muted-foreground">Price</span>
                <div className="text-4xl font-display font-bold gradient-text-gold">
                  {formatPrice(car.price)}
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4">
                <Calendar className="h-5 w-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Year</div>
                <div className="font-semibold">{car.year}</div>
              </div>
              <div className="glass rounded-xl p-4">
                <Gauge className="h-5 w-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Mileage</div>
                <div className="font-semibold">
                  {car.mileage ? formatMileage(car.mileage) : "N/A"}
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <Fuel className="h-5 w-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Fuel Type</div>
                <div className="font-semibold">{car.fuelType}</div>
              </div>
              <div className="glass rounded-xl p-4">
                <Car className="h-5 w-5 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Transmission</div>
                <div className="font-semibold">{car.transmission}</div>
              </div>
              {car.color && (
                <div className="glass rounded-xl p-4">
                  <Palette className="h-5 w-5 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">Color</div>
                  <div className="font-semibold">{car.color}</div>
                </div>
              )}
              {car.engineSize && (
                <div className="glass rounded-xl p-4">
                  <svg
                    className="h-5 w-5 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 16v5M12 3v5M16 12h5M3 12h5" />
                  </svg>
                  <div className="text-sm text-muted-foreground">Engine</div>
                  <div className="font-semibold">{car.engineSize}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-3">
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Features */}
            {car.features && car.features.length > 0 && (
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 glass rounded-full text-sm flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                6-Month Warranty
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-accent" />
                Finance Available
              </span>
              <span className="px-4 py-2 glass rounded-full text-sm flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-green-400" />
                Trade-In Welcome
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="glass rounded-2xl p-6 border border-accent/20">
              <h3 className="font-display font-bold text-lg mb-4">
                Interested in this vehicle?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-gold rounded-full flex-1">
                  <a href="tel:0662011492">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 066 201 1492
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full glass border-white/20 flex-1"
                >
                  <a
                    href={`https://wa.me/27662011492?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground"
            >
              <Link href="/dealership">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collection
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
