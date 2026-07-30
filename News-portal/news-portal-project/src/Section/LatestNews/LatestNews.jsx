import Container from "@/components/layout/Container";
import latestNews from "@/data/latestNews";
import LatestNewsCard from "./LatestNewsCard";

export default function LatestNews() {
  return (
   <section className="bg-[#0B0F19] py-20">
      <Container>
         <div className="border-t border-gray-700 pt-8">
        {/* Section Heading */}
        <div className="mb-12">
            <div className="flex items-center gap-4">
            <span className="rounded bg-red-600 px-4 py-2 font-bold text-white">
    📰 Latest News
  </span>

  <h2 className="text-4xl font-bold text-white">
    Nepal Updates
  </h2>
</div>

<p className="mb-12 max-w-3xl text-gray-400">
  Stay updated with the latest breaking stories, politics, business,
  sports, technology and entertainment from across Nepal.
</p>
</div>

      

        {/* News Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((news) => (
            <LatestNewsCard key={news.id} news={news} />
          ))}
        </div>
        </div>
      </Container>
    </section>
  );
}