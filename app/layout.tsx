import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amor en Detalles | Regalos Artesanales para Mamá — Día de las Madres 2026',
  description: 'Regalos artesanales únicos y personalizados para el Día de las Madres en Ayacucho. Bolsos, joyeros, cajas corazón y más. Pedidos hasta el 8 de mayo. Reserva con Yape.',
  keywords: 'dia de las madres ayacucho, regalos para mama ayacucho, detalles artesanales huamanga, amor en detalles, regalos personalizados mama, cajas corazon ayacucho, bolso joyero regalo mama, regalos hechos a mano ayacucho',
  authors: [{ name: 'Amor en Detalles' }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Amor en Detalles — Regalos Artesanales para Mamá',
    description: 'Sorprende a mamá con algo único hecho a mano. Bolsos, joyeros, cajas corazón y sets personalizados. Pedidos hasta el 8 de mayo en Ayacucho.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Amor en Detalles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amor en Detalles — Regalos para Mamá',
    description: 'Detalles artesanales únicos para el Día de las Madres. Pedidos hasta el 8 de mayo.',
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
