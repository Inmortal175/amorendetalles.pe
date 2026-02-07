import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Detalles Artesanales San Valentín 2025 | Regalos Personalizados',
  description: 'Detalles artesanales únicos hechos a mano para el Día del Amor y la Amistad. Personaliza tu regalo perfecto este 14 de febrero.',
  keywords: 'san valentin, regalos personalizados, detalles artesanales, 14 de febrero, regalos hechos a mano',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Detalles Artesanales San Valentín 2025',
    description: 'Regala algo único este 14 de febrero. Detalles hechos a mano y personalizados.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
