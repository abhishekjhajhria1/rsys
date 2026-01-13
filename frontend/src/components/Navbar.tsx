"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          RSYS
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/campaigns" className="text-sm text-slate-700">
            Campaigns
          </Link>

          <Link href="/judge" className="text-sm text-slate-700">
            Judge Mode
          </Link>

          {/* Role Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-sm text-slate-700"
            >
              Roles
              <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm overflow-hidden">
                <RoleLink
                  href="/admin"
                  title="Admin"
                  desc="Governance & fund control"
                />
                <RoleLink
                  href="/volunteer"
                  title="Volunteer"
                  desc="Verify victims"
                />
                <RoleLink
                  href="/provider"
                  title="Service Provider"
                  desc="Redeem funds"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function RoleLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 hover:bg-slate-50 transition"
    >
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </Link>
  );
}
