import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/nav'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nylas - Modern Email, Calendar, and Contacts APIs',
  description: 'Build sophisticated communication features with our unified APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-black pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
