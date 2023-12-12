import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Dancing_Script, Barlow, Italianno, Playfair_Display , Roboto} from 'next/font/google'
import ContextComponent from '../context/ContextComponent'
import { Suspense } from 'react'
import Loading from './loading'


const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: '400'
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',

});

const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: '200'
});
const italianno = Italianno({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
  weight: '400'
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})



export const metadata: Metadata = {
  title: 'SpareOom Ltd  Company Overview',
  description: 'Discover SpareOom Ltd, a leading company providing exceptional services and solutions. Choose SpareOom for excellence in designing houses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${dancingScript.variable} ${barlow.variable} ${italianno.variable} ${roboto.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ContextComponent>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ContextComponent>
      </body>
    </html>
  )
}
