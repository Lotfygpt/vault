"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-[#C8A951] px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center
        p-8 rounded-[36px]
        bg-[#0d0d0d]/95 border border-[#c8a951]/15 backdrop-blur-2xl
        shadow-[0_0_50px_rgba(200,169,81,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]
        w-[90%] max-w-[420px]"
      >
        {/* Reflet subtil */}
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />

        {/* Logo doré imposant */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="relative flex items-center justify-center w-[160px] h-[160px] mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#f9e27b]/40 to-transparent blur-xl opacity-80 animate-pulse-slow" />
          <Image
            src="/images/logo.png"
            alt="LXV Vault"
            width={160}
            height={160}
            className="object-contain relative z-10 drop-shadow-[0_0_45px_rgba(200,169,81,0.6)]"
          />
        </motion.div>

        {/* Titre principal */}
        <h1
          className="text-[1.8rem] font-playfair font-semibold mb-5 
          bg-gradient-to-b from-[#f9e27b] to-[#b8902f] text-transparent bg-clip-text 
          drop-shadow-[0_2px_10px_rgba(200,169,81,0.4)]"
        >
          Bienvenue dans le LXV Vault
        </h1>

        {/* Description */}
        <div className="text-[#e1c983]/85 text-[0.92rem] leading-relaxed mb-8 space-y-3 max-w-[340px]">
          <p>
            Découvrez l’univers du <span className="text-[#f5d87a] font-medium">Cercle LXV</span> —
            un espace privé où excellence horlogère et maroquinerie de prestige se rencontrent.
          </p>

          <p>
            Nos ateliers reproduisent les pièces des grandes maisons avec les mêmes matériaux,
            techniques et exigences d’authenticité.
          </p>

          <p>
            Chaque création passe les contrôles les plus stricts, garantissant une perfection
            indiscernable de l’original.
          </p>

          <p>
            En collaboration avec les maîtres artisans des manufactures les plus prestigieuses :
            <span className="text-[#f9e27b]">
              {" "}
              Rolex, Audemars Piguet, Patek Philippe, Hermès, Dior
            </span>{" "}
            et bien d’autres.
          </p>
        </div>

        {/* Bouton */}
        <Link href="/galerie">
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 60px rgba(245,216,122,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center 
            w-[80%] py-[1rem] rounded-[16px]
            bg-gradient-to-b from-[#fff5b1] via-[#e4b845] to-[#b77d19]
            text-[#1a1a1a] font-semibold text-[1rem] tracking-wide
            border border-[#f9e99c]/70
            shadow-[inset_0_5px_10px_rgba(255,255,255,0.45),0_8px_20px_rgba(245,216,122,0.35)]
            transition-all duration-300 overflow-hidden mt-auto"
          >
            <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-[16px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
            <span className="relative z-10">Entrer dans le Vault</span>
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
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );	
}
