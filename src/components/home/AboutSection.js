import { motion } from "framer-motion";
import {
  Award,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Play,
} from "lucide-react";
import Container from "../ui/Container";

const achievements = [
  {
    icon: Users,
    number: "2500+",
    label: "Happy Clients",
    description: "Trusted by individuals and businesses",
  },
  {
    icon: TrendingUp,
    number: "10,000+",
    label: "Returns Filed",
    description: "Successfully processed tax returns",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Proven expertise in tax consulting",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Compliance Rate",
    description: "Error-free tax filing guarantee",
  },
];

const features = [
  "Expert Tax Consultants with CA/CPA Certifications",
  "End-to-End Tax Planning and Filing Services",
  "Real-time Updates on Tax Law Changes",
  "Dedicated Client Support Throughout the Year",
  "Advanced Security for Document Protection",
  "Transparent Pricing with No Hidden Costs",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                About ShuraaTax
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Tax
                <span className="text-primary-600"> Partners</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over 15 years, ShuraaTax has been helping individuals and
                businesses navigate the complex world of taxation. Our team of
                certified professionals ensures you maximize your savings while
                staying fully compliant.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
              </button>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Our Story
              </button>
            </div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our Professional Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />

              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-primary-900/40 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-lg">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
