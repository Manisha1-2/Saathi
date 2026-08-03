import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PackageCard from "@/components/cards/PackageCard";
import packages from "@/data/packages";

export const metadata = {
  title: "Tour Packages | Explore Nepal Travels",
  description: "Browse featured trekking, cultural, wildlife, and adventure packages in Nepal.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-2 block">
            Curated Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Best Nepal Tour & Trek Packages
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Handcrafted itineraries tailored for trekkers, adventurers, and families.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id || pkg.slug} packageItem={pkg} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
