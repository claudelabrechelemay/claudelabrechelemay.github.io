import type {PropsWithChildren} from 'react'

import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar'

import {Menu} from '@/components/Menu'

export type LayoutProps = PropsWithChildren<{
  children: React.ReactNode
}>

export default function Layout ({children}: LayoutProps) {
  return (
    <SidebarProvider>
      <Menu />
      <SidebarInset className={`w-full md:justify-center data-[state=open]:md:max-w-[calc(100vw-var(--sidebar-width))] pt-20 px-0`}>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

Layout.displayName = 'Layout'
