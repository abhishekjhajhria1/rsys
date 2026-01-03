"use client";

import { useRole } from "@/lib/useRole";

export default function RoleDropdown() {
  const role = useRole();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <select
      className="border rounded px-3 py-2 text-sm bg-white"
      defaultValue=""
      onChange={(e) => {
        if (e.target.value === "volunteer") scrollTo("volunteer-panel");
        if (e.target.value === "admin") scrollTo("admin-panel");
      }}
    >
      <option value="" disabled>
        Access Dashboards
      </option>

      <option value="donor">Donor View</option>

      <option value="volunteer" disabled={role !== "volunteer"}>
        Volunteer Panel {role !== "volunteer" ? "(Restricted)" : ""}
      </option>

      <option value="admin" disabled={role !== "admin"}>
        Admin Panel {role !== "admin" ? "(Restricted)" : ""}
      </option>
    </select>
  );
}
