import allNews from "@/data/allNews";
import Link from "next/link";
import Image from "next/image";


export default async function CategoryPage({ params }) {

  const { category } = await params;


  const categoryNews = allNews.filter(
    (item) =>
      item.category.toLowerCase() === category.toLowerCase()
  );


  const featuredNews = categoryNews[0];

  const remainingNews = categoryNews.slice(1);


  return (
    <section className="mx-auto max-w-6xl px-6 py-16">


      <h1 className="mb-10 text-4xl font-bold text-gray-900 capitalize">
        {category} News
      </h1>



      {/* Featured News */}

      {featuredNews && (

        <Link
          href={`/article/${featuredNews.id}`}
          className="mb-14 grid overflow-hidden rounded-2xl border bg-white shadow-md md:grid-cols-2"
        >


          <div className="relative h-80">

            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>



          <div className="flex flex-col justify-center p-8">


            <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-xs text-white">
              {featuredNews.category}
            </span>


            <h2 className="mt-5 text-3xl font-bold hover:text-red-600">
              {featuredNews.title}
            </h2>


            <p className="mt-4 text-gray-600">
              {featuredNews.description}
            </p>


          </div>


        </Link>

      )}



      {/* Latest News */}

      <h2 className="mb-8 text-2xl font-bold">
        Latest {category} News
      </h2>



      <div className="grid gap-8 md:grid-cols-3">


        {remainingNews.map((news) => (


          <Link
            key={news.id}
            href={`/article/${news.id}`}
            className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-xl"
          >


            <div className="relative h-56">


              <Image
                src={news.image}
                alt={news.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition group-hover:scale-105"
              />


            </div>



            <div className="p-5">


              <span className="rounded-full bg-red-600 px-3 py-1 text-xs text-white">
                {news.category}
              </span>



              <h3 className="mt-4 text-xl font-bold group-hover:text-red-600">
                {news.title}
              </h3>



              <p className="mt-3 text-sm text-gray-600">
                {news.description}
              </p>


            </div>


          </Link>


        ))}


      </div>


    </section>
  );
}