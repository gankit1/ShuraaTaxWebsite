import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Layout from "../../components/layout/Layout";
import Container from "../../components/ui/Container";
import BlogCard from "../../components/blog/BlogCard";
import { blogPosts } from "../../data/blogPosts";

export default function BlogPost({ post, relatedPosts }) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  if (!post) {
    return (
      <Layout>
        <Container>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const handleShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    };

    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <>
      <Head>
        <title>{post.title} | ShuraaTax Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags?.join(", ")} />
        <meta name="author" content={post.author} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Head>

      <Layout>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-8">
          <Container>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </Container>
        </section>

        {/* Article Header */}
        <section className="section-padding">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <div className="mb-8">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="w-4 h-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Share Button */}
                  <div className="relative ml-auto">
                    <button
                      onClick={() => setIsShareOpen(!isShareOpen)}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>

                    {isShareOpen && (
                      <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleShare("facebook")}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                            title="Share on Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleShare("twitter")}
                            className="p-2 text-blue-400 hover:bg-blue-50 rounded"
                            title="Share on Twitter"
                          >
                            <Twitter className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleShare("linkedin")}
                            className="p-2 text-blue-700 hover:bg-blue-50 rounded"
                            title="Share on LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-12">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-gray-50">
            <Container>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}
