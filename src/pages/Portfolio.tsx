
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Villa Construction",
      category: "Construction",
      image: "/placeholder.svg",
      description: "Luxury villa project featuring contemporary design and sustainable materials",
    },
    {
      title: "Corporate Office Interior",
      category: "Interior",
      image: "/placeholder.svg",
      description: "Complete interior renovation for a leading tech company",
    },
    {
      title: "Historic Building Restoration",
      category: "Exterior",
      image: "/placeholder.svg",
      description: "Careful restoration of a heritage building's facade",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-neutral-900 mb-4">Our Portfolio</h2>
            <p className="text-neutral-900/80 max-w-2xl mx-auto">
              Explore our diverse range of successful projects across construction, interior, and exterior design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <h3 className="font-display text-xl text-neutral-900 mt-2 mb-3">{project.title}</h3>
                      <p className="text-neutral-900/80">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
