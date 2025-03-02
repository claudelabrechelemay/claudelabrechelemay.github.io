'use client'

import {
  type CarouselProps,
  Carousel,
  CarouselContent,
  // CarouselNext,
  // CarouselPrevious
} from '@/components/ui/carousel'
import {Children, cloneElement, isValidElement, PropsWithChildren, useCallback, useRef, WheelEvent} from 'react'
import Image, {type ImageProps} from '@/components/ImageSlide'

import {carouselHeight} from '@/config'
import {cn} from '@/lib/utils'

// import {useSidebar} from '@/components/ui/sidebar'

type ResponsiveCarouselProps = {
  orientation: CarouselProps["orientation"]
  loop?: boolean | undefined
  className?: string
}

export default function ResponsiveCarousel ({orientation, loop, className, children}: PropsWithChildren<ResponsiveCarouselProps>) {
  const rafId = useRef<number>(null)
  const onWheel = useCallback((event: WheelEvent) => {
    if (!event.deltaY) {
      return
    }

    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      document.documentElement.scrollLeft += event.deltaY
    })
  }, [])
  return (
    <Carousel
      orientation={orientation}
      opts={{
        dragFree: true,
        loop
      }}
      className={cn(carouselHeight, 'max-h-full [&>div]:h-full', orientation === 'vertical' ? 'pointer-events-none' : null, className)}
      onWheel={onWheel}
    >
      {/* {orientation === 'horizontal'
        ? <CarouselPrevious tabIndex={0} />
        : null
      } */}
      <CarouselContent className={orientation === 'horizontal' ? 'h-full' : ''} tabIndex={0}>
        {Children.map(children, (child, idx) => {
          if (isValidElement<ImageProps>(child) && child.type === Image) {
            return cloneElement(child, {loading: idx < 3 ? 'eager' : 'lazy'})
          }
          return child
        })}
      </CarouselContent>
      {/* {orientation === 'horizontal'
        ? <CarouselNext tabIndex={0} className={`transition-transform duration-200 ease-linear ${state === 'collapsed' ? 'translate-x-(--sidebar-width)' : ''}`} />
        : null
      } */}
    </Carousel>
  )
}