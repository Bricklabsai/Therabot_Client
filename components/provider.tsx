"use client";

import { motion } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
