import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BlogCard from "@/components/cards/BlogCard";
import blogs from "@/data/blogs";

export const metadata = {
  title: "Travel Blog & Guides | Explore Nepal Travels",
  description: "Read travel tips, trekking guides, equipment checklists, and stories from Nepal.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-2 block">
            Travel Articles & News
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Nepal Travel Insights
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Expert advice, preparation tips, and stories to inspire your next Nepal adventure.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
