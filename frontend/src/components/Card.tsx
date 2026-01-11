"use client";

import { motion } from "framer-motion";

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "#12172a",
        border: "1px solid #2a2f45",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <h3 style={{ marginBottom: 12 }}>{title}</h3>
      {children}
    </motion.div>
  );
}
