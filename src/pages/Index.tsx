
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    "Professional Team",
    "Quality Materials",
    "On-time Delivery",
    "Custom Solutions"
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-neutral-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform origin-top"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-primary/5 skew-y-12 transform origin-left"
        />
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl text-neutral-900 mb-4">Why Choose Us?</h2>
            <p className="text-neutral-900/80">Experience the difference of working with industry experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our skilled professionals bring years of experience to every project"
              },
              {
                title: "Quality First",
                description: "We use only the finest materials and latest construction techniques"
              },
              {
                title: "On Schedule",
                description: "We deliver projects on time and within the agreed budget"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-neutral-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-xl text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-900/80">{item.description}</p>
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
