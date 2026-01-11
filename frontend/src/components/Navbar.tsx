"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { Shield, HeartHandshake, Users } from "lucide-react";

export default function Navbar() {
  const { address, isConnected } = useAccount();

  return (
    <nav
      style={{
        padding: 16,
        borderBottom: "1px solid #ddd",
        display: "flex",
        gap: 16,
        alignItems: "center",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/campaign">
        <HeartHandshake size={16} /> Campaign
      </Link>
      <Link href="/admin">
        <Shield size={16} /> Admin
      </Link>
      <Link href="/volunteer">
        <Users size={16} /> Volunteer
      </Link>
      <Link href="/provider">Provider</Link>
      <Link href="/judge">Judge Mode</Link>

      <div style={{ marginLeft: "auto", fontSize: 12 }}>
        {isConnected
          ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`
          : "Not connected"}
      </div>
    </nav>
  );
}
