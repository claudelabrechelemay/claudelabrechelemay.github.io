import type {Metadata, Viewport} from 'next'
import Layout from '@/components/Layout'
import './globals.css'
import {Locales} from '@/config'

export const metadata: Metadata = {
  title: 'Claude Labrèche-Lemay',
  description: ''
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={Locales.EN}>
      <body className={`w-full font-main antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
