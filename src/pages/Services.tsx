import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Home, PaintBucket, Wrench, Ruler, HardHat, Truck, Brush, Palette, Plus, Minus, ArrowRight, FileSpreadsheet, CalendarDays, DollarSign, Users, BookCheck, AlertCircle, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

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

  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
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

  const steps = [
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
    toast({
      title: "Project Request Submitted!",
      description: "We'll review your project details and get back to you soon.",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />
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

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      backgroundColor: index <= activeStep ? "var(--primary)" : "var(--neutral-200)"
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                      ${index <= activeStep ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-500'}`}
                  >
                    <step.icon size={20} />
                  </motion.div>
                  <span className="text-sm text-neutral-600 hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

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
                      {activeStep === 0 && (
                        <>
                          <div className="space-y-4">
                            <Label>Project Type *</Label>
                            <Select
                              value={formData.projectType}
                              onValueChange={(value) => handleInputChange("projectType", value)}
                            >
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

                          {formData.projectType && (
                            <div className="space-y-4">
                              <Label>Property Type *</Label>
                              <Select
                                value={formData.propertyType}
                                onValueChange={(value) => handleInputChange("propertyType", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select property type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {propertyTypes[formData.projectType as keyof typeof propertyTypes]?.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          )}

                          <div className="space-y-4">
                            <Label>Square Footage</Label>
                            <Input
                              type="number"
                              placeholder="Enter square footage"
                              value={formData.squareFootage}
                              onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                            />
                          </div>
                        </>
                      )}

                      {activeStep === 1 && (
                        <>
                          <div className="space-y-4">
                            <Label>Select Services *</Label>
                            <div className="grid grid-cols-2 gap-4">
                              {services.map((service) => (
                                <div key={service.title} className="flex items-start space-x-2">
                                  <Checkbox
                                    id={service.title}
                                    checked={formData.selectedServices.includes(service.title)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        handleInputChange("selectedServices", [...formData.selectedServices, service.title]);
                                      } else {
                                        handleInputChange(
                                          "selectedServices",
                                          formData.selectedServices.filter(s => s !== service.title)
                                        );
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

                          <div className="space-y-4">
                            <Label>Project Timeline *</Label>
                            <Select
                              value={formData.timeline}
                              onValueChange={(value) => handleInputChange("timeline", value)}
                            >
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
                            <Label>Start Date</Label>
                            <Input
                              type="date"
                              value={formData.startDate}
                              onChange={(e) => handleInputChange("startDate", e.target.value)}
                            />
                          </div>
                        </>
                      )}

                      {activeStep === 2 && (
                        <>
                          <div className="space-y-4">
                            <Label>Estimated Budget *</Label>
                            <Input
                              type="number"
                              placeholder="Enter your budget"
                              value={formData.budget}
                              onChange={(e) => handleInputChange("budget", e.target.value)}
                            />
                          </div>

                          <div className="space-y-4">
                            <Label>Material Preferences *</Label>
                            <div className="grid grid-cols-2 gap-4">
                              {materialPreferences.map((material) => (
                                <div key={material} className="flex items-start space-x-2">
                                  <Checkbox
                                    id={material}
                                    checked={formData.materialPreferences.includes(material)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        handleInputChange("materialPreferences", [...formData.materialPreferences, material]);
                                      } else {
                                        handleInputChange(
                                          "materialPreferences",
                                          formData.materialPreferences.filter(m => m !== material)
                                        );
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={material}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {material}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <Label>Special Requirements</Label>
                            <div className="space-y-2">
                              {Object.entries(formData.specialRequirements).map(([key, value]) => (
                                <div key={key} className="flex items-start space-x-2">
                                  <Checkbox
                                    id={key}
                                    checked={value}
                                    onCheckedChange={(checked) => {
                                      handleInputChange("specialRequirements", {
                                        ...formData.specialRequirements,
                                        [key]: checked
                                      });
                                    }}
                                  />
                                  <label
                                    htmlFor={key}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {key.split(/(?=[A-Z])/).join(" ")}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {activeStep === 3 && (
                        <>
                          <div className="space-y-4">
                            <Label>Full Name *</Label>
                            <Input
                              placeholder="Enter your full name"
                              value={formData.contactName}
                              onChange={(e) => handleInputChange("contactName", e.target.value)}
                            />
                          </div>

                          <div className="space-y-4">
                            <Label>Email Address *</Label>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              value={formData.contactEmail}
                              onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                            />
                          </div>

                          <div className="space-y-4">
                            <Label>Phone Number</Label>
                            <Input
                              type="tel"
                              placeholder="Enter your phone number"
                              value={formData.contactPhone}
                              onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                            />
                          </div>

                          <div className="space-y-4">
                            <Label>Preferred Contact Method</Label>
                            <Select
                              value={formData.preferredContactMethod}
                              onValueChange={(value) => handleInputChange("preferredContactMethod", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select contact method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone</SelectItem>
                                <SelectItem value="both">Both</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}

                      {activeStep === 4 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Project Details</h4>
                              <ul className="text-sm space-y-2">
                                <li><span className="text-neutral-500">Type:</span> {formData.projectType}</li>
                                <li><span className="text-neutral-500">Property:</span> {formData.propertyType}</li>
                                <li><span className="text-neutral-500">Timeline:</span> {formData.timeline} months</li>
                                <li><span className="text-neutral-500">Budget:</span> ${parseInt(formData.budget).toLocaleString()}</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Contact Information</h4>
                              <ul className="text-sm space-y-2">
                                <li><span className="text-neutral-500">Name:</span> {formData.contactName}</li>
                                <li><span className="text-neutral-500">Email:</span> {formData.contactEmail}</li>
                                <li><span className="text-neutral-500">Phone:</span> {formData.contactPhone}</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Selected Services</h4>
                            <div className="flex flex-wrap gap-2">
                              {formData.selectedServices.map((service) => (
                                <span
                                  key={service}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Material Preferences</h4>
                            <div className="flex flex-wrap gap-2">
                              {formData.materialPreferences.map((material) => (
                                <span
                                  key={material}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neutral-100"
                                >
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Estimated Total</h4>
                            <p className="text-2xl font-semibold text-primary">${calculateEstimate()}</p>
                            <p className="text-sm text-neutral-500 mt-1">
                              *This is a rough estimate and may vary based on specific project requirements
                            </p>
                          </div>
                        </div>
                      )}
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
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Project Summary</CardTitle>
                  <CardDescription>Real-time overview of your project specifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Project Type</span>
                      <span className="font-medium">{formData.projectType || "Not selected"}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Property Type</span>
                      <span className="font-medium">{formData.propertyType || "Not selected"}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Square Footage</span>
                      <span className="font-medium">
                        {formData.squareFootage ? `${parseInt(formData.squareFootage).toLocaleString()} sq ft` : "Not specified"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Timeline</span>
                      <span className="font-medium">{formData.timeline ? `${formData.timeline} months` : "Not specified"}</span>
                    </div>
                    
                    <div className="pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Selected Services</span>
                      <div className="mt-2 space-y-1">
                        {formData.selectedServices.map((service) => (
                          <div key={service} className="flex items-center text-sm">
                            <Plus size={16} className="text-primary mr-2" />
                            {service}
                          </div>
                        ))}
                        {formData.selectedServices.length === 0 && (
                          <span className="text-sm text-neutral-500">No services selected</span>
                        )}
                      </div>
                    </div>

                    <div className="pb-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Special Requirements</span>
                      <div className="mt-2 space-y-1">
                        {Object.entries(formData.specialRequirements)
                          .filter(([, value]) => value)
                          .map(([key]) => (
                            <div key={key} className="flex items-center text-sm">
                              <CheckCircle2 size={16} className="text-primary mr-2" />
                              {key.split(/(?=[A-Z])/).join(" ")}
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between items-center text-lg font-medium">
                        <span>Estimated Total</span>
                        <span className="text-primary">
                          ${calculateEstimate()}
                        </span>
                      </div>
                      <div className="flex items-start mt-2 p-4 bg-neutral-50 rounded-md">
                        <AlertCircle className="text-primary mr-2 flex-shrink-0" size={20} />
                        <p className="text-sm text-neutral-600">
                          This estimate includes considerations for your selected services, square footage, and special requirements.
                          Final pricing may vary based on detailed specifications and site conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completion Progress</CardTitle>
                  <CardDescription>Track your project configuration progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <div key={step.title} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3
                          ${index <= activeStep ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-500'}`}>
                          <step.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{step.title}</span>
                            {index < activeStep && (
                              <CheckCircle2 className="text-primary" size={16} />
                            )}
                          </div>
                          <div className="w-full h-1 bg-neutral-200 rounded-full mt-2">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: index <= activeStep ? "100%" : "0%" }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
