"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Car,
} from "lucide-react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createInquiry = useMutation(api.inquiries.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createInquiry(formData);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden pt-32 md:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] -translate-y-1/2" />
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
              className="inline-flex items-center gap-2 px-4 py-2 glass-premium rounded-full text-xs font-medium text-primary mb-8"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Our Experts
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] mb-8"
            >
              Let's <span className="gradient-text italic">Connect.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
            >
              Professional auto body assessment and parts supply in Johannesburg. Get in touch for a free quote or expert advice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-6">
                  Visit the <br/><span className="gradient-text italic">Facility.</span>
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Located in the heart of Johannesburg's industrial hub, our state-of-the-art facility is equipped for any restoration challenge.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                <a
                  href="mailto:info@xpertpanelbeaters.co.za"
                  className="flex items-center gap-6 p-6 glass-premium rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none mb-1">Email</div>
                    <div className="text-xl font-bold">info@xpertpanelbeaters.co.za</div>
                  </div>
                </a>

                <a
                  href="tel:0837086050"
                  className="flex items-center gap-6 p-6 glass-premium rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none mb-1">Phone</div>
                    <div className="text-xl font-bold">083 708 6050</div>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Main+Reef+Rd,+Elcedes,+Johannesburg,+1431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 glass-premium rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-7 w-7 text-green-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none mb-1">Location</div>
                    <div className="text-xl font-bold">Main Reef Rd, Elcedes, JHB</div>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 glass-premium rounded-[2rem] border border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none mb-1">Hours</div>
                    <div className="text-lg font-bold">Mon-Fri: 8:00 - 17:00 | Sat: 8:00 - 13:00</div>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="glass-premium rounded-[2.5rem] p-8 border border-white/5">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-display font-black gradient-text">4.9</div>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="h-16 w-px bg-white/10" />
                  <div>
                    <div className="text-xl font-bold mb-1">50+ Reviews</div>
                    <div className="text-muted-foreground font-light">Trusted Excellence in Johannesburg</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-premium rounded-[3rem] p-8 md:p-12 border border-white/5">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">Message Received!</h3>
                    <p className="text-lg text-muted-foreground font-light mb-10">Our restoration experts will contact you shortly.</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="glass rounded-full px-8 py-6 h-auto text-sm font-bold uppercase tracking-widest"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-display font-bold mb-8">Send an <span className="gradient-text italic">Inquiry.</span></h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-5 rounded-[1.5rem] glass border border-white/10 bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-lg font-light"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4">Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-6 py-5 rounded-[1.5rem] glass border border-white/10 bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-lg font-light"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4">Phone</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-6 py-5 rounded-[1.5rem] glass border border-white/10 bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-lg font-light"
                            placeholder="083 708 6050"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4">Message</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-6 py-5 rounded-[2rem] glass border border-white/10 bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none text-lg font-light"
                          placeholder="Describe your restoration needs..."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary rounded-full py-8 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 h-auto"
                      >
                        {isSubmitting ? "Processing..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-[3rem] overflow-hidden border border-white/5 relative h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114589.65825316134!2d27.9333!3d-26.2333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509657067883f%3A0x6a10061e8886369c!2sJohannesburg!5e0!3m2!1sen!2sza!4v1707817000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
