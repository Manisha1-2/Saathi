"use client";

import { useState } from "react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email address.";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters.";
  }

  return newErrors;
};

 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSuccess("");
    return;
  }

  console.log("Form Data:", formData);

  setSuccess("Your message has been sent successfully!");

  setErrors({});
};

  
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
            Have questions about custom itineraries, permits, or travel dates?
            We&apos;re here 24/7 to assist.
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
                Whether you want to customize an existing trek or need expert
                advice on the best season to visit, send us a message!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Our Head Office
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Thamel, Kathmandu 44600, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiPhone />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Phone & WhatsApp
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    +977-1-4444444 / +977 9801234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiMail />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Email Address
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    info@explorenepaltravels.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-light text-himalayan-blue flex items-center justify-center text-xl shrink-0">
                  <FiClock />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Office Hours
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Sun - Fri: 9:00 AM - 6:00 PM (NPT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            {success && (
  <p className="mb-4 text-green-600 text-sm font-medium">
    {success}
  </p>
)}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Manisha Napit"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                />
                {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name}
  </p>
)}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="manisha99@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                />
                {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email}
  </p>
)}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about Everest Base Camp Trek"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                />

                {errors.subject && (
  <p className="text-red-500 text-sm mt-1">
    {errors.subject}
  </p>
)}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans, group size, and preferred dates..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm focus:outline-none focus:border-himalayan-blue"
                />
                {errors.message && (
  <p className="text-red-500 text-sm mt-1">
    {errors.message}
  </p>
)}
              </div>

              <button
                type="submit"
                className="w-full bg-himalayan-blue hover:bg-himalayan-blue-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
