import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rumi Healing Arts",
  description: "Next.js + Tailwind CSS starter environment.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 font-sans text-slate-100 antialiased">
        <div className="mx-auto min-h-screen max-w-6xl px-6 pb-48 pt-14">
          {children}
        </div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
