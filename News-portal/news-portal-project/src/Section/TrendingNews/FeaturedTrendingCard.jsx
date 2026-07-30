import Image from "next/image";
import Link from "next/link";

export default function FeaturedTrendingNews({ news }) {
  return (
  <Link
  href={`/article/${news.id}`}
  className="relative block h-115 overflow-hidden rounded-xl group"
>

      <Image
        src={news.image}
        alt={news.title}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 p-6 text-white">

        <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          {news.category}
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          {news.title}
        </h2>

       <p className="mt-3 text-gray-300">

          {news.description}
        </p>

      </div>
</Link>
   
  );
}