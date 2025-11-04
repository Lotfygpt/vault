"use client";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.h1
      className="text-5xl md:text-6xl font-playfair text-gold tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      LXV Vault
    </motion.h1>
  );
}
