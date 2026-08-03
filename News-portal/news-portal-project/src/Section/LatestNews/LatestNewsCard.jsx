import Link from "next/link";

export default function LatestNewsCard({ news }) {
  return (
    <Link
      href={`/article/${news.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          {news.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Date & Author */}
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.author}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
          {news.title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-sm leading-6 text-gray-300">
          {news.description}
        </p>

        {/* Button */}
        <span
          className="
            mt-auto
            inline-block
            w-fit
            rounded-lg
            border
            border-red-600
            px-5
            py-2
            text-sm
            font-semibold
            text-red-500
            transition-all
            duration-300
            group-hover:bg-red-600
            group-hover:text-white
          "
        >
          Read More →
        </span>

      </div>

    </Link>
  );
}