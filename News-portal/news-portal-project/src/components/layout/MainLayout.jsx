import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white p-10">
        {children}
      </main>

      <Footer />
    </>
  );
}