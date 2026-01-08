"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/lib/wagmi";
import "./globals.css";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {children}
    </QueryClientProvider>
  </WagmiProvider>
</body>

    </html>
  );
}
