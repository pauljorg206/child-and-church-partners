import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Child & Church Partners | Overcome Barriers. Lead Change.",
    template: "%s | Child & Church Partners",
  },
  description:
    "U.S.-based Christian nonprofit organization helping children and churches in the Philippines fulfill their fullest potential and possibilities.",
  keywords: [
    "nonprofit",
    "Philippines",
    "children",
    "churches",
    "sponsorship",
    "Christian",
    "charity",
  ],
  authors: [{ name: "Child & Church Partners International" }],
  openGraph: {
    title: "Child & Church Partners | Overcome Barriers. Lead Change.",
    description:
      "Helping poor children and small churches in the Philippines overcome barriers and lead change.",
    url: "https://childandchurchpartners.org",
    siteName: "Child & Church Partners",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Child & Church Partners | Overcome Barriers. Lead Change.",
    description:
      "Helping poor children and small churches in the Philippines overcome barriers and lead change.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
