
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp, Send, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 234 567 890", href: "tel:+1234567890" },
    { icon: Mail, text: "contact@zeesbo.com", href: "mailto:contact@zeesbo.com" },
    { icon: MapPin, text: "123 Construction Ave, City, State", href: "#" },
    { icon: Clock, text: "Mon - Fri: 8:00 AM - 6:00 PM", href: "#" },
    { icon: Calendar, text: "Available for Emergency Services 24/7", href: "#" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
      >
        <ArrowUp size={20} />
      </button>

      {/* Newsletter Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="font-display text-2xl mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-neutral-400">Stay updated with our latest projects and news</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center gap-2"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="font-display text-2xl mb-4">ZEESBO</h3>
            <p className="text-neutral-400 mb-6">
              Building excellence through innovation and dedication. Your vision, our expertise. 
              With over two decades of experience, we've established ourselves as a leader in the construction industry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-neutral-400 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex items-center text-neutral-400 hover:text-primary transition-colors duration-200 group"
                  >
                    <info.icon size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400"
        >
          <p>&copy; {new Date().getFullYear()} ZEESBO. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
