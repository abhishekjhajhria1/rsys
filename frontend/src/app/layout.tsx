import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "RSYS — Disaster Relief Stablecoin System",
  description:
    "A transparent, blockchain-based disaster relief system with enforced spending and real-time auditability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient  from-slate-50 via-white to-sky-50 text-slate-900 antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
