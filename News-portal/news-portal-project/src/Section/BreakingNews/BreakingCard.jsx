import Image from "next/image";
import Link from "next/link";

export default function BreakingCard({ news }) {
  return (
    <Link
      href={`/article/${news.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
      <div className="p-6">


        {/* Category + Time */}
        <div className="mb-4 flex items-center justify-between text-sm">

          <span className="rounded-full bg-red-600 px-3 py-1 text-white">
            {news.category}
          </span>


          <span className="text-gray-500">
            {news.time}
          </span>

        </div>



        {/* Title */}
        <h3 className="text-xl font-bold leading-snug text-gray-900 transition group-hover:text-red-600">
          {news.title}
        </h3>



        {/* Description */}
        <p className="mt-3 line-clamp-3 text-gray-600">
          {news.description}
        </p>



        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            By NewsPulse Team
          </span>


          {/* Button Style */}
          <span className="font-semibold text-red-600 group-hover:underline">
            Read More →
          </span>

        </div>


      </div>


    </Link>
  );
}