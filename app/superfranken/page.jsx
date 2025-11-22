"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuperFrankenCatalog() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("/api/superfranken-folders")
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-gold px-6 py-12">
      <h1 className="text-center text-4xl font-playfair mb-10">
        SuperFranken – LXV Vault
      </h1>

      <p className="text-center text-gold/70 max-w-2xl mx-auto mb-12">
        Découvrez nos pièces SuperFranken : réalisées avec des composants authentiques,
        elles représentent le sommet de notre atelier LXV Vault.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {models.map((m, i) => (
          <Link
            key={i}
            href={`/superfranken/${m.name}`}
            className="bg-[#111] border border-gold/20 p-6 rounded-xl hover:scale-105 transition block"
          >
            <h3 className="text-xl font-semibold capitalize mb-3 text-center">
              {m.name.replace(/-/g, " ")}
            </h3>

            <img
              src={m.thumb}
              className="w-full h-64 object-cover rounded-lg"
              alt={m.name}
            />

            <div className="text-center mt-4">
              <span className="px-4 py-2 bg-gold text-black rounded-full">
                Voir les photos
              </span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
