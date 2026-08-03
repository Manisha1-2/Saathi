import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import blogs from "@/data/blogs";
import { FiCalendar, FiClock, FiUser, FiTag, FiArrowLeft, FiShare2 } from "react-icons/fi";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | Explore Nepal Travels Blog`,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-himalayan-blue-light hover:underline mb-6"
          >
            <FiArrowLeft /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-himalayan-blue text-white text-xs font-bold px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-300">
              <FiCalendar /> {blog.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-300">
              <FiClock /> {blog.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <Image src={blog.authorImage} alt={blog.author} fill className="object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold">{blog.author}</div>
              <div className="text-xs text-slate-400">Travel Specialist & Writer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
          <p className="text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic border-l-4 border-himalayan-blue pl-4 py-1">
            {blog.excerpt}
          </p>

          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              {blog.content}
            </p>
            <p>
              Nepal continues to captivate adventurers, culture enthusiasts, and nature lovers from around the globe. When planning your journey, having local guidance ensures safe trekking routes, proper altitude acclimatization, and memorable cultural encounters.
            </p>
            <p>
              Whether you are preparing for high-altitude passes or relaxing by Pokhara&apos;s serene waters, packing right and choosing certified local guides can transform your Nepal holiday into a life-defining adventure.
            </p>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <FiTag className="text-slate-400 text-sm" />
            {blog.tags.map((t) => (
              <span
                key={t}
                className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-3 py-1 rounded-full"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            More Nepal Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((b) => (
              <div key={b.slug} className="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl space-y-3">
                <span className="text-xs font-semibold text-himalayan-blue uppercase">{b.category}</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2">
                  <Link href={`/blog/${b.slug}`} className="hover:text-himalayan-blue transition-colors">
                    {b.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">{b.excerpt}</p>
                <Link
                  href={`/blog/${b.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-himalayan-blue hover:gap-2 transition-all pt-2"
                >
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
