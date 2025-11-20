"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [authChecked, setAuthChecked] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [watches, setWatches] = useState([]);

  const router = useRouter();

  // 🔐 Vérification admin + chargement JSON dans un seul useEffect stable
  useEffect(() => {
    async function init() {
      // 1) Vérifier l'authentification
      const res = await fetch("/api/check-admin");

      if (!res.ok) {
        setAuthorized(false);
        setAuthChecked(true);
        router.push("/admin/login");
        return;
      }

      setAuthorized(true);
      setAuthChecked(true);

      // 2) Charger les montres
      const json = await fetch("/watches.json").then((r) => r.json());
      setWatches(json);
    }

    init();
  }, [router]);

  // Tant qu’on ne sait pas si on est admin
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-black text-gold flex items-center justify-center">
        Vérification...
      </div>
    );
  }

  // Supprimer une montre
  const deleteWatch = async (id) => {
    if (!confirm("Supprimer cette montre ?")) return;

    await fetch("/api/delete-watch", {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    setWatches(watches.filter((w) => w.id !== id));
  };

  // Logout
  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-black text-gold p-10">

      {/* Logout toujours visible */}
      <button
        onClick={logout}
        className="fixed top-5 right-5 px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700"
      >
        Logout
      </button>

      <h1 className="text-3xl mb-6 font-playfair">Panel Admin</h1>

      <Link
        href="/admin/add"
        className="px-4 py-2 bg-gold text-black rounded"
      >
        ➕ Ajouter une montre
      </Link>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {watches.map((w) => (
          <div key={w.id} className="p-4 bg-[#111] rounded-xl border border-gold/40">
            <img src={w.img} className="h-40 mx-auto mb-4 object-cover" />

            <h3 className="text-xl">{w.name}</h3>
            <p className="text-gold/70">{w.brand}</p>
            <p className="text-lg">{w.price} €</p>

            <div className="flex gap-3 mt-4">
              <Link
                href={`/admin/edit/${w.id}`}
                className="px-3 py-1 bg-blue-500 rounded text-white text-sm"
              >
                Modifier
              </Link>

              <button
                onClick={() => deleteWatch(w.id)}
                className="px-3 py-1 bg-red-600 rounded text-white text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
