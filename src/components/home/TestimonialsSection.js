import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "../ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Small Business Owner",
    company: "Sharma Enterprises",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "ShuraaTax transformed our business tax management. Their expert guidance helped us save over ₹2 lakhs in taxes while ensuring complete compliance. Highly recommended!",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Senior Manager",
    company: "Tech Solutions Ltd.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Professional service with personalized attention. The team is always available to answer questions and their tax planning strategies are exceptional.",
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Freelance Consultant",
    company: "Independent Professional",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "As a freelancer, managing taxes was overwhelming. ShuraaTax made it simple and stress-free. Their online portal is user-friendly and the support is excellent.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Startup Founder",
    company: "InnovateTech",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "From company registration to ongoing compliance, ShuraaTax has been our trusted partner. Their startup-focused approach and competitive pricing are unmatched.",
  },
  {
    id: 5,
    name: "Meera Joshi",
    role: "Doctor",
    company: "Private Practice",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Excellent service for medical professionals. They understand the unique tax challenges we face and provide tailored solutions. Very satisfied with their expertise.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our tax consultation services.
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary-200" />

              <div className="text-center mb-8">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="text-center">
                <div className="font-bold text-xl text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-primary-600 font-medium">
                  {currentTestimonial.role}
                </div>
                <div className="text-gray-500">
                  {currentTestimonial.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              2500+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              99%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              24/7
            </div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
