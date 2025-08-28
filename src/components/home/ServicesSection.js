import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  TrendingUp,
  Building,
  Users,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

const services = [
  {
    icon: FileText,
    title: "Individual Tax Filing",
    description:
      "Complete income tax return filing for individuals with maximum deductions and refunds.",
    features: ["ITR Filing", "Tax Planning", "Refund Processing"],
    price: "Starting from ₹999",
  },
  {
    icon: Building,
    title: "Business Tax Services",
    description:
      "Comprehensive tax solutions for businesses including GST, corporate tax, and compliance.",
    features: ["GST Registration", "Corporate Tax", "Compliance"],
    price: "Starting from ₹2,999",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Strategic tax planning to minimize liabilities and maximize savings throughout the year.",
    features: ["Investment Planning", "Tax Optimization", "Quarterly Reviews"],
    price: "Starting from ₹1,499",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description:
      "Expert financial advice for wealth creation and tax-efficient investment strategies.",
    features: ["Investment Advice", "Portfolio Review", "Retirement Planning"],
    price: "Starting from ₹1,999",
  },
  {
    icon: Users,
    title: "Startup Assistance",
    description:
      "Complete support for startups including registration, compliance, and tax planning.",
    features: ["Company Registration", "Compliance Setup", "Tax Strategy"],
    price: "Starting from ₹4,999",
  },
  {
    icon: Shield,
    title: "Tax Audit Support",
    description:
      "Professional representation and support during tax audits and assessments.",
    features: ["Audit Representation", "Documentation", "Appeal Support"],
    price: "Starting from ₹3,999",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Tax Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            From individual tax filing to complex business solutions, we provide
            expert guidance tailored to your specific needs with guaranteed
            compliance and maximum savings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:scale-105 transition-all duration-300 group">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-primary-600">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        + applicable taxes
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={scrollToContact}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Custom Tax Solutions?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Our experts can create tailored tax strategies for your unique
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="btn-primary">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">View All Services</button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
