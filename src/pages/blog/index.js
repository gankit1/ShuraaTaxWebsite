import { useState, useMemo } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import Layout from "../../components/layout/Layout";
import BlogGrid from "../../components/blog/BlogGrid";
import Container from "../../components/ui/Container";
import { blogPosts } from "../../data/blogPosts";

const categories = [
  "All",
  "Tax Planning",
  "Business Tax",
  "Individual Tax",
  "Tax News",
  "Guides",
];

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Head>
        <title>Tax Blog - Expert Insights & Tips | ShuraaTax</title>
        <meta
          name="description"
          content="Stay updated with the latest tax news, tips, and insights from our expert tax consultants. Read our comprehensive guides on tax planning and strategies."
        />
        <meta
          name="keywords"
          content="tax blog, tax tips, tax news, tax planning guides, tax insights"
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Tax Insights & Updates
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Stay informed with expert tax advice, latest updates, and
                comprehensive guides
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <Filter className="w-5 h-5" />
                  <span>Filter by:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <Container>
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            <BlogGrid posts={filteredPosts} />

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or selected category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </Container>
        </section>
      </Layout>
    </>
  );
}
