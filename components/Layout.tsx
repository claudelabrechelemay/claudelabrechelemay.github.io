'use client'

import type {PropsWithChildren} from 'react'

import {SidebarInset, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import {useIsMobile} from '@/hooks/use-mobile'

import {AppSidebar} from '@/components/app-sidebar'

export type LayoutProps = PropsWithChildren<{
  children: React.ReactNode
}>

export default function Layout ({children}: LayoutProps) {
  const isMobile = useIsMobile()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="justify-center px-20">
        {isMobile ? <SidebarTrigger className='-translate-x-11' /> : null}
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
