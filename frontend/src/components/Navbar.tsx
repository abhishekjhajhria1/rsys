"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ConnectWallet from "@/components/ConnectWallet";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="w-full bg-(--card) border-b border-(--border)">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Brand */}
        <div
          className="cursor-pointer leading-tight"
          onClick={() => router.push("/")}
        >
          <div className="text-sm text-(--muted)">Emergency Relief System</div>
          <div className="text-lg font-semibold">RSYS</div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4 relative">
          {/* DROPDOWN */}
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 border border-(--border) rounded text-sm hover:bg-(--bg) transition"
          >
            Explore
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-60 bg-(--card) border border-(--border) rounded-lg shadow-sm z-50">
              <div className="py-2 text-sm">
                {/* Public */}
                <div className="px-4 py-1 text-xs text-(--muted) uppercase">
                  Public
                </div>

                <button
                  onClick={() => {
                    router.push("/transparency");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-(--bg)"
                >
                  Transparency
                </button>

                <button
                  onClick={() => {
                    router.push("/policies");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-(--bg)"
                >
                  Policies & Controls
                </button>

                <button
                  onClick={() => {
                    router.push("/roadmap");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-(--bg)"
                >
                  Roadmap
                </button>

                <div className="my-2 border-t border-(--border)" />

                {/* Restricted */}
                <div className="px-4 py-1 text-xs text-(--muted) uppercase">
                  Role Access
                </div>

                <button
                  onClick={() => {
                    router.push("/panel/volunteer");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-(--bg)"
                >
                  Volunteer Panel
                </button>

                <button
                  onClick={() => {
                    router.push("/panel/admin");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-(--bg)"
                >
                  Admin Panel
                </button>
              </div>
            </div>
          )}

          {/* WALLET */}
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
