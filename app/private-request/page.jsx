"use client";

import { useState } from "react";

export default function PrivateRequest() {
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return alert("Merci de décrire votre demande.");
    if (!contact.trim()) return alert("Merci de fournir un moyen de contact.");

    setSent(true);

    console.log("Nouvelle demande privée :", { message, contact });

    alert("Votre demande a été envoyée. Nous vous recontactons très vite.");
  };

  return (
    <div className="min-h-screen bg-black text-gold p-10 flex flex-col items-center">
      <h1 className="text-4xl font-playfair mb-6">Demande Privée LXV Vault</h1>

      <p className="text-center max-w-2xl text-gold/80 mb-10 leading-relaxed">
        Décrivez votre demande personnalisée : Superfranken, Ultra Clone, bijoux,
        maroquinerie ou pièce totalement unique fabriquée par l’atelier.
        <br />
        Vous recevrez ensuite un retour directement par notre équipe.
      </p>

      <div className="bg-[#111] p-8 rounded-xl border border-gold/20 w-full max-w-2xl shadow-xl">
        <label className="text-sm text-gold/80">Votre demande :</label>
        <textarea
          className="w-full mt-2 mb-6 p-4 bg-black text-white rounded-lg border border-gold/20 min-h-[150px]"
          placeholder="Expliquez votre demande en détail..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label className="text-sm text-gold/80">Votre contact (Telegram, email, etc.) :</label>
        <input
          className="w-full mt-2 mb-6 p-4 bg-black text-white rounded-lg border border-gold/20"
          placeholder="@votreTelegram ou email"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <button
          onClick={handleSend}
          disabled={sent}
          className="w-full py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/80 transition"
        >
          {sent ? "Demande envoyée ✔" : "Envoyer ma demande"}
        </button>
      </div>
    </div>
  );
}
