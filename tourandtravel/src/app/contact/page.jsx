import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export const metadata = {
  title: "Contact Us | Explore Nepal Travels",
  description: "Get in touch with Explore Nepal Travels. We are here to answer your queries and help plan your Nepal trip.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-12 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-himalayan-blue-light font-bold text-sm tracking-widest uppercase mb-2 block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact Our Travel Experts
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Have questions about custom itineraries, permits, or travel dates? We&apos;re here 24/7 to assist.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you want to customize an existing trek or need expert advice on the best season to visit, send us a message!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Our Head Office</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Thamel, Kathmandu 44600, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+977-1-4444444 / +977 9801234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Email Address</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">info@explorenepaltravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiClock />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Office Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Sun - Fri: 9:00 AM - 6:00 PM (NPT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Manisha Napit"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="manisha99@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about Everest Base Camp Trek"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your travel plans, group size, and preferred dates..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-himalayan-blue hover:bg-himalayan-blue-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
