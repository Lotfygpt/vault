"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "LXV2025") {
      window.location.href = "/vault";
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-[#C8A951] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center
        p-10 rounded-[38px]
        bg-[#0d0d0d]/95 border border-[#c8a951]/15 backdrop-blur-2xl
        shadow-[0_0_60px_rgba(200,169,81,0.12),inset_0_0_12px_rgba(255,255,255,0.05)]
        w-[90%] max-w-[420px]"
      >
        <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="relative flex items-center justify-center w-[100px] h-[100px] mb-6"
        >
          <Image
            src="/images/logo.png"
            alt="Logo LXV Vault"
            width={100}
            height={100}
            className="object-contain drop-shadow-[0_0_35px_rgba(200,169,81,0.5)]"
          />
        </motion.div>

        <h2 className="text-[1.6rem] font-playfair font-semibold mb-5 
        bg-gradient-to-b from-[#f9e27b] to-[#b8902f] text-transparent bg-clip-text 
        drop-shadow-[0_2px_8px_rgba(200,169,81,0.3)]">
          Entrée Confidentielle
        </h2>

        <p className="text-[#e1c983]/85 text-[0.92rem] leading-relaxed mb-9 max-w-[330px]">
          Veuillez entrer le mot de passe pour accéder au{" "}
          <span className="text-[#f5d87a] font-medium">cercle privé du LXV Vault</span>.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-[85%] h-[52px] px-5 mb-8 rounded-[18px]
            bg-[#151515]/90 border border-[#c8a951]/35 text-[#f5e9a4]
            placeholder-[#bda85a]/65 text-center text-[1.05rem]
            focus:outline-none focus:ring-2 focus:ring-[#f5d87a]/50
            shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_0_25px_rgba(200,169,81,0.12)]
            transition-all duration-300
            hover:shadow-[0_0_30px_rgba(245,216,122,0.25)]"
          />

          {error && (
            <p className="text-red-500 text-sm mb-4 -mt-4">Mot de passe incorrect</p>
          )}

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 55px rgba(245,216,122,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center 
            w-[85%] py-[1rem] rounded-[20px]
            bg-gradient-to-b from-[#fff5b1] via-[#e4b845] to-[#b77d19]
            text-[#1a1a1a] font-semibold text-[1.05rem] tracking-wide
            border border-[#f9e99c]/60
            shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),0_8px_20px_rgba(245,216,122,0.3)]
            transition-all duration-300 overflow-hidden mt-2"
          >
            <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-[20px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />

            <span className="relative z-10 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Entrer
            </span>

            <motion.div
              initial={{ left: "-150%" }}
              animate={{ left: "150%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#fffbe6]/50 to-transparent skew-x-[25deg] opacity-70"
            />

            <div className="absolute inset-0 rounded-[20px] shadow-[0_0_45px_rgba(245,216,122,0.5)] pointer-events-none" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
