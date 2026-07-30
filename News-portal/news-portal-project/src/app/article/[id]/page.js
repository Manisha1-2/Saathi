import Image from "next/image";
import allNews from "@/data/allNews";
import RelatedNews from "@/section/RelatedNews/RelatedNews";
import ShareButtons from "@/Section/Article/ShareButtons";

export default async function ArticlePage({ params }) {
  const { id } = await params;

  const article = allNews.find(
    (item) => item.id === Number(id)
  );

  console.log("URL ID:", id);
  console.log("FOUND ARTICLE:", article);

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Article Not Found
        </h1>
      </div>
    );
  }

  const words = article.content
  ? article.content.split(/\s+/).length
  : 0;

const readingTime = Math.ceil(words / 200);
  // Related news from same category
 // Related news from same category (remove duplicates)

const relatedNews = allNews
  .filter(
    (item) =>
      item.category === article.category &&
      item.id !== article.id
  )
  .filter(
    (item, index, self) =>
      index === self.findIndex(
        (news) => news.title === item.title
      )
  )
  .slice(0, 3);


  console.log("RELATED NEWS:", relatedNews);


  return (
    <article className="mx-auto max-w-4xl px-6 py-16">

      {/* Category */}
      <span className="rounded-full bg-red-600 px-4 py-2 text-sm text-white">
        {article.category}
      </span>


      {/* Title */}
      <h1 className="mt-6 text-4xl font-bold leading-tight">
        {article.title}
      </h1>


      {/* Author */}
     <div className="mt-4 text-sm text-gray-500">
  By {article.author} • {article.date} • {readingTime} min read
</div>

<ShareButtons/>

      {/* Main Image */}
      <div className="relative mt-8 h-[450px] overflow-hidden rounded-2xl">

        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />

      </div>


      {/* Content */}
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">

        {article.content ? (
  article.content.split("\n\n").map((paragraph, index) => (
    <p key={index}>
      {paragraph}
    </p>
  ))
) : (
  <p className="text-gray-500">
    No article content available.
  </p>
)}

      </div>


      {/* Related News */}
      <RelatedNews news={relatedNews} />


    </article>
  );
}