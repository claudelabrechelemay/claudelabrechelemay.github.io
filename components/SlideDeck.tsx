'use client'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {type PropsWithChildren} from 'react'
import {useIsMobile} from '@/hooks/use-mobile'
import {useSidebar} from './ui/sidebar'

import {carouselHeight} from '@/config'
import {cn} from '@/lib/utils'

export type SlideDeckProps = {
  loop?: boolean
}

export default function SlideDeck ({children, loop = false}: PropsWithChildren<SlideDeckProps>) {
  const isMobile = useIsMobile()
  const {state} = useSidebar()
  return (
    <Carousel orientation={isMobile ? 'vertical' : 'horizontal'} opts={{
      skipSnaps: true,
      loop
    }} className={cn(carouselHeight, 'max-h-full [&>div]:h-full')}>
      <CarouselContent className='h-full'>
        {children}
      </CarouselContent>
      {!isMobile
        ? (
          <>
            <CarouselPrevious />
            <CarouselNext className={`transition-transform duration-200 ease-linear ${state === 'collapsed' ? 'translate-x-[--sidebar-width]' : ''}`} />
          </>
        )
        : null
      }
    </Carousel>
  )
}
