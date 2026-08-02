import ContactHero from "@/components/contact/contactHero";
import ContactInfo from "@/components/contact/contactInfo";
import ContactForm from "@/components/contact/contactForm";

export default function ContactPage() {
  return (
    <main>

      <ContactHero />

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">

          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />

        </div>
      </section>

    </main>
  );
}