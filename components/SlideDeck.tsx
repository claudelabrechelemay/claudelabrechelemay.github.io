'use client'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {Children, cloneElement, isValidElement, type PropsWithChildren} from 'react'
import Image, {type ImageProps} from '@/components/ImageSlide'
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
      dragFree: true,
      loop
    }} className={cn(carouselHeight, 'max-h-full [&>div]:h-full')}>
      <CarouselContent className='h-full'>
        {Children.map(children, (child, idx) => {
          if (isValidElement<ImageProps>(child) && child.type === Image) {
            return cloneElement(child, {loading: idx < 3 ? 'eager' : 'lazy'})
          }
          return child
        })}
      </CarouselContent>
      {!isMobile
        ? (
          <>
            <CarouselPrevious />
            <CarouselNext className={`transition-transform duration-200 ease-linear ${state === 'collapsed' ? 'translate-x-(--sidebar-width)' : ''}`} />
          </>
        )
        : null
      }
    </Carousel>
  )
}

SlideDeck.displayName = 'SlideDeck'
