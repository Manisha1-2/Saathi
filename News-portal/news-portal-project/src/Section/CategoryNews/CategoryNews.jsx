import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";

export default function CategoryNews({ title, news }) {
  return (
    <section className="py-16">
      <Container>
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div>
          <h2 className="text-3xl font-bold text-white">
  {title}
</h2>

            <div className="mt-2 h-1 w-20 rounded bg-red-600"></div>
          </div>

         <button className="font-semibold text-white hover:text-red-500">
  View All →
</button>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CategoryCard news={news[0]} featured />
          </div>

          <div className="space-y-6">
            {news.slice(1).map((item) => (
              <CategoryCard
                key={item.id}
                news={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}