import sportsNews from "@/data/sports";
import LatestNewsCard from "@/Section/LatestNews/LatestNewsCard";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">
            Sports News
          </h1>

          <p className="mt-4 text-gray-400">
            Latest sports updates, matches and events.
          </p>
        </div>


        {/* News Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sportsNews.map((news) => (
            <LatestNewsCard
              key={news.id}
              news={news}
            />
          ))}
        </div>

      </div>
    </main>
  );
}