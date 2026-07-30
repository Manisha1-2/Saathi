import Container from "@/components/layout/Container";
import FeaturedTrendingCard from "./FeaturedTrendingCard";
import TrendingSmallCards from "./TrendingSmallCards";
import trendingNews from "@/data/trendingNews";

export default function TrendingNews() {
  return (
    <section className="py-16">
      <Container>
        {/* Section Heading */}
        <div className="mb-10">
         <h2 className="text-3xl font-extrabold text-white-800">
            Trending News
          </h2>

          <div className="mt-2 h-1 w-53 rounded bg-red-600"></div>

          <p className="mt-3 text-gray-500">
            Popular stories people are reading right now
          </p>
        </div>

        {/* Trending Layout */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Featured Card */}
          <div className="lg:col-span-2">
            <FeaturedTrendingCard news={trendingNews[0]} />
          </div>

          {/* Small Cards */}
          <div className="space-y-6">
            {trendingNews.slice(1).map((news) => (
              <TrendingSmallCards key={news.id} news={news} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}