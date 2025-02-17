
import Navbar from "@/components/Navbar";
import { Building2, Home, PaintBucket } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <section className="pt-32 pb-24 bg-white">
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
    </div>
  );
};

export default Services;
