"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SuperFrankenModelPage() {
  const { model } = useParams();
  const [images, setImages] = useState([]);

  // Formater le titre propre
  const formattedTitle = decodeURIComponent(model)
    .replace(/-/g, " ") // remplace tirets par espaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // majuscules au début des mots

  useEffect(() => {
    fetch(`/api/superfranken-images?folder=${model}`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [model]);

  return (
    <div className="min-h-screen bg-black text-gold px-6 py-12">

      {/* TITRE FORMATTÉ */}
      <h1 className="text-4xl text-center font-playfair mb-2">
        {formattedTitle}
      </h1>

      <p className="text-center text-gold/60 mb-10 text-lg">
        SuperFranken – LXV Vault
      </p>

      {/* GALERIE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-gold/20 bg-[#0e0e0e]"
          >
            <img
              src={img}
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* BOUTON CONTACT */}
      <div className="text-center mt-12">
        <a
          href="https://t.me/Lxxvault"
          target="_blank"
          className="px-6 py-3 bg-gold text-black rounded-full font-semibold hover:bg-gold/80 transition"
        >
          📩 Contact direct Telegram
        </a>
      </div>
    </div>
  );
}
