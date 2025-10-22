import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Rumi Healing Arts",
  description: "Next.js + Tailwind CSS starter environment.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className="bg-white font-sans antialiased scroll-smooth">
        <PageLoader>
          <div className="p-4 md:p-8">
            {children}
          </div>
        </PageLoader>
      </body>
    </html>
  );
}
