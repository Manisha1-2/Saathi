import Link from "next/link";

import latestNews from "@/data/latestNews";
import RelatedNews from "@/Section/NewsDetails/RelatedNews";

export default async function NewsDetailPage({ params }) {
  const { id } = await params;

  const news = latestNews.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return (
      <main className="min-h-screen bg-[#0B0F19] py-20 text-center">
        <h1 className="text-4xl font-bold text-white">
          News Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] py-20">
      <div className="mx-auto max-w-5xl px-4">

        <Link
  href="/latest"
  className="
    inline-block
    mb-8
    text-sm
    font-semibold
    text-red-500
    transition-colors
    hover:text-red-400
  "
>
  ← Back to Latest News
</Link>

        {/* Category */}
        <span className="rounded bg-red-600 px-4 py-2 text-sm font-bold text-white">
          {news.category}
        </span>

        {/* Title */}
       <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          {news.title}
        </h1>

        {/* Date & Author */}
        <p className="mt-4 text-gray-400">
          {news.date} • {news.author}
        </p>

        {/* Image */}
        <img
          src={news.image}
          alt={news.title}
          className="mt-8 h-[450px] w-full rounded-xl object-cover"
        />
{/* Full Article */}
<p className="mt-8 whitespace-pre-line text-lg leading-9 text-gray-300">
  {news.content}
</p>

<RelatedNews news={latestNews.filter((item) => item.id !== news.id).slice(0,3)} />
      </div>
    </main>
  );
}