
import Navbar from "@/components/Navbar";
import { ArrowRight, Building2, Home, PaintBucket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10 animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl text-neutral-900 leading-tight mb-6">
              Building Your <br />
              <span className="text-primary">Vision</span> Into Reality
            </h1>
            <p className="text-lg md:text-xl text-neutral-900/80 mb-8 max-w-2xl">
              Premium construction, interior, and exterior services tailored to transform your space into something extraordinary.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Our Services</h2>
            <p className="text-neutral-900/80 max-w-2xl mx-auto">
              Comprehensive construction solutions for every aspect of your project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 size={32} />,
                title: "Construction",
                description: "Full-scale construction projects from groundbreaking to completion",
              },
              {
                icon: <PaintBucket size={32} />,
                title: "Interior",
                description: "Transform your interior spaces with our expert design and renovation services",
              },
              {
                icon: <Home size={32} />,
                title: "Exterior",
                description: "Enhance your property's curb appeal with our exterior renovation solutions",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-neutral-100 rounded-lg hover:shadow-lg transition-shadow duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="font-display text-xl text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-900/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Ready to Start?</h2>
            <p className="text-neutral-900/80 mb-8">
              Contact us today to discuss your project and receive a free consultation
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
