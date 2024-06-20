import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import Head from 'next/head'

const chicago = localFont({ src: '../fonts/chicago.ttf' })

export const metadata: Metadata = {
  title: 'clayzone',
  description: ':)',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✈️</text></svg>',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
      </Head>
      <body className={chicago.className}>{children}</body>
    </html>
  )
}
