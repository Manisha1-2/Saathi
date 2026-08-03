import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-950 text-white p-10">
        {children}
      </main>

      <Footer />
      <ScrollToTop/>
    </>
  );
}