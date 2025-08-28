import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@shuraatax.com</span>
              </div>
            </div>
            <div className="text-sm">
              Professional Tax Consultation Services
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                ShuraaTax
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    router.pathname === item.href
                      ? "text-primary-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Link href="/#contact" className="btn-primary">
                Get Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left font-medium transition-colors hover:text-primary-600 ${
                        router.pathname === item.href
                          ? "text-primary-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/#contact"
                      className="block w-full btn-primary text-center"
                    >
                      Get Consultation
                    </Link>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>info@shuraatax.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
