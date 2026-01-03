"use client";

import { useRole } from "@/lib/useRole";

export default function RoleBadge() {
  const role = useRole();

  const colors: Record<string, string> = {
    admin: "bg-red-600",
    volunteer: "bg-blue-600",
    victim: "bg-green-600",
    public: "bg-gray-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded text-white text-sm ${colors[role]}`}
    >
      Role: {role.toUpperCase()}
    </span>
  );
}
