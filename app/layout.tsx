import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import './globals.css'
import {Locales} from '@/config'


export const metadata: Metadata = {
  title: 'Claude Labrèche-Lemay',
  description: '',
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={Locales.EN}>
      <body className={`w-full overflow-x-hidden font-main antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
