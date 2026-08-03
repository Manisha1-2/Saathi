import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiAward, FiUsers, FiGlobe } from "react-icons/fi";

export const metadata = {
  title: "About Us | Explore Nepal Travels",
  description: "Learn about Explore Nepal Travels - Nepal's premier travel and adventure company with over 15 years of experience.",
};

const stats = [
  { icon: FiGlobe, value: "500+", label: "Destinations Covered" },
  { icon: FiUsers, value: "10,000+", label: "Happy Travelers" },
  { icon: FiAward, value: "15+", label: "Years Experience" },
  { icon: FiCheckCircle, value: "98%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Ramesh Sharma",
    role: "Founder & Lead Guide",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "20+ years guiding treks across the Everest and Annapurna region.",
  },
  {
    name: "Sita Gurung",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Expert in itinerary planning, safety management, and cultural tours.",
  },
  {
    name: "Pasang Sherpa",
    role: "Senior Expedition Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Summit guide with over 15 successful 8000m peak expeditions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80"
            alt="Nepal Himalayan Range"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-3 block">
            About Explore Nepal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Your Trusted Companion in the Himalayas
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We craft life-defining journeys through Nepal&apos;s majesty, connecting travelers with breathtaking landscapes, rich heritage, and authentic warm hospitality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"
              alt="Trekking in Nepal"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-himalayan-blue font-bold text-sm tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Passion for Adventure, Commitment to Authenticity
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded over 15 years ago in Kathmandu, Explore Nepal Travels started with a simple mission: to show the world the raw, unspoiled beauty of Nepal while supporting local mountain communities.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, our team of certified guides, local culture experts, and trip planners craft seamless adventures ranging from high-altitude Everest expeditions to serene cultural tours in Pokhara and Chitwan.
            </p>
            <div className="pt-4">
              <Link
                href="/destinations"
                className="btn-primary inline-flex px-6 py-3 rounded-xl font-semibold"
              >
                Explore Our Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-slate-900 py-16 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-sky-light text-himalayan-blue flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-himalayan-blue font-bold text-sm tracking-widest uppercase">
            Meet the Experts
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Our Experienced Leadership Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-himalayan-blue font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
