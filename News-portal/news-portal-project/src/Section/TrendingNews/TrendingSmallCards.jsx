import Image from "next/image";
import Link from "next/link";

export default function TrendingSmallCards({ news }) {
  return (
 <Link
  href={`/article/${news.id}`}
  className="flex gap-4 rounded-lg border border-gray-200 p-3 transition hover:border-red-600 hover:shadow-md group cursor-pointer"
>

      <div className="relative w-32 h-24 overflow-hidden rounded-lg shrink-0">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="128px"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div>
       <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
        
          {news.category}
        </span>
<h3 className="mt-1 text-lg font-bold text-white leading-6 transition-colors duration-300 group-hover:text-red-500">
  {news.title}
</h3>
      </div>
    </Link>
  );
}