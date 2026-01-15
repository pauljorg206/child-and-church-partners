import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PayPalProvider from "@/components/providers/PayPalProvider";
import {
  OrganizationSchema,
  WebsiteSchema,
} from "@/components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://childandchurchpartners.org"),
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={inter.className}>
        <PayPalProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PayPalProvider>
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        )}
      </body>
    </html>
  );
}
