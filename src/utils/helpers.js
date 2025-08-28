export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-IN", options);
};

export const formatCurrency = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

export const generateExcerpt = (content, maxLength = 160) => {
  // Remove HTML tags
  const textOnly = content.replace(/<[^>]*>/g, "");
  return truncateText(textOnly, maxLength);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const getReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const generateMetaTags = (page) => {
  const baseUrl = "https://shuraatax.com";

  return {
    title: page.title || "ShuraaTax - Professional Tax Consultation Services",
    description:
      page.description ||
      "Expert tax consultation services for individuals and businesses.",
    canonical: `${baseUrl}${page.path || ""}`,
    openGraph: {
      title: page.title || "ShuraaTax",
      description: page.description || "Expert tax consultation services",
      url: `${baseUrl}${page.path || ""}`,
      images: [
        {
          url: page.image || `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: page.title || "ShuraaTax",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title || "ShuraaTax",
      description: page.description || "Expert tax consultation services",
      image: page.image || `${baseUrl}/images/og-image.jpg`,
    },
  };
};
