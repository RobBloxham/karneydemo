import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Karney Plumbing | Professional Plumbing Services in Tulsa, OK',
  description: 'Family-owned plumbing company serving Tulsa, OK. Expert repairs, installations, and emergency plumbing services.',
  keywords: 'plumbing, Tulsa, Oklahoma, plumber, emergency plumbing, plumbing repair',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#E31E24',
  openGraph: {
    title: 'Karney Plumbing | Professional Plumbing Services in Tulsa, OK',
    description: 'Family-owned plumbing company serving Tulsa, OK. Expert repairs, installations, and emergency plumbing services.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

