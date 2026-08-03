import Image from "next/image";
import Link from "next/link";

export default function BreakingCard({ news }) {
  return (
    <Link
      href={`/article/${news.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">

        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>


      {/* Content */}
      <div className="flex flex-1 flex-col p-6">


        {/* Category + Time */}
        <div className="mb-4 flex items-center justify-between text-sm">

          <span className="rounded-full bg-red-600 px-3 py-1 text-white">
            {news.category}
          </span>


          <span className="text-gray-400">
            {news.time}
          </span>

        </div>



        {/* Title */}
        <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-red-500">
          {news.title}
        </h3>



        {/* Description */}
        <p className="mt-3 line-clamp-3 text-gray-300">
          {news.description}
        </p>



        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between pt-5">

          <span className="text-sm text-gray-400">
            By NewsPulse Team
          </span>


          {/* Button Style */}
          <span className="font-semibold text-red-500 transition group-hover:underline">
            Read More →
          </span>

        </div>


      </div>


    </Link>
  );
}