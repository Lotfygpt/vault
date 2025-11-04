"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VaultPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-[#C8A951] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center 
        p-10 rounded-[40px]
        bg-[#0d0d0d]/95 border border-[#c8a951]/15 backdrop-blur-2xl
        shadow-[0_0_60px_rgba(200,169,81,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]
        w-[90%] max-w-[440px] min-h-[600px]"
      >
        {/* Reflet subtil */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="relative flex items-center justify-center w-[120px] h-[120px] mb-6 mt-1"
        >
          <Image
            src="/images/logo.png"
            alt="Logo LXV Vault"
            width={120}
            height={120}
            className="object-contain drop-shadow-[0_0_40px_rgba(200,169,81,0.55)]"
            priority
          />
        </motion.div>

        {/* Titre */}
        <h2
          className="text-[1.7rem] font-playfair font-semibold mb-5 
        bg-gradient-to-b from-[#f9e27b] to-[#b8902f] text-transparent bg-clip-text 
        drop-shadow-[0_2px_10px_rgba(200,169,81,0.4)]"
        >
          Accès Privé Telegram
        </h2>

        {/* Texte explicatif enrichi */}
        <div className="text-[#e1c983]/85 text-[0.95rem] leading-relaxed mb-10 max-w-[340px] mx-auto space-y-4">
          <p>
            <span className="text-[#f5d87a] font-medium">
              Rejoignez le Cercle Confidentiel LXV Vault
            </span>
            <br />
            Intégrez une communauté d’élite, réservée aux véritables
            connaisseurs du luxe authentique.
          </p>

          <p>
            Le LXV Vault vous ouvre les portes d’un univers exclusif où chaque
            montre, sac ou bijou est le fruit du savoir-faire des plus grands
            ateliers internationaux, issus de vraies lignes de production et
            fabriqués à partir de matériaux identiques à ceux des maisons
            légendaires.
          </p>

          <p>
            Découvrez des pièces d’exception signées dans l’esprit de{" "}
            <span className="text-[#f9e27b]">
              Rolex, Patek Philippe, Audemars Piguet, Hermès, Louis Vuitton,
              Chanel, Dior, Cartier, Van Cleef & Arpels
            </span>
            , et bien d’autres icônes du luxe.
          </p>

          <p>
            Toutes nos créations sont testées, contrôlées et certifiées selon
            les standards d’authenticité les plus stricts, garantissant une
            qualité et une précision irréprochables.
          </p>

          <p>
            Ici, l’excellence se partage dans la{" "}
            <span className="italic">plus absolue discrétion</span>. Chaque
            offre, chaque information, chaque interaction est pensée pour ceux
            qui recherchent le prestige, la perfection et la confidentialité
            totale.
          </p>

          <p>
            <span className="text-[#f5d87a] font-medium">
              Bienvenue dans le cercle où le luxe se vit autrement
            </span>{" "}
            — avec exigence, élégance et respect du secret.
          </p>
        </div>

        {/* === Bouton rectangulaire arrondi === */}
        <motion.a
          href="https://t.me/+rH4rK9ObH4QyY2Q0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 70px rgba(245,216,122,0.65)",
          }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center justify-center 
          w-[90%] py-[1.1rem] rounded-[18px]
          bg-gradient-to-b from-[#fff5b1] via-[#e4b845] to-[#b77d19]
          text-[#1a1a1a] font-semibold text-[1.05rem] tracking-wide
          border border-[#f9e99c]/70
          shadow-[inset_0_5px_10px_rgba(255,255,255,0.45),0_10px_25px_rgba(245,216,122,0.35)]
          transition-all duration-300 overflow-hidden mt-auto mb-[1.2rem]"
        >
          {/* Reflet supérieur fixe */}
          <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-[18px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />

          <span className="relative z-10 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            Rejoindre le Cercle Privé
          </span>

          {/* Reflet mobile */}
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

          {/* Halo diffus */}
          <div className="absolute inset-0 rounded-[18px] shadow-[0_0_60px_rgba(245,216,122,0.55)] pointer-events-none" />
        </motion.a>
      </motion.div>
    </div>
  );
}
