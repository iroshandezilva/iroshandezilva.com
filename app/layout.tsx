import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Iroshan De Zilva | Digital Product Designer | Scalable Design Systems & Seamless UX Solutions',
  description:
    'Crafting intuitive digital products with scalable design systems, seamless UX, and responsive UI for SaaS, startups, and enterprise software. Let’s create something impactful together.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" ">
        <div className="relative border-x border-x-current bg-gray-50/10 bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed text-green-950/5">
          <div className="mx-auto min-h-screen max-w-5xl bg-white pt-32 text-gray-700">
            <Navbar />

            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
