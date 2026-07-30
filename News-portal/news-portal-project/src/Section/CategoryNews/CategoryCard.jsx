import Image from "next/image";

export default function CategoryCard({ news, featured = false }) {
  if (featured) {
    return (
      <div className="relative h-105 overflow-hidden rounded-xl group">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width:768px) 100vw, 66vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white">
          <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold">
            {news.category}
          </span>

          <h2 className="mt-3 text-2xl font-bold">
            {news.title}
          </h2>

          <p className="mt-2 text-gray-200">
            {news.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="128px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div>
       <span className="text-xs font-bold uppercase tracking-wider text-red-600">
  {news.category}
</span>

        <h3 className="mt-1 text-base font-bold text-white transition-colors duration-300 group-hover:text-red-500">
  {news.title}
</h3>
      </div>
    </div>
  );
}