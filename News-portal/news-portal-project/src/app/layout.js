import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: {
    default: "NewsPulse",
    template: "%s | NewsPulse",
  },
  description: "Modern News Portal built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}