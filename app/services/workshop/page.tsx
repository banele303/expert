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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
                For Your Machine
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
            >
              Experience automotive excellence with our RMI-approved workshop. 
              Where state-of-the-art diagnostics meet traditional mechanical expertise.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="lg" className="btn-primary rounded-full px-10 py-7 text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25">
                <a href="https://wa.me/27662011492" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-3 h-6 w-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book Priority Service
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-10 py-7 text-lg glass border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <a href="tel:0662011492">
                  <Phone className="mr-3 h-5 w-5" />
                  Speak to an Expert
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
                className="glass rounded-3xl p-6 border border-white/5 card-hover overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <NextImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
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
              Why Choose Our <span className="gradient-text">Workshop</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="glass rounded-3xl p-8 md:p-12 border border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "RMI Certified",
                    description: "Approved by the Retail Motor Industry",
                  },
                  {
                    icon: Wrench,
                    title: "Expert Technicians",
                    description: "Highly trained and experienced staff",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Parts",
                    description: "Genuine and quality replacement parts",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Detailed Reports",
                    description: "Comprehensive service documentation",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[oklch(0.1_0.01_260)]">
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
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Meet Our <span className="gradient-text">Team</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  role: "Owner & Chief of Operations",
                  name: "Francois Maeder - Marais",
                  email: "Francois@goshenauto.co.za",
                  phone: "+27 71 685 9859",
                },
                {
                  role: "Chief of Finance",
                  name: "Albertus Maeder Marais",
                  email: "Albertus@goshenauto.co.za",
                  phone: "+27 83 341 7572",
                },
                {
                  role: "Marketing Manager & Sales Executive",
                  name: "Lijan Cilliers",
                  email: "Lijan@goshenauto.co.za",
                  phone: "+27 66 201 1492",
                },
                {
                  role: "Panel Beating & Spray Painting Manager",
                  name: "Logan Richardson",
                  email: "Logan@goshenauto.co.za",
                  phone: "+27 66 201 1492",
                },
                {
                  role: "Workshop Manager",
                  name: "Duan Coetzee",
                  email: "workshop@goshenauto.co.za",
                  phone: "+27 67 046 2135",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass rounded-3xl p-8 border border-white/5 card-hover text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-6 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <div className="space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-20 text-center"
            >
              <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full border border-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Come visit us!</span>
              </div>
            </motion.div>
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
              Ready to Service Your Vehicle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your service appointment today and experience professional automotive care
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gold rounded-full px-8">
                <a href="https://wa.me/27662011492" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-400" />
                  Book on WhatsApp
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
