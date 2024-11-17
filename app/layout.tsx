import type {Metadata} from 'next'
import Layout from '@/components/Layout'
import './globals.css'


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
    <html lang="en">
      <body className={`w-full overflow-x-hidden font-main antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
