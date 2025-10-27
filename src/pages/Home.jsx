import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Printer,
  Upload,
  Users,
  Package,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Premium Product Catalog",
      description:
        "Explore our diverse collection of precision 3D printed products crafted to perfection.",
    },
    {
      icon: Upload,
      title: "Custom Design Upload",
      description:
        "Upload your 3D models and get them printed using high-quality materials and machines.",
    },
    {
      icon: Users,
      title: "Expert Designers",
      description:
        "Collaborate with experienced designers who turn your imagination into tangible reality.",
    },
    {
      icon: Printer,
      title: "Bulk Ordering",
      description:
        "Get exclusive discounts and faster processing for bulk 3D printing orders.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      content:
        "Amazing quality and fast delivery! My custom prototypes came out perfect.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Entrepreneur",
      content:
        "The bulk ordering service saved my startup thousands. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Artist",
      content:
        "Working with their designers was incredible. They understood my vision perfectly.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16 bg-[#001F3F] text-[#F5F5DC]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#001F3F]/95 to-[#FFD23F]/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Shape Your Ideas Into
              <span className="gradient-text block">Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#F5F5DC]/80 max-w-3xl mx-auto">
              Professional 3D printing services with expert designers, custom
              upload options, and bulk manufacturing for every creative need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#001F3F] to-[#FFD23F] text-[#001F3F] hover:opacity-90 px-8 py-4 text-lg font-semibold"
                >
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link to="/custom-design">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#FFD23F]/50 text-[#FFD23F] hover:bg-[#FFD23F]/10 px-8 py-4 text-lg"
                >
                  Upload Design
                  <Upload className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#001F3F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Why Choose Shapix?
            </h2>
            <p className="text-lg text-[#F5F5DC]/70">
              We deliver premium 3D printing, expert design, and unmatched
              quality for individuals and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[#001F3F]/70 border border-[#FFD23F]/20 hover:border-[#FFD23F]/50 shadow-lg hover:shadow-[#FFD23F]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#FFD23F]/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FFD23F]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#F5F5DC]/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#001F3F]/70 border border-[#FFD23F]/20 hover:border-[#FFD23F]/40 shadow-md hover:shadow-[#FFD23F]/20 transition-all"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD23F] fill-current" />
                  ))}
                </div>
                <p className="text-[#F5F5DC]/80 mb-4">
                  “{testimonial.content}”
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-[#F5F5DC]/50">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#001F3F]/90 to-[#FFD23F]/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Ready to Start Creating?
          </h2>
          <p className="text-lg text-[#F5F5DC]/80">
            Join thousands of creators and businesses who trust Shapix for
            professional 3D printing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#001F3F] to-[#FFD23F] text-[#001F3F] font-semibold px-8 py-4 hover:opacity-90"
              >
                Start Shopping
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Inline gradient text styling */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #FFD23F, #F5F5DC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Home;
