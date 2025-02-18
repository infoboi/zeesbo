
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Home, PaintBucket, Wrench, Ruler, HardHat, Truck, Brush, Palette } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Construction",
      description: "Full-scale construction projects from groundbreaking to completion",
      features: ["Custom Home Building", "Commercial Construction", "Renovation Projects"]
    },
    {
      icon: <PaintBucket size={32} />,
      title: "Interior",
      description: "Transform your interior spaces with our expert design and renovation services",
      features: ["Space Planning", "Color Consultation", "Custom Furniture"]
    },
    {
      icon: <Home size={32} />,
      title: "Exterior",
      description: "Enhance your property's curb appeal with our exterior renovation solutions",
      features: ["Facade Renovation", "Landscaping", "Outdoor Living Spaces"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance",
      description: "Keep your property in perfect condition with our maintenance services",
      features: ["Regular Inspections", "Repairs", "Upgrades"]
    },
    {
      icon: <Ruler size={32} />,
      title: "Design",
      description: "Expert architectural and interior design services for your project",
      features: ["3D Modeling", "Blueprint Creation", "Material Selection"]
    },
    {
      icon: <HardHat size={32} />,
      title: "Project Management",
      description: "Professional oversight of your construction project from start to finish",
      features: ["Timeline Planning", "Budget Management", "Quality Control"]
    },
    {
      icon: <Truck size={32} />,
      title: "Material Supply",
      description: "High-quality construction materials for your project needs",
      features: ["Material Sourcing", "Delivery Services", "Storage Solutions"]
    },
    {
      icon: <Brush size={32} />,
      title: "Painting",
      description: "Professional painting services for interior and exterior surfaces",
      features: ["Color Consultation", "Surface Preparation", "Quality Finishing"]
    },
    {
      icon: <Palette size={32} />,
      title: "Custom Solutions",
      description: "Tailored construction solutions for unique project requirements",
      features: ["Custom Design", "Specialized Construction", "Unique Finishes"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Our Services</h2>
            <p className="text-neutral-900/80 max-w-2xl mx-auto">
              Comprehensive construction solutions for every aspect of your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-neutral-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-900/80 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
