
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Building2, HardHat, Truck, Home, Hammer, Award, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    "Professional Team",
    "Quality Materials", 
    "On-time Delivery",
    "Custom Solutions"
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-primary" />, value: "500+", label: "Projects Completed" },
    { icon: <HardHat className="w-8 h-8 text-primary" />, value: "150+", label: "Expert Staff" },
    { icon: <Truck className="w-8 h-8 text-primary" />, value: "20+", label: "Years Experience" },
    { icon: <Home className="w-8 h-8 text-primary" />, value: "1000+", label: "Happy Clients" }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Safety First",
      description: "We prioritize safety in every aspect of our construction projects"
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Quality Assured",
      description: "Our commitment to excellence ensures premium results"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on schedule"
    }
  ];

  const testimonials = [
    {
      quote: "Working with ZEESBO was a fantastic experience. They brought our vision to life with exceptional quality.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      quote: "The attention to detail and professionalism shown by the team was outstanding.",
      author: "Michael Brown",
      role: "Project Manager"
    },
    {
      quote: "Their innovative approach to construction challenges sets them apart from others in the industry.",
      author: "David Wilson",
      role: "Architect"
    }
  ];

  const buildingBlocks = [
    { delay: 0.2, height: "h-32" },
    { delay: 0.3, height: "h-48" },
    { delay: 0.4, height: "h-64" },
    { delay: 0.5, height: "h-40" },
    { delay: 0.6, height: "h-56" }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section with Animation */}
      <section className="pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-5xl md:text-7xl text-neutral-900 leading-tight mb-6"
              >
                Building Your <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-primary"
                >
                  Vision
                </motion.span>{" "}
                Into Reality
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-neutral-900/80 mb-8 max-w-2xl"
              >
                Premium construction, interior, and exterior services tailored to transform your space into something extraordinary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                >
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Construction Animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative h-[400px]"
            >
              <div className="flex items-end justify-center gap-4 h-full">
                {buildingBlocks.map((block, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: block.height,
                      opacity: 1 
                    }}
                    transition={{
                      duration: 0.8,
                      delay: block.delay,
                      ease: "easeOut"
                    }}
                    className={`w-16 bg-primary/20 rounded-t-lg ${block.height}`}
                  >
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{ height: "100%" }}
                      transition={{
                        duration: 1.2,
                        delay: block.delay + 0.3,
                        ease: "easeInOut"
                      }}
                      className="w-full bg-primary/40 rounded-t-lg"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Animated Construction Icon */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: [-20, 0, -20] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-1/4 transform -translate-y-full"
              >
                <Hammer className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-neutral-900/80">The principles that guide our work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-neutral-50 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-900/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-neutral-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="font-display text-3xl text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-neutral-900 mb-4">What Our Clients Say</h2>
            <p className="text-neutral-900/80">Hear from those who have experienced our exceptional service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-neutral-50 p-6 rounded-lg"
              >
                <p className="text-neutral-900/80 mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-medium text-neutral-900">{testimonial.author}</div>
                <div className="text-primary text-sm">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
