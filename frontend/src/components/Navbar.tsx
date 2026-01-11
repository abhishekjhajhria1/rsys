"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ConnectWalletButton from "./ConnectWalletButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          RSYS
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
            >
              Explore
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-56 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden"
                >
                  <DropdownItem href="/campaigns" label="Campaigns" />
                  <DropdownItem href="/admin" label="Admin Portal" />
                  <DropdownItem href="/volunteer" label="Volunteer Portal" />
                  <DropdownItem href="/provider" label="Service Provider" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Wallet */}
          <ConnectWalletButton />
        </div>
      </div>
    </nav>
  );
}

function DropdownItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-100/60 transition"
    >
      {label}
    </Link>
  );
}
