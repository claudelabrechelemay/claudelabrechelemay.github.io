'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import {SiFacebook, SiX, SiTumblr, SiPinterest} from '@icons-pack/react-simple-icons'

import groups from '@/nav/groups'
import {Button} from './ui/button'
import {useIsMobile} from '@/hooks/use-mobile'

export function Toggle () {
  const isMobile = useIsMobile()
  const {openMobile} = useSidebar()
  const translateTrigger = (isMobile ? openMobile : false)
    ? 'translate-x-[--sidebar-width-mobile]'
    : 'translate-x-0'
  return <>
    <SidebarTrigger className={`text-gray-500 ${translateTrigger} z-10 scale-150 transition-transform duration-500 md:-translate-x-20`} />
  </>
}

export function Menu () {
  const isMobile = useIsMobile()
  return (
    <Sidebar variant='floating'>
      <SidebarHeader className='font-sidebarHeader'>
        <SidebarMenuButton className='h-16 text-2xl' asChild>
          <h1>
            <a href='/'>Claude{<br />}Labrèche-Lemay</a>
          </h1>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className='h-full font-sidebar text-sm'>
        {groups.map(({label, items}) => (
          <SidebarGroup key={items[0].slug}>
            {label ? (
              <SidebarGroupLabel className='text-foreground'>
                <SidebarMenuButton asChild>
                  <a href={label.en}>
                    <span>{label.en}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarGroupLabel>
            ) : null}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(({title, slug}) => (
                  <SidebarMenuItem key={title.en}>
                    <SidebarMenuButton asChild>
                      <a href={slug}>
                        <span>{title.en}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className='text-xs'>
        <SidebarMenu className='font-sidebarSocials'>
          <SidebarMenuItem>
            <Popover>
              <PopoverTrigger>
                <b>Share</b>
              </PopoverTrigger>
              <PopoverContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Button asChild variant='ghost'>
                      <a href=''><SiFacebook /> Share to Facebook</a>
                    </Button>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Button asChild variant='ghost'>
                      <a href=''><SiX /> Share to X</a>
                    </Button>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Button asChild variant='ghost'>
                      <a href=''><SiTumblr /> Share to Tumblr</a>
                    </Button>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Button asChild variant='ghost'>
                      <a href=''><SiPinterest /> Share to Pinterest</a>
                    </Button>
                  </SidebarMenuItem>
                </SidebarMenu>
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroupLabel asChild className='text-sidebar-foreground'>
          <p>
            Copyright © Claude Labrèche-Lemay<br />
            2019; All rights reserved.
          </p>
        </SidebarGroupLabel>
      </SidebarFooter>
      {!isMobile ? <SidebarRail /> : null}
    </Sidebar>
  )
}
