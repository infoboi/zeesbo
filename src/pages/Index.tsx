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

  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      description: "State-of-the-art office building with sustainable features"
    },
    {
      title: "Luxury Residential",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      description: "High-end residential complex with modern amenities"
    },
    {
      title: "Shopping Mall",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80",
      description: "Modern shopping center with innovative design"
    }
  ];

  const clients = [
    {
      name: "Tech Solutions Inc",
      logo: "https://via.placeholder.com/150x80",
      industry: "Technology"
    },
    {
      name: "Green Development",
      logo: "https://via.placeholder.com/150x80",
      industry: "Real Estate"
    },
    {
      name: "Future Living",
      logo: "https://via.placeholder.com/150x80",
      industry: "Residential"
    },
    {
      name: "Metro Projects",
      logo: "https://via.placeholder.com/150x80",
      industry: "Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/3"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
              >
                Building Your{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-primary-light"
                >
                  Vision
                </motion.span>{" "}
                Into Reality
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Premium construction, interior, and exterior services tailored to transform your space into something extraordinary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                >
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="lg:w-1/3 bg-white/10 backdrop-blur-lg rounded-full p-8 relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 rounded-full border-4 border-primary-light flex items-center justify-center"
              >
                <div className="text-center">
                  <HardHat className="w-16 h-16 text-primary-light mx-auto mb-2" />
                  <span className="text-white font-display text-lg">Excellence in Construction</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-white/20 rounded-full relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-primary-light rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Featured Projects</h2>
            <p className="text-neutral-900/80">Discover our latest construction masterpieces</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm text-primary-light font-medium">{project.category}</span>
                  <h3 className="text-xl text-white font-display mt-1">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-300"
            >
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-neutral-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Our Services</h2>
            <p className="text-neutral-900/80">Comprehensive construction solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="font-display text-xl text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-900/80">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Our Clients</h2>
            <p className="text-neutral-900/80">Trusted by industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-neutral-100 p-6 rounded-lg w-full">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-20 object-contain"
                  />
                </div>
                <h3 className="mt-4 font-medium text-neutral-900">{client.name}</h3>
                <p className="text-sm text-neutral-600">{client.industry}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-neutral-100">
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
