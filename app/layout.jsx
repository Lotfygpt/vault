// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "LXV Vault",
  description: "Accès confidentiel au cercle privé LXV — Montres & Maroquinerie d’exception.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-[#C8A951] antialiased">{children}</body>
    </html>
  );
}
