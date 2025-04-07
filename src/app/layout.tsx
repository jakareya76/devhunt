import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "DevHunt | The Ultimate Job Tracker",
  description:
    "DevHunt: The Ultimate Job Tracker & AI Career Assistant for Developers",
};

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const fontClass = `${inter.className} ${spaceGrotesk.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClass} antialiased bg-site-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
