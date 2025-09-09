import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sowyfans",
  description: "Solana with a fans",
  applicationName: "Sowyfans",
  authors: [{ name: "Pudding" }],
  keywords: [
    "Solana",
    "Onlyfans",
    "Sowyfans",
    "Creators",
    "Subscription",
    "Content",
    "Fans",
    "Blockchain",
    "Crypto",
    "NFTs",
    "Decentralized",
    "Digital Payments",
    "Monetization",
    "Exclusive Content",
    "Membership",
    "Support Creators",
  ],
  publisher: "Pudding",
  creator: "Pudding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
