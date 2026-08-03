import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import packages from "@/data/packages";

export const metadata = {
  title: "Book Your Trip | Explore Nepal Travels",
  description: "Book your Nepal trekking, tour, or adventure expedition directly.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-2 block">
            Start Your Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Book Your Adventure
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Reserve your spot for Nepal&apos;s finest trekking and tour packages.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Booking Form
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Select Package</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue">
                {packages.map((pkg) => (
                  <option key={pkg.id || pkg.slug} value={pkg.slug}>
                    {pkg.title || pkg.name} ({pkg.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Start Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Number of Travelers</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Special Requests / Notes</label>
              <textarea
                rows="3"
                placeholder="Dietary requirements, medical notes, or custom requests..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-nepal-red hover:bg-nepal-red-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-nepal-red/30"
            >
              Confirm Booking Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
