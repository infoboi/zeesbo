
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10 animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl text-neutral-900 leading-tight mb-6">
              Building Your <br />
              <span className="text-primary">Vision</span> Into Reality
            </h1>
            <p className="text-lg md:text-xl text-neutral-900/80 mb-8 max-w-2xl">
              Premium construction, interior, and exterior services tailored to transform your space into something extraordinary.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
