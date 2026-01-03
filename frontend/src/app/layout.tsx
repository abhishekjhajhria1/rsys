"use client";

import "./globals.css";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-(--bg) text-(--text)">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
