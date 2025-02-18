
import { Menu, X, Phone, Mail, ChevronDown, Search, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: "Home", 
      href: "/" 
    },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Construction", href: "/services#construction" },
        { name: "Renovation", href: "/services#renovation" },
        { name: "Design", href: "/services#design" },
        { name: "Consulting", href: "/services#consulting" },
      ]
    },
    { 
      name: "Portfolio", 
      href: "/portfolio",
      subItems: [
        { name: "Residential", href: "/portfolio#residential" },
        { name: "Commercial", href: "/portfolio#commercial" },
        { name: "Industrial", href: "/portfolio#industrial" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center hover:text-white/80">
                <Phone size={16} className="mr-2" />
                <span>+1 234 567 890</span>
              </a>
              <a href="mailto:contact@zeesbo.com" className="flex items-center hover:text-white/80">
                <Mail size={16} className="mr-2" />
                <span>contact@zeesbo.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-white/80"
              >
                <Search size={16} />
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:text-white/80"
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="font-display text-2xl text-primary">ZEESBO</Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center text-neutral-900 hover:text-primary transition-colors duration-200 font-medium`}
                    >
                      {item.name}
                      {item.subItems && (
                        <ChevronDown size={16} className="ml-1" />
                      )}
                    </Link>
                  </motion.div>

                  {/* Dropdown Menu */}
                  {item.subItems && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden py-2"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-neutral-900 hover:bg-neutral-50 hover:text-primary transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-900 hover:text-primary transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-neutral-200"
              >
                <div className="py-4">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-neutral-200"
              >
                <div className="py-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-neutral-900 hover:bg-neutral-50 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.subItems && (
                        <div className="pl-8 py-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-1 text-sm text-neutral-600 hover:text-primary transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
