"use client";

import { motion } from "framer-motion";

const watches = [
  {
    name: "Daytona Ice Blue 116506 ",
    img: "/montres/Daytona Ice Blue 116506.jpeg",
    price: "1700 €",
    available: true,
  },
  {
    name: "Richard Mille RM 67-02",
    img: "/montres/RM02.jpeg",
    price: "7600 €",
    available: true,
  },
  {
    name: "Patek Philippe Nautilus 5711A ",
    img: "/montres/Patek nautilus.jpg",
    price: "1750 €",
    available: true,
  },
  {
    name: "Rolex Submariner 126610LN",
    img: "/montres/encours.png",
    price: "990 €",
    available: false,
  },
  {
    name: "Patek Philippe Nautilus 5711",
    img: "/montres/encours.png",
    price: "1400 €",
    available: false,
  },
  {
    name: "Rolex GMT Batman 126710BLNR",
    img: "/montres/encours.png",
    price: "1050 €",
    available: false,
  },
];

export default function Galerie() {
  return (
    <motion.section
      className="px-6 py-20 bg-black min-h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-playfair text-center text-gold mb-2">
        📸 Galerie des Montres Disponibles
      </h2>

      <p className="text-center text-gold/80 mb-10">
        Découvrez nos pièces d’exception actuellement disponibles au <b>LXV Vault</b>.
      </p>

      {/* 🔥 TEXTE AJOUTÉ — EXACTEMENT COMME DEMANDÉ */}
      <div className="text-center text-gold/80 max-w-2xl mx-auto mb-12 space-y-3">
        <p>
          Nous pouvons réaliser n’importe quel style de montre dans la limite des matériaux disponibles.
        </p>

        <p>
          Toutes nos pièces sont montées avec les mêmes matériaux et les mêmes spécifications que les modèles d’origine,  
          sans aucune différence visuelle ou d’utilisation.
        </p>

        <p>
          ⛔️Si un modèle ne figure pas dans la galerie (qui présente seulement quelques exemples),  
          n’hésitez pas à nous demander.
        </p>

        <p>
          Nous pouvons créer pour vous n’importe quel montre/bijoux/sacs Rolex,Patek Philipe,Richard Miles,Cartier,Audmars Piguet,Fred,hermess,Tudors,Omega
        </p>

        <a
          href="https://t.me/Lxxvault"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 mt-3 bg-gold text-black font-semibold rounded-full 
          hover:bg-gold/80 transition shadow-[0_0_25px_rgba(200,169,81,0.3)]"
        >
          📩 Contactez-nous sur Telegram
        </a>
      </div>
      {/* 🔥 FIN DU TEXTE AJOUTÉ */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {watches.map((watch, idx) => (
          <motion.div
            key={idx}
            className="
              bg-white rounded-xl overflow-hidden shadow-lg 
              transition cursor-pointer group relative
            "
            whileHover={{ scale: 1.03 }}
          >
            {/* EFFET HOVER LUXE (Glow doré façon Rolex) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl"
                 style={{ boxShadow: "0 0 35px rgba(200,169,81,0.4)" }}></div>

            {/* BADGE DISPONIBILITÉ */}
            <span
              className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full z-20 ${
                watch.available ? "bg-green-500 text-white" : "bg-red-600 text-white"
              }`}
            >
              {watch.available ? "Disponible j+21 " : "En Cours"}
            </span>

            {/* IMAGE NON CROP — PREMIUM */}
            <div className="w-full h-64 bg-black flex items-center justify-center rounded-t-xl">
              <img
                src={watch.img}
                alt={watch.name}
                className="max-h-full max-w-full object-contain p-2 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* NOM + PRIX + BOUTON */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gold mb-2">
                {watch.name}
              </h3>

              {/* PRIX */}
              <p className="text-lg text-gold/80 mb-3 font-medium">{watch.price}</p>

              {/* LIEN TELEGRAM */}
              <a
                href="https://t.me/Lxxvault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gold text-black font-medium rounded-full hover:bg-gold/80 transition"
              >
                Contactez nous
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
