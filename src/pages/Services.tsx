import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Home, PaintBucket, Wrench, Ruler, HardHat, Truck, Brush, Palette, Plus, Minus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

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

  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [requirements, setRequirements] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Industrial Facility",
    "Renovation",
    "Interior Design",
    "Exterior Remodeling"
  ];

  const calculateEstimate = () => {
    const basePrice = parseInt(budget) || 0;
    const servicesMultiplier = 1 + (selectedServices.length * 0.1);
    return (basePrice * servicesMultiplier).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl text-white mb-4">Our Services</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Builder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Project Builder</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Create your custom construction project plan and get an instant estimate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Configuration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Label>Project Type</Label>
                <Select onValueChange={setProjectType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Estimated Budget</Label>
                <Input
                  type="number"
                  placeholder="Enter your budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>Project Timeline</Label>
                <Select onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 months</SelectItem>
                    <SelectItem value="3-6">3-6 months</SelectItem>
                    <SelectItem value="6-12">6-12 months</SelectItem>
                    <SelectItem value="12+">12+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Project Requirements</Label>
                <Textarea
                  placeholder="Describe your project requirements..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Select Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-start space-x-2">
                      <Checkbox
                        id={service.title}
                        checked={selectedServices.includes(service.title)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, service.title]);
                          } else {
                            setSelectedServices(selectedServices.filter(s => s !== service.title));
                          }
                        }}
                      />
                      <label
                        htmlFor={service.title}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {service.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-50 p-8 rounded-lg border border-neutral-200"
            >
              <h3 className="font-display text-2xl text-neutral-900 mb-6">Project Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Project Type</span>
                  <span className="font-medium">{projectType || "Not selected"}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Budget</span>
                  <span className="font-medium">
                    {budget ? `$${parseInt(budget).toLocaleString()}` : "Not specified"}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Timeline</span>
                  <span className="font-medium">{timeline ? `${timeline} months` : "Not specified"}</span>
                </div>
                
                <div className="pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Selected Services</span>
                  <div className="mt-2 space-y-1">
                    {selectedServices.map((service) => (
                      <div key={service} className="flex items-center text-sm">
                        <Plus size={16} className="text-primary mr-2" />
                        {service}
                      </div>
                    ))}
                    {selectedServices.length === 0 && (
                      <span className="text-sm text-neutral-500">No services selected</span>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center text-lg font-medium">
                    <span>Estimated Total</span>
                    <span className="text-primary">
                      ${calculateEstimate()}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-2">
                    *This is a rough estimate and may vary based on specific project requirements
                  </p>
                </div>

                <button
                  className="w-full mt-6 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
                >
                  Request Detailed Quote <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-neutral-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-lg p-12 text-center"
          >
            <h3 className="font-display text-3xl text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your construction needs and get a free consultation
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md hover:bg-neutral-100 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
