import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading ShuraaTax...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>ShuraaTax - Professional Tax Consultation Services</title>
        <meta
          name="description"
          content="Expert tax consultation services for individuals and businesses. Professional tax planning, filing, and advisory services."
        />
        <meta
          name="keywords"
          content="tax consultation, tax planning, tax filing, business tax, individual tax, tax advisory"
        />
        <meta name="author" content="ShuraaTax" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shuraatax.com/" />
        <meta
          property="og:title"
          content="ShuraaTax - Professional Tax Consultation Services"
        />
        <meta
          property="og:description"
          content="Expert tax consultation services for individuals and businesses."
        />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shuraatax.com/" />
        <meta
          property="twitter:title"
          content="ShuraaTax - Professional Tax Consultation Services"
        />
        <meta
          property="twitter:description"
          content="Expert tax consultation services for individuals and businesses."
        />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </>
  );
}
