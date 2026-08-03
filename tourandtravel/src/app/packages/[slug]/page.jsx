import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import packages from "@/data/packages";
import {
  FiClock,
  FiUsers,
  FiStar,
  FiCheckCircle,
  FiXCircle,
  FiCalendar,
  FiCheck,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.name} (${pkg.duration}) | Explore Nepal Travels`,
    description: pkg.description,
  };
}

export async function generateStaticParams() {
  return packages.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-blue">{pkg.category}</span>
            <span className="badge badge-gold">{pkg.difficulty}</span>
            {discount > 0 && (
              <span className="bg-nepal-red text-white text-xs font-bold px-3 py-1 rounded-full">
                SAVE {discount}%
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 max-w-4xl leading-tight">
            {pkg.name}
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-6">
            {pkg.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <FiClock className="text-himalayan-blue-light" />
              <span>Duration: <strong>{pkg.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="text-himalayan-blue-light" />
              <span>Group Size: <strong>{pkg.groupSize} people</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiStar className="text-amber-400 fill-amber-400" />
              <span>Rating: <strong>{pkg.rating}</strong> ({pkg.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Package Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <FiCheckCircle className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes & Excludes */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                What&apos;s Included & Excluded
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Includes */}
                <div>
                  <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                    <FiCheckCircle /> What is Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <FiCheck className="text-emerald-500 font-bold flex-shrink-0 mt-0.5" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div>
                  <h3 className="text-base font-bold text-rose-500 mb-4 flex items-center gap-2">
                    <FiXCircle /> What is Excluded
                  </h3>
                  <ul className="space-y-3">
                    {pkg.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                        <span className="text-rose-400 font-bold flex-shrink-0">•</span>
                        {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Upcoming Departures */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FiCalendar className="text-himalayan-blue" /> Upcoming Fixed Departures
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Join an existing small group or request custom private dates.
              </p>

              <div className="flex flex-wrap gap-3">
                {pkg.departures.map((dep, i) => (
                  <span
                    key={i}
                    className="bg-sky-light text-himalayan-blue font-semibold text-sm px-4 py-2.5 rounded-xl border border-himalayan-blue/20"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Price Box & Booking Form Link */}
          <div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl sticky top-28">
              <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Price per person
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    ${pkg.price}
                  </span>
                  {pkg.originalPrice > pkg.price && (
                    <span className="text-lg text-slate-400 line-through">
                      ${pkg.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900 dark:text-white">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Group Size</span>
                  <span className="font-bold text-slate-900 dark:text-white">{pkg.groupSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Trip Difficulty</span>
                  <span className="font-bold text-slate-900 dark:text-white">{pkg.difficulty}</span>
                </div>
              </div>

              <Link
                href={`/booking?package=${pkg.slug}`}
                className="block w-full text-center bg-nepal-red hover:bg-nepal-red-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-nepal-red/30 mb-4"
              >
                Book This Package
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <FiShield className="text-emerald-500" />
                100% Flexible Booking & Money Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
