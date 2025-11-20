"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditWatch({ params }) {
  const router = useRouter();
  const watchId = Number(params.id);
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    fetch("/watches.json")
      .then(res => res.json())
      .then(data => setWatch(data.find(w => w.id === watchId)));
  }, [watchId]);

  const save = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append("id", watchId);

    await fetch("/api/edit-watch", {
      method: "POST",
      body: form
    });

    router.push("/admin");
  };

  if (!watch) return <div className="text-white p-10">Chargement…</div>;

  return (
    <div className="p-10 bg-black text-gold min-h-screen">
      <h1 className="text-3xl mb-6">Modifier {watch.name}</h1>

      <form onSubmit={save} className="space-y-4 max-w-xl">

        <input name="brand" defaultValue={watch.brand}
          className="w-full p-2 rounded bg-gray-900 text-white" />

        <input name="name" defaultValue={watch.name}
          className="w-full p-2 rounded bg-gray-900 text-white" />

        <input name="price" defaultValue={watch.price} type="number"
          className="w-full p-2 rounded bg-gray-900 text-white" />

        <select name="available" defaultValue={watch.available}
          className="w-full p-2 rounded bg-gray-900 text-white">
          <option value="true">Disponible</option>
          <option value="false">En cours</option>
        </select>

        <img src={watch.img} className="w-40 rounded" />

        <input type="file" name="image"
          className="w-full p-2 rounded bg-gray-900 text-white" />

        <button className="px-4 py-2 bg-gold text-black rounded">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
