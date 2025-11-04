"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-[#C8A951] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center
        p-12 rounded-[40px]
        bg-[#0d0d0d]/95 border border-[#c8a951]/15 backdrop-blur-2xl
        shadow-[0_0_60px_rgba(200,169,81,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]
        w-[90%] max-w-[480px]"
      >
        {/* Reflet subtil */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="relative flex items-center justify-center w-[120px] h-[120px] mb-6"
        >
          <Image
            src="/images/logo.png"
            alt="LXV Vault"
            width={120}
            height={120}
            className="object-contain drop-shadow-[0_0_35px_rgba(200,169,81,0.5)]"
          />
        </motion.div>

        {/* Titre principal */}
        <h1 className="text-[1.9rem] font-playfair font-semibold mb-6 
          bg-gradient-to-b from-[#f9e27b] to-[#b8902f] text-transparent bg-clip-text 
          drop-shadow-[0_2px_10px_rgba(200,169,81,0.4)]">
          Bienvenue dans le LXV Vault
        </h1>

        {/* Description de luxe */}
        <div className="text-[#e1c983]/85 text-[0.95rem] leading-relaxed mb-10 max-w-[350px] space-y-4">
          <p>
            Découvrez l’univers du <span className="text-[#f5d87a] font-medium">Cercle LXV</span>.
            Accédez à un cercle privé où l’excellence horlogère et la haute maroquinerie atteignent leur plus haut niveau.
          </p>

          <p>
            Le Cercle LXV propose les meilleures répliques du marché international, toutes issues de véritables lignes de production, réalisées avec les mêmes matériaux, les mêmes techniques et les mêmes artisans que les grandes maisons qu’elles évoquent.
          </p>

          <p>
            Chaque pièce passe avec succès tous les contrôles d’authenticité et de qualité, garantissant un niveau de perfection indiscernable de l’original.
          </p>

          <p>
            Nos ateliers collaborent avec des maîtres horlogers et artisans issus des manufactures les plus prestigieuses :
            <span className="text-[#f9e27b]"> Rolex, Audemars Piguet, Patek Philippe, Richard Mille, Hermès, Louis Vuitton, Chanel, Dior, Cartier, Van Cleef & Arpels</span>, et bien d’autres encore.
          </p>

          <p>
            Un univers où le savoir-faire, la précision et la discrétion se conjuguent pour offrir à nos membres une expérience exclusive et incomparable.
          </p>
        </div>

        {/* Bouton d’accès */}
        <Link href="/password">
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 70px rgba(245,216,122,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center 
            w-[85%] py-[1.1rem] rounded-[18px]
            bg-gradient-to-b from-[#fff5b1] via-[#e4b845] to-[#b77d19]
            text-[#1a1a1a] font-semibold text-[1.05rem] tracking-wide
            border border-[#f9e99c]/70
            shadow-[inset_0_5px_10px_rgba(255,255,255,0.45),0_10px_25px_rgba(245,216,122,0.35)]
            transition-all duration-300 overflow-hidden mt-auto mb-[1.2rem]"
          >
            <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-[18px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
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
