"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ConnectWallet from "@/components/ConnectWallet";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Brand */}
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          RSYS
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4 relative">
          {/* DROPDOWN */}
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 border rounded text-sm hover:bg-gray-50 transition"
          >
            Explore
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-56 bg-white border rounded shadow-sm z-50">
              <div className="py-2 text-sm">
                <button
                  onClick={() => {
                    router.push("/transparency");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Transparency
                </button>

                <button
                  onClick={() => {
                    router.push("/policies");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Policies & Controls
                </button>

                <button
                  onClick={() => {
                    router.push("/roadmap");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Roadmap
                </button>

                <div className="my-2 border-t" />

                <div className="px-4 py-1 text-xs text-gray-500 uppercase">
                  Role Access
                </div>

                <button
                  onClick={() => {
                    router.push("/panel/volunteer");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Volunteer Panel
                </button>

                <button
                  onClick={() => {
                    router.push("/panel/admin");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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
