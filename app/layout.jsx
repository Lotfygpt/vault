import './globals.css'

export const metadata = {
  title: 'LXV Vault',
  description: 'Private Collection for Elite Clients'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
