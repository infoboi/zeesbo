
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Home, PaintBucket, Wrench, Ruler, HardHat, Truck, Brush, Palette, FileSpreadsheet, CalendarDays, DollarSign, Users, BookCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ProjectFormSteps } from "@/components/services/ProjectFormSteps";
import { ProgressSteps } from "@/components/services/ProgressSteps";
import { ProjectSummary } from "@/components/services/ProjectSummary";
import { ProjectFormData, ServiceType, StepType } from "@/types/services";

const Services = () => {
  const services: ServiceType[] = [
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

  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<ProjectFormData>({
    projectType: "",
    propertyType: "",
    squareFootage: "",
    budget: "",
    timeline: "",
    requirements: "",
    selectedServices: [] as string[],
    location: "",
    startDate: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    preferredContactMethod: "email",
    additionalNotes: "",
    materialPreferences: [] as string[],
    specialRequirements: {
      permitRequired: false,
      sustainableMaterials: false,
      accessibilityNeeds: false,
      historicalConsideration: false
    }
  });

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Industrial Facility",
    "Renovation",
    "Interior Design",
    "Exterior Remodeling"
  ];

  const propertyTypes = {
    "Residential Construction": ["Single Family Home", "Multi-Family", "Townhouse", "Apartment"],
    "Commercial Building": ["Office", "Retail", "Restaurant", "Hotel"],
    "Industrial Facility": ["Warehouse", "Manufacturing", "Distribution Center"],
    "Renovation": ["Home Renovation", "Office Renovation", "Restaurant Renovation"],
    "Interior Design": ["Residential Interior", "Commercial Interior", "Hospitality Interior"],
    "Exterior Remodeling": ["Facade Upgrade", "Landscape Design", "Outdoor Living"]
  };

  const materialPreferences = [
    "Eco-friendly Materials",
    "Premium Finishes",
    "Traditional Materials",
    "Modern Materials",
    "Cost-effective Solutions",
    "Luxury Materials"
  ];

  const steps: StepType[] = [
    { title: "Project Basics", icon: FileSpreadsheet },
    { title: "Services & Timeline", icon: CalendarDays },
    { title: "Budget & Materials", icon: DollarSign },
    { title: "Contact Details", icon: Users },
    { title: "Review & Submit", icon: BookCheck }
  ];

  const calculateEstimate = () => {
    let basePrice = parseInt(formData.budget) || 0;
    const servicesMultiplier = 1 + (formData.selectedServices.length * 0.1);
    const sqftMultiplier = formData.squareFootage ? 1 + (parseInt(formData.squareFootage) * 0.0001) : 1;
    const sustainableMultiplier = formData.specialRequirements.sustainableMaterials ? 1.15 : 1;
    
    return (basePrice * servicesMultiplier * sqftMultiplier * sustainableMultiplier).toFixed(2);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 0:
        return !!formData.projectType && !!formData.propertyType;
      case 1:
        return formData.selectedServices.length > 0 && !!formData.timeline;
      case 2:
        return !!formData.budget && formData.materialPreferences.length > 0;
      case 3:
        return !!formData.contactName && !!formData.contactEmail;
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive"
      });
    }
  };

  const handlePreviousStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    // Removed the icon property from the toast call
    toast({
      title: "Project Request Submitted!",
      description: "We'll review your project details and get back to you soon."
    });
    console.log("Form Data:", formData);
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
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Advanced Project Builder</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Create a detailed construction project plan tailored to your specific needs
            </p>
          </motion.div>

          <ProgressSteps steps={steps} activeStep={activeStep} />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{steps[activeStep].title}</CardTitle>
                  <CardDescription>
                    {activeStep === 0 && "Let's start with the basics of your project"}
                    {activeStep === 1 && "Select services and timeline preferences"}
                    {activeStep === 2 && "Specify your budget and material preferences"}
                    {activeStep === 3 && "Provide your contact information"}
                    {activeStep === 4 && "Review your project details and submit"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <ProjectFormSteps
                        activeStep={activeStep}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        services={services}
                        projectTypes={projectTypes}
                        propertyTypes={propertyTypes}
                        materialPreferences={materialPreferences}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={handlePreviousStep}
                      className={`px-6 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 transition-colors duration-200
                        ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={activeStep === 0}
                    >
                      Previous
                    </button>
                    
                    {activeStep === steps.length - 1 ? (
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
                      >
                        Submit Project
                      </button>
                    ) : (
                      <button
                        onClick={handleNextStep}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
                      >
                        Next Step
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectSummary
                formData={formData}
                steps={steps}
                activeStep={activeStep}
                calculateEstimate={calculateEstimate}
              />
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
