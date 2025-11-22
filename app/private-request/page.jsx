use client;

import { useState } from react;

export default function PrivateRequest() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const sendRequest = async (e) = {
    e.preventDefault();
    setLoading(true);
    setError();
    setSuccess();

    const form = new FormData(e.target);

    const res = await fetch(apiprivate-request, {
      method POST,
      body form,
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(Votre demande a bien été envoyée. Nous vous répondrons sous 24h.);
      e.target.reset();
    } else {
      setError(data.error  Erreur lors de l’envoi. Réessayez.);
    }

    setLoading(false);
  };

  return (
    div className=min-h-screen bg-black text-gold px-6 py-16
      h1 className=text-4xl font-playfair text-center mb-12
        Demande Privée – LXV Vault
      h1

      form
        onSubmit={sendRequest}
        className=max-w-xl mx-auto bg-[#111] p-8 rounded-xl border border-gold20 space-y-6
      
        {success && p className=text-green-400 text-center{success}p}
        {error && p className=text-red-400 text-center{error}p}

        div
          label className=block mb-1Nom completlabel
          input
            name=name
            required
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        div
          label className=block mb-1Contact (Telegram, WhatsApp, email…)label
          input
            name=contact
            required
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        div
          label className=block mb-1Modèle recherchélabel
          input
            name=model
            placeholder=Ex  Rolex Daytona Ice Blue 116506
            required
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        div
          label className=block mb-1Budgetlabel
          input
            name=budget
            type=number
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        div
          label className=block mb-1Détails  demandes spécialeslabel
          textarea
            name=details
            rows=4
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        div
          label className=block mb-1Photo du modèle (optionnel)label
          input
            type=file
            name=image
            accept=image
            className=w-full p-3 bg-black text-white rounded border border-gold20
          
        div

        button
          disabled={loading}
          className=w-full py-3 bg-gold text-black rounded font-semibold hoverbg-gold80 transition
        
          {loading  Envoi...  Envoyer la demande}
        button
      form
    div
  );
}
