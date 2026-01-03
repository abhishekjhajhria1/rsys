"use client";

import ConnectWallet from "@/components/ConnectWallet";
import RoleBadge from "@/components/RoleBadge";
import RoleDropdown from "@/components/RoleDropdown";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: Brand */}
        <div className="text-lg font-semibold text-gray-900">
          RSYS
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">
          <RoleBadge />
          <RoleDropdown />
          <ConnectWallet />
        </div>

      </div>
    </header>
  );
}
