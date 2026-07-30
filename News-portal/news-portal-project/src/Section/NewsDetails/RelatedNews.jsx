import LatestNewsCard from "@/Section/LatestNews/LatestNewsCard";

export default function RelatedNews({ news }) {
  return (
    <section className="mt-16 border-t border-gray-700 pt-10">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Related News
      </h2>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <LatestNewsCard
            key={item.id}
            news={item}
          />
        ))}
      </div>

    </section>
  );
}