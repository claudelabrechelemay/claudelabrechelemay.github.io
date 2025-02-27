'use client'

import {
  type CarouselProps,
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {Children, cloneElement, isValidElement, PropsWithChildren} from 'react'
import Image, {type ImageProps} from '@/components/ImageSlide'

import {carouselHeight} from '@/config'
import {cn} from '@/lib/utils'

import {useIsMobile} from '@/hooks/use-mobile'
import {useSidebar} from '@/components/ui/sidebar'

type ResponsiveCarouselProps = {
  orientation: CarouselProps["orientation"]
  loop?: boolean | undefined
  className?: string
}

export default function ResponsiveCarousel ({ orientation, loop, className, children }: PropsWithChildren<ResponsiveCarouselProps>) {
  const isMobile = useIsMobile()
  const {state} = useSidebar()
  return (
    <Carousel orientation={orientation} opts={{
      dragFree: true,
      loop
    }} className={cn(carouselHeight, 'max-h-full [&>div]:h-full', className)}>
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