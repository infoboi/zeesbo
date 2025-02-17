
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 234 567 890", href: "tel:+1234567890" },
    { icon: Mail, text: "contact@zeesbo.com", href: "mailto:contact@zeesbo.com" },
    { icon: MapPin, text: "123 Construction Ave, City, State", href: "#" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl mb-4">ZEESBO</h3>
            <p className="text-neutral-400 mb-4">
              Building excellence through innovation and dedication. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
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
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Contact Us
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
                    className="flex items-center text-neutral-400 hover:text-primary transition-colors duration-200"
                  >
                    <info.icon size={20} className="mr-2" />
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
