import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthMindset.ai — AI Voice Agents for Home Service Contractors",
  description:
    "AI that answers your phone, qualifies the lead, and books the job — before they hang up. Trusted by 50+ home service businesses.",
  openGraph: {
    title: "GrowthMindset.ai — AI Voice Agents for Home Service Contractors",
    description:
      "AI that answers your phone, qualifies the lead, and books the job — before they hang up.",
    url: "https://growthmindset.ai",
    siteName: "GrowthMindset.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthMindset.ai — AI Voice Agents",
    description:
      "AI that answers your phone, qualifies the lead, and books the job.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-bg text-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
