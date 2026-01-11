"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <Navbar />
          {children}
          <Toaster richColors position="top-right" />
        </WagmiProvider>
      </body>
    </html>
  );
}
