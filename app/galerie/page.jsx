"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Catégories
const brands = [
  "Rolex",
  "Patek Philippe",
  "Richard Mille",
  "Audemars Piguet",
  "Cartier",
  "Omega",
  "Hublot",
  "Tudor",
  "Vacheron Constantin",
  "IWC",
  "Panerai",
];

export default function Galerie() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/watches.json")
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gold">
        Chargement...
      </div>
    );
  }

  return (
    <section className="px-6 py-20 bg-black min-h-screen text-gold">
      {/* TITRE */}
      <h1 className="text-4xl font-playfair text-center mb-6">
        📸 Galerie des Montres
      </h1>

      {/* TEXTE INTRO */}
      <div className="max-w-3xl mx-auto text-center text-gold/80 mb-12 leading-relaxed">
        <p>
          Découvrez nos pièces d’exception actuellement disponibles au{" "}
          <b>LXV Vault</b>.
        </p>
        <p className="mt-4">
          Nous pouvons réaliser <b>n’importe quel style de montre</b> dans la
          limite des matériaux disponibles.
        </p>
        <p className="mt-4">
          Toutes nos pièces sont montées avec les{" "}
          <b>mêmes matériaux et les mêmes spécifications</b> que les modèles
          d’origine, sans aucune différence visuelle ou à l’utilisation.
        </p>

        <p className="mt-4 text-red-400">
          ⛔️ Si un modèle ne figure pas dans la galerie (présente seulement
          quelques exemples), n’hésitez pas à nous demander.
        </p>

        <p className="mt-4">
          Nous pouvons créer pour vous n’importe quelle montre, bijoux ou sac
          des maisons : <br />
          <b>
            Rolex, Patek Philippe, Richard Mille, Cartier, Audemars Piguet,
            Fred, Hermès, Tudor, Omega, Vacheron Constantin…
          </b>
        </p>
      </div>

      {/* LISTE DES CATÉGORIES */}
      <h2 className="text-2xl font-playfair text-center mb-6">
        🔍 Catégories par Marque
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {brands.map((brand, i) => (
          <Link
            key={i}
            href={`/galerie/${encodeURIComponent(brand)}`}
            className="px-4 py-2 bg-[#1a1a1a] border border-gold/40 rounded-full hover:bg-gold hover:text-black transition"
          >
            {brand}
          </Link>
        ))}
      </div>

      {/* GALERIE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl p-4 shadow-lg text-center hover:scale-[1.02] transition-transform"
          >
            {/* Disponibilité */}
            <span
              className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                watch.available ? "bg-green-600 text-white" : "bg-red-600 text-white"
              }`}
            >
              {watch.available ? "Disponible" : "Indisponible"}
            </span>

            {/* IMAGE */}
            <div className="w-full h-64 flex items-center justify-center bg-black rounded-lg overflow-hidden">
              <Image
                src={watch.img}
                width={300}
                height={300}
                alt={watch.name}
                className="object-contain max-h-full"
              />
            </div>

            {/* NOM */}
            <h3 className="text-lg font-semibold text-black mt-4">
              {watch.name}
            </h3>

            {/* PRIX */}
            <p className="text-black/80 font-medium mb-4">{watch.price} €</p>

            {/* CONTACT */}
            <a
              href="https://t.me/Lxxvault"
              target="_blank"
              className="inline-block bg-gold text-black font-semibold px-4 py-2 rounded-full hover:bg-gold/80 transition"
            >
              Nous contacter
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
