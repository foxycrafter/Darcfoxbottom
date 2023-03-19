import './globals.css'

export const metadata = {
  title: 'Darcfox',
  description: "Darcfox's webpage",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
