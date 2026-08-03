import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DestinationCard from "@/components/cards/DestinationCard";
import destinations from "@/data/destinations";

export const metadata = {
  title: "Destinations | Explore Nepal Travels",
  description: "Browse breathtaking destinations across Nepal including Everest, Annapurna, Kathmandu, Pokhara, Chitwan and Mustang.",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-2 block">
            Discover Nepal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Explore All Destinations
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            From world-famous Himalayan peaks to serene lakes and wildlife reserves.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id || dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
