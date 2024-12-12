'use client'

import type {PropsWithChildren} from 'react'

import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar'

import {Menu} from '@/components/Menu'
import {useIsMobile} from '@/hooks/use-mobile'

export type LayoutProps = PropsWithChildren<{
  children: React.ReactNode
}>

export default function Layout ({children}: LayoutProps) {
  const isMobile = useIsMobile()
  return (
    <SidebarProvider>
      <Menu />
      <SidebarInset className={`md:justify-center md:max-w-[calc(100vw-var(--sidebar-width))] pt-20 ${isMobile ? 'px-0' : 'px-20'}`}>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
