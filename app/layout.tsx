import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Rumi Healing Arts",
  description: "Next.js + Tailwind CSS starter environment.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
