import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [
    injected({
    target: "metaMask",
  }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: true,
});
