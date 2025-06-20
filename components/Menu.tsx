'use client'

import Markdown from 'react-markdown'

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
  useSidebar,
  SidebarMenuAction
} from '@/components/ui/sidebar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import {SiFacebook, SiX, SiTumblr, SiPinterest, SiBuymeacoffee} from '@icons-pack/react-simple-icons'
import {Menu as ToggleIcon, X as CloseIcon} from "lucide-react"

import groups from '@/nav/groups'
import {Button} from './ui/button'
import {useIsMobile} from '@/hooks/use-mobile'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import {useCallback, useEffect} from 'react'
import Link from 'next/link'

const basePath = 'https://www.claudelabrechelemay.com'

export function Menu () {
  const pathname = usePathname()
  const encodedUrl = encodeURI(`${basePath}${pathname}`)
  const isMobile = useIsMobile()
  const {open, setOpen, toggleSidebar} = useSidebar()

  function isActivePage (slug: string) {
    return pathname.endsWith(slug)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleSidebar()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [toggleSidebar])

  function onFocus () {
    if (!open) {
      setOpen(true)
    }
  }

  const closeSidebarOnMobile = useCallback(() => {
    if (isMobile && open) {
      toggleSidebar()
    }
  }, [isMobile, open, toggleSidebar])

  return (
    <>
      <Toggle />
      <Sidebar variant='floating' onFocus={onFocus}>
        <SidebarHeader className='font-sidebarHeader text-2xl'>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className='h-16 hover:bg-sidebar' asChild>
                <h1>
                  <Link href='/' onClick={closeSidebarOnMobile}>Claude{<br />}Labrèche-Lemay</Link>
                </h1>
              </SidebarMenuButton>
              <SidebarMenuAction asChild>
                <SidebarTrigger className='text-muted-foreground py-5 px-2 mt-2 cursor-w-resize'>
                  <CloseIcon />
                </SidebarTrigger>
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className='h-full font-sidebar text-sm'>
          {groups.map(({label, slug, items}) => {
            return (
              <SidebarGroup key={items[0].slug}>
                {label ? (
                  <SidebarGroupLabel className='text-foreground uppercase px-0'>
                    <SidebarMenuButton asChild>
                      {slug ? (
                        <Link href={slug} onClick={closeSidebarOnMobile} className={slug && isActivePage(slug) ? 'font-bold' : ''}>
                          <span>{label.en}</span>
                        </Link>
                      ) : (
                        <span>{label.en}</span>
                      )}
                    </SidebarMenuButton>
                  </SidebarGroupLabel>
                ) : null}
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map(({title, slug}) => {
                      return (
                        <SidebarMenuItem key={title.en}>
                          <SidebarMenuButton asChild>
                            <Link href={slug} onClick={closeSidebarOnMobile} className={`h-auto ${slug && isActivePage(slug) ? 'font-bold' : ''}`} title={title.en || ''}>
                              <span className='pl-1.5 -indent-1.5'>
                                <Markdown
                                  components={{
                                    p: ({children}) => <>{children}</>,
                                  }}
                                >{title.en}</Markdown>
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )
          })}
        </SidebarContent>
        <SidebarFooter className='text-xs'>
          <SidebarMenu className='font-sidebarSocials'>
            <SidebarMenuItem>
              <Popover>
                <PopoverTrigger className='font-bold ml-2 hover:underline focus:underline'>
                  Share
                </PopoverTrigger>
                <PopoverContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target='_blank'><SiFacebook /> Share to Facebook</Link>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <Link href={`https://twitter.com/intent/tweet?url=${encodedUrl}`} target='_blank'><SiX /> Share to X</Link>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <Link href={`https://www.tumblr.com/widgets/share/tool?posttype=link&amp;canonicalUrl=${encodedUrl}`} target='_blank'><SiTumblr /> Share to Tumblr</Link>
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button asChild variant='ghost'>
                        <Link href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}`} target='_blank'><SiPinterest /> Share to Pinterest</Link>
                      </Button>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </PopoverContent>
              </Popover>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button asChild variant='ghost' className='text-xs font-bold -ml-2 hover:underline focus:underline'>
                <Link href='https://www.buymeacoffee.com/claudelabrechelemay' target='_blank'><SiBuymeacoffee /> Buy me a coffee</Link>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroupLabel asChild className='text-sidebar-foreground'>
            <p>
              Copyright © Claude Labrèche-Lemay<br />
              2025; All rights reserved.
            </p>
          </SidebarGroupLabel>
        </SidebarFooter>
        {!isMobile
          ? <SidebarRail
            className={cn(
              'w-14',
              'group-data-[side=left]:-right-14',
              '[[data-side=left][data-collapsible=offcanvas]_&]:-right-14'
            )}
          />
          : null
        }
      </Sidebar>
    </>
  )
}

Menu.displayName = 'Menu'

export function Toggle () {
  const isMobile = useIsMobile()
  const {openMobile, open} = useSidebar()
  const isOpen = (isMobile && openMobile) || (!isMobile && open)
  const hideTrigger = isOpen
    ? 'z-0 opacity-0 pointer-events-none'
    : 'z-10 opacity-100'
  return <>
    <SidebarTrigger className={`text-gray-500 ${hideTrigger} scale-150 p-5 absolute top-0 left-0 mt-8 ml-2 transition-[opacity] ease-linear cursor-e-resize`}>
      <ToggleIcon />
    </SidebarTrigger>
  </>
}

Toggle.displayName = 'Toggle'
