// app/layout.tsx

// Importing the type for metadata so we can define things like the page title and description
import type { Metadata } from 'next'

// Importing the Inter font from Google Fonts (Next.js auto-optimizes it)
import { Inter } from 'next/font/google'

// Importing global CSS styles, including Tailwind (from globals.css)
import './globals.css'

// Importing custom Navbar component from the components folder
import Navbar from '@/components/Navbar'

// Importing custom Navigation component for the bottom nav icons
import Navigation from '@/components/Navigation'

// Setting up the Inter font with the "latin" character set
const inter = Inter({ subsets: ['latin'] })

// Setting the default <head> metadata for every page that uses this layout
export const metadata: Metadata = {
  title: 'Omar Soliman',                 // Title that appears in the browser tab
  description: 'This is my portfolio',   // Description used by search engines
}

// This function wraps all pages in a common layout
// `children` is a special React prop — it represents the actual page content being rendered
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> {/* The root HTML tag, setting the page language */}
      <body className={inter.className}> {/* Applies the Inter font to the entire body */}

        {/* Top navigation bar shown on all pages */}
        <Navbar />

        {/* The actual content of the page (from Home, Skills, Projects, etc.) */}
        {children}

        {/* Bottom circular navigation buttons shown on all pages */}
        <Navigation />

      </body>
    </html>
  )
}
