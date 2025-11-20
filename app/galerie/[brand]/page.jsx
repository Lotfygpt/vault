"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandPage({ params }) {
  const brandName = decodeURIComponent(params.brand);

  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/watches.json")
      .then((res) => res.json())
      .then((data) => {
        setWatches(data.filter((w) => w.brand === brandName));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur JSON :", err);
        setLoading(false);
      });
  }, [brandName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gold flex items-center justify-center">
        Chargement...
      </div>
    );
  }

  return (
    <section className="px-6 py-20 bg-black min-h-screen text-gold">

      {/* Titre */}
      <h1 className="text-4xl font-playfair text-center mb-6">
        {brandName}
      </h1>

      {/* Retour */}
      <div className="text-center mb-8">
        <Link
          href="/galerie"
          className="px-4 py-2 bg-gold text-black rounded-full hover:bg-gold/80 transition"
        >
          ← Retour à la galerie
        </Link>
      </div>

      {/* Aucun modèle */}
      {watches.length === 0 && (
        <p className="text-center text-gold/60 text-lg">
          Aucun modèle disponible pour cette marque.
        </p>
      )}

      {/* Grid montres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {watches.map((watch, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 text-center shadow-lg hover:scale-[1.02] transition"
          >
            {/* CONTAINER FIXE → Image plus géante */}
            <div className="w-full h-64 bg-black rounded flex items-center justify-center overflow-hidden">
              <Image
                src={watch.img}
                width={300}
                height={300}
                alt={watch.name}
                className="object-contain max-h-full max-w-full"
              />
            </div>

            {/* NOM */}
            <h3 className="text-lg font-semibold text-black mt-4">
              {watch.name}
            </h3>

            {/* PRIX */}
            <p className="text-black/80 font-medium mb-4">{watch.price} €</p>

            {/* BOUTON CONTACT */}
            <a
              href="https://t.me/Lxxvault"
              target="_blank"
              className="inline-block bg-gold text-black px-4 py-2 rounded-full hover:bg-gold/80 transition"
            >
              Nous contacter
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
