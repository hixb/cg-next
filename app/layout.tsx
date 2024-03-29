import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import '@/styles/tailwind.scss'
import '@arco-design/web-react/dist/css/arco.css'
import React from 'react'
import { Providers } from '@/app/providers'

const barlow = Barlow({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
