import Image from "next/image";
import Link from "next/link";

export default function RelatedNews({ news }) {
  return (
    <section className="mt-16 border-t pt-10">

      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Related News
      </h2>


      <div className="grid gap-6 md:grid-cols-3">

        {news.map((item) => (

          <Link
            key={`${item.id}-${item.title}`}
            href={`/article/${item.id}`}
            className="group block overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

            </div>


            {/* Content */}
            <div className="p-5">


              <span className="rounded-full bg-red-600 px-3 py-1 text-xs text-white">
                {item.category}
              </span>



              <h3 className="mt-4 line-clamp-2 text-lg font-bold text-gray-900 transition group-hover:text-red-600">
                {item.title}
              </h3>



              <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                {item.description || "Read the latest update from NewsPulse."}
              </p>



              <span className="mt-5 inline-block font-semibold text-red-600 group-hover:underline">
                Read More →
              </span>


            </div>


          </Link>

        ))}


      </div>


    </section>
  );
}