"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWatch() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const res = await fetch("/api/add-watch", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (data.message) {
      setMessage(data.message);
      setTimeout(() => router.push("/admin"), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gold p-10">
      <h1 className="text-3xl font-playfair mb-8">Ajouter une Montre</h1>

      {message && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded">{message}</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#111] p-6 rounded-xl border border-gold/30 space-y-4"
      >
        <input
          name="brand"
          placeholder="Marque (ex: Rolex)"
          required
          className="w-full p-3 bg-black text-white rounded border border-gold/20"
        />

        <input
          name="name"
          placeholder="Nom du modèle"
          required
          className="w-full p-3 bg-black text-white rounded border border-gold/20"
        />

        <input
          name="price"
          type="number"
          placeholder="Prix (€)"
          required
          className="w-full p-3 bg-black text-white rounded border border-gold/20"
        />

        <select
          name="available"
          className="w-full p-3 bg-black text-white rounded border border-gold/20"
        >
          <option value="true">Disponible</option>
          <option value="false">En cours</option>
        </select>

        <input
          name="image"
          type="file"
          required
          className="w-full p-3 bg-black text-white rounded border border-gold/20"
        />

        <button
          type="submit"
          className="w-full bg-gold text-black p-3 rounded font-semibold hover:bg-gold/80"
        >
          ➕ Ajouter la montre
        </button>
      </form>
    </div>
  );
}
