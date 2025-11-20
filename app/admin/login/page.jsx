"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password })
    });

    if (res.ok) window.location.href = "/admin";
    else alert("Mot de passe incorrect");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={submit} className="bg-[#111] p-8 rounded-xl text-gold">
        <h1 className="text-2xl mb-4 text-center">Admin Login</h1>

        <input
          type="password"
          placeholder="Mot de passe"
          className="text-black w-full p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-gold text-black px-4 py-2 rounded-full w-full">
          Se connecter
        </button>
      </form>
    </div>
  );
}
