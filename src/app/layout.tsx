import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin Landing",
  description: "Deliver a playful, single-page landing that introduces MemeCoin, explains how to buy, showcases tokenomics, and provides legal text links."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        <NavbarStyleApple brand="MemeCoin" links={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer"}]} />
        {children}
      </body>
    </html>
  );
}
