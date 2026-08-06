import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-accent',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Saathi Grand Hotel & Resort | Luxury Redefined',
  description:
    'Saathi Grand Hotel & Resort — Experience luxury redefined. Premium rooms, world-class dining, spa & wellness, and exceptional hospitality in Pokhara, Nepal.',
  keywords: 'luxury hotel, resort, hospitality, premium rooms, spa, fine dining, booking, Pokhara, Nepal',
  authors: [{ name: 'Saathi Grand Hotel & Resort' }],
  openGraph: {
    title: 'Saathi Grand Hotel & Resort',
    description: 'Experience luxury redefined at Saathi Grand Hotel & Resort.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream-50 text-gray-900 antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
