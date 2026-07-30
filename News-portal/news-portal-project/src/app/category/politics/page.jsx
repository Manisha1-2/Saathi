import politicsNews from "@/data/politics";
import LatestNewsCard from "@/Section/LatestNews/LatestNewsCard";

export default function PoliticsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">
            Politics News
          </h1>

          <p className="mt-4 text-gray-400">
            Latest political updates from Nepal.
          </p>
        </div>


        {/* News Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {politicsNews.map((news) => (
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