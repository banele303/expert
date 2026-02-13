"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "next/image";
import {
  Wrench,
  CheckCircle,
  Phone,
  MessageCircle,
  Settings,
  Hammer,
  SprayCan,
  CarFront,
  Shield,
  ClipboardCheck,
  Mail,
  MapPin,
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
    title: "PANEL BEATING",
    image: "/panel-pitting.png",
    description: "Our team of experienced panel beaters takes pride in restoring your vehicle to its original condition—down to the smallest detail. Whether it's minor dents or major collision repairs, we use precision techniques and high-quality materials to ensure a flawless finish. With years of hands-on experience and a commitment to excellence, you can trust us to get the job done right, every time.",
    features: [
      "Accident repairs",
      "Dent removal",
      "Chassis alignment",
      "Bumper repairs",
    ],
  },
  {
    icon: SprayCan,
    title: "SPRAY PAINTING",
    image: "/spray-paint.png",
    description: "Our professional spray booth is designed to deliver showroom-quality paintwork with maximum efficiency and minimal environmental impact. We use premium automotive paints and advanced spraying technology to ensure a smooth, durable finish that perfectly matches your vehicle’s original color. Whether it's a full respray or a touch-up, your car leaves looking as good as new.",
    features: [
      "Color matching",
      "Full resprays",
      "Touch-ups",
      "Clear coating",
    ],
  },
  {
    icon: Wrench,
    title: "MECHANICAL WORKSHOP",
    image: "/work-shop.png",
    description: "Our qualified mechanics are here to keep your vehicle running at its best. From diagnostics and routine servicing to complex mechanical repairs, we bring a high level of skill, training, and attention to detail to every job. With certifications and real-world experience, our team ensures your car is safe, reliable, and road-ready.",
    features: [
      "General servicing",
      "Diagnostics",
      "Engine repairs",
      "Safety checks",
    ],
  },
];

export default function WorkshopServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/workshop-services.png"
            alt="Workshop Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-primary mb-8 border border-primary/20"
            >
              <Wrench className="h-4 w-4" />
              <span className="tracking-wide uppercase">Premium Workshop Services</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Master Craftsmen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient bg-300%">
                For Your Ride
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
            >
              Experience automotive restoration excellence at our Johannesburg facility. 
              Where precision panel beating meets factory-grade spray painting.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="xl" className="btn-primary rounded-full px-12 py-8 text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25">
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6 text-white" />
                  Request a Quote
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full px-12 py-8 text-lg glass border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <a href="tel:0837086050">
                  <Phone className="mr-3 h-5 w-5" />
                  Talk to a Specialist
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[oklch(0.1_0.01_260)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-[2.5rem] p-8 border border-white/5 card-hover overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                  <NextImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                         <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-12 text-center"
            >
              The Xpert <span className="gradient-text italic">Standard.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="glass-premium rounded-[3rem] p-10 md:p-16 border border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    icon: Shield,
                    title: "Insurance Approved",
                    description: "Accredited by all major insurance providers in South Africa.",
                  },
                  {
                    icon: Hammer,
                    title: "Master Artisans",
                    description: "Highly skilled panel beaters with decades of cumulative experience.",
                  },
                  {
                    icon: SprayCan,
                    title: "Precision Color",
                    description: "Advanced computerized color matching for a factory finish.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Lifetime Warranty",
                    description: "We stand behind our craftsmanship with comprehensive guarantees.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight"
            >
              The Restoration <span className="gradient-text italic">Specialists.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  role: "Director",
                  name: "Francois Marais",
                  email: "francois@xpertpanelbeaters.co.za",
                  phone: "083 708 6050",
                },
                {
                  role: "Operations Manager",
                  name: "Albertus Marais",
                  email: "albertus@xpertpanelbeaters.co.za",
                  phone: "083 708 6050",
                },
                {
                  role: "Production & Estimating",
                  name: "Logan Richardson",
                  email: "logan@xpertpanelbeaters.co.za",
                  phone: "083 708 6050",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-premium rounded-[2.5rem] p-10 border border-white/5 card-hover text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-display font-black text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-accent mb-8 uppercase tracking-widest">
                    {member.role}
                  </p>
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-bold">
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-24 text-center"
            >
              <div className="inline-flex items-center gap-4 glass-premium px-10 py-5 rounded-full border border-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-xl font-medium">Main Reef Rd, Johannesburg</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-premium rounded-[4rem] p-12 md:p-20 text-center border border-white/5 max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter mb-8 italic">
              Restore Your Car to <span className="gradient-text not-italic font-black">Perfection.</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied clients in Johannesburg and get your vehicle back in showroom condition today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="xl" className="btn-gold rounded-full px-12 group">
                <a href="https://wa.me/27837086050" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6 text-green-500" />
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="rounded-full glass border-white/10 px-12">
                <Link href="/contact">
                  Our Location
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
