import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PackageCard from "@/components/cards/PackageCard";
import destinations from "@/data/destinations";
import packages from "@/data/packages";
import {
  FiMapPin,
  FiCompass,
  FiCalendar,
  FiCloud,
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall,
} from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name} - ${destination.tagline} | Explore Nepal Travels`,
    description: destination.description,
  };
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Related packages for this destination
  const relatedPackages = packages.filter(
    (p) =>
      p.slug.includes(slug) ||
      p.name.toLowerCase().includes(destination.name.toLowerCase()) ||
      p.category === destination.category
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Hero Banner with Dynamic Details */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.heroImage || destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-himalayan-blue-light mb-4">
            <FiMapPin /> {destination.location}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            {destination.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-amber-300 mb-6">
            &ldquo;{destination.tagline}&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 max-w-3xl mx-auto border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <FaMountain className="text-himalayan-blue-light" />
              <span>Altitude: <strong>{destination.altitude}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-himalayan-blue-light" />
              <span>Best Season: <strong>{destination.bestSeason}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiCloud className="text-himalayan-blue-light" />
              <span>Climate: <strong>{destination.climate}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiStar className="text-amber-400 fill-amber-400" />
              <span>Rating: <strong>{destination.rating}</strong> ({destination.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Overview & Attractions */}
          <div className="lg:col-span-2 space-y-12">
            {/* About the Place */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                About {destination.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {destination.description}
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                    <FiCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Places to Visit & Things to Do */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Top Places to Visit & Things to Do in {destination.name}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Recommended activities and iconic landmarks to explore when visiting {destination.name}.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-himalayan-blue transition-colors bg-slate-50/50 dark:bg-slate-800/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-light text-himalayan-blue flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {activity}
                      </h4>
                      <span className="text-xs text-slate-400">Must-visit experience</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour & Trek Packages for this destination */}
            {relatedPackages.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Available Packages for {destination.name}
                  </h2>
                  <p className="text-slate-500 text-sm">Book curated trips guided by experienced local experts</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <PackageCard key={pkg.id || pkg.slug} pkg={pkg} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Trip Quick Facts & Booking Box */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 sticky top-28">
              <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Starting Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    ${destination.price}
                  </span>
                  <span className="text-sm text-slate-400">/ person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Recommended Duration</span>
                  <span className="font-bold text-slate-900 dark:text-white">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Best Season</span>
                  <span className="font-bold text-slate-900 dark:text-white">{destination.bestSeason}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Category</span>
                  <span className="badge badge-blue">{destination.category}</span>
                </div>
              </div>

              <Link
                href={`/booking?destination=${destination.slug}`}
                className="block w-full text-center bg-nepal-red hover:bg-nepal-red-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-nepal-red/30 mb-3"
              >
                Plan Trip to {destination.name}
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                <FiPhoneCall /> Ask a Travel Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
