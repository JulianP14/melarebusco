import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Melarebusco - Te ayudamos con tus compras',
  description: 'Sitio web que te ayuda a ver cuánto gastas en impuestos, a proyectar inflación y ver las cotizaciones de los dólares.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head><link rel='icon' href='/favicon.ico'/></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
