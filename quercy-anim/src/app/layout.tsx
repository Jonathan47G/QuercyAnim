import type { Metadata } from 'next'
import { Playfair} from 'next/font/google'
import './globals.css'

const playfair = Playfair({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`max-w-[2000px] m-auto bg-iris-Background-1 ${playfair.className}`} lang="fr">
      
      <body className='bg-iris-Background-2'>{children}</body>
      
    </html>
  )
}
