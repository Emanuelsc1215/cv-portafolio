import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Emanuel Sanchez Cano | Desarrollador Full Stack',
  description:
    'Portafolio profesional de Emanuel Sanchez Cano. Desarrollador Full Stack apasionado por crear soluciones escalables con Next.js, React, NestJS y TypeScript.',
  keywords: [
    'Desarrollador Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'NestJS',
    'Microservicios',
    'Firebase',
    'Node.js',
  ],
  authors: [{ name: 'Emanuel Sanchez Cano' }],
  openGraph: {
    title: 'Emanuel Sanchez Cano | Desarrollador Full Stack',
    description:
      'Portafolio profesional de Emanuel Sanchez Cano. Desarrollador Full Stack apasionado por crear soluciones escalables.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
