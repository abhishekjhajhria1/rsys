"use client";

import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { usdcAbi } from "@/lib/abis/usdc";
import { MOCK_USDC_ADDRESS } from "@/lib/contracts";

export default function DashboardPage() {
  const { address } = useAccount();

  const { data: usdcBalance } = useReadContract({
    address: MOCK_USDC_ADDRESS as `0x${string}`,
    abi: usdcAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const formattedBalance = usdcBalance
    ? Number(formatUnits(usdcBalance as bigint, 6)).toFixed(2)
    : null;

  return (
    <main className="bg-(--bg) min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="border-b border-(--border) bg-(--card)">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold">
            Relief System Dashboard
          </h1>
          <p className="text-(--muted) mt-1">
            Live overview of funds, beneficiaries, and system activity
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          [formattedBalance ? `$${formattedBalance}` : "—", "Your USDC Balance"],
          ["$930,500", "Funds Distributed"],
          ["1,248", "Verified Beneficiaries"],
          ["37", "Blocked Transactions"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-(--card) border border-(--border) rounded-xl p-6"
          >
            <div className="text-2xl font-semibold">{value}</div>
            <div className="text-sm text-(--muted) mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* ================= SYSTEM STATUS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-(--card) border border-(--border) rounded-xl p-6">
          <h2 className="font-semibold mb-4">
            System Status
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-(--success)">●</span>
              Smart Contracts Active
            </div>
            <div className="flex items-center gap-2">
              <span className="text-(--success)">●</span>
              Category Controls Enforced
            </div>
            <div className="flex items-center gap-2">
              <span className="text-(--success)">●</span>
              Public Audit Enabled
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="bg-(--card) border border-(--border) rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-(--bg) border-b border-(--border) text-(--muted)">
              <tr>
                <th className="text-left px-4 py-3">Time</th>
                <th className="text-left px-4 py-3">Wallet</th>
                <th className="text-left px-4 py-3">Action</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-(--border)">
                <td className="px-4 py-3">10:42</td>
                <td className="px-4 py-3">0x9c…21a</td>
                <td className="px-4 py-3">Alcohol Purchase</td>
                <td className="px-4 py-3">$12.00</td>
                <td className="px-4 py-3 text-red-600">Blocked</td>
              </tr>
              <tr className="border-b border-(--border)">
                <td className="px-4 py-3">10:40</td>
                <td className="px-4 py-3">0x8a…92f</td>
                <td className="px-4 py-3">Food Purchase</td>
                <td className="px-4 py-3">$2.50</td>
                <td className="px-4 py-3 text-(--success)">Allowed</td>
              </tr>
              <tr>
                <td className="px-4 py-3">10:32</td>
                <td className="px-4 py-3">0x31…aa9</td>
                <td className="px-4 py-3">Medical Supplies</td>
                <td className="px-4 py-3">$54.00</td>
                <td className="px-4 py-3 text-(--success)">Allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= QUICK ACTIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-(--card) border border-(--border) rounded-xl p-6">
            <h3 className="font-semibold mb-2">Public Transparency</h3>
            <p className="text-sm text-(--muted) mb-4">
              View the full on-chain audit trail.
            </p>
            <a
              href="/audit"
              className="text-sm text-(--primary) font-medium"
            >
              View Audit →
            </a>
          </div>

          <div className="bg-(--card) border border-(--border) rounded-xl p-6">
            <h3 className="font-semibold mb-2">Admin Controls</h3>
            <p className="text-sm text-(--muted) mb-4">
              Manage beneficiaries and spending rules.
            </p>
            <a
              href="/panel/admin"
              className="text-sm text-(--primary) font-medium"
            >
              Go to Admin →
            </a>
          </div>

          <div className="bg-(--card) border border-(--border) rounded-xl p-6">
            <h3 className="font-semibold mb-2">System Policies</h3>
            <p className="text-sm text-(--muted) mb-4">
              Review enforced spending categories.
            </p>
            <a
              href="/policies"
              className="text-sm text-(--primary) font-medium"
            >
              View Policies →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
