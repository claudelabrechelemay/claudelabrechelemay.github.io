'use client'

import {
  type CarouselProps,
  Carousel,
  CarouselContent,
  useCarousel
} from '@/components/ui/carousel'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import {Children, cloneElement, isValidElement, PropsWithChildren, useCallback, useRef, WheelEvent} from 'react'
import Image, {type ImageProps} from '@/components/ImageSlide'

import {carouselHeight} from '@/config'
import {cn} from '@/lib/utils'

type ResponsiveCarouselProps = {
  orientation: CarouselProps["orientation"]
  dragFree?: boolean
  loop?: boolean | undefined
  className?: string
}

export default function ResponsiveCarousel ({orientation, loop, dragFree = true,className, children}: PropsWithChildren<ResponsiveCarouselProps>) {
  return (
    <Carousel
      orientation={orientation}
      opts={{
        dragFree,
        loop
      }}
      plugins={[WheelGesturesPlugin({})]}
      className={cn(carouselHeight, 'max-h-full [&>div]:h-full', orientation === 'vertical' ? 'pointer-events-none' : null, className)}
    >
      <ResponsiveCarouselContent orientation={orientation} dragFree={dragFree}>
        {children}
      </ResponsiveCarouselContent>
    </Carousel>
  )
}

function ResponsiveCarouselContent ({orientation, dragFree, children}: PropsWithChildren<ResponsiveCarouselProps>) {
  const rafId = useRef<number>(null)
  const {api} = useCarousel()
  const onWheel = useCallback((event: WheelEvent) => {
    if (!event.deltaY) {
      return
    }

    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      if (!api) {
        return
      }
      const delta = event.deltaY || event.deltaX
      const direction = delta > 0 ? -1 : 1
      const rawForce = Math.abs(delta)
      const engine = api.internalEngine()
      engine.scrollTo.distance(direction * rawForce, !dragFree)
    })
  }, [api, dragFree])
  return (
    <CarouselContent className={orientation === 'horizontal' ? 'h-full' : ''} tabIndex={0} onWheel={onWheel}>
      {Children.map(children, (child, idx) => {
        if (isValidElement<ImageProps>(child) && child.type === Image) {
          return cloneElement(child, {loading: idx < 3 ? 'eager' : 'lazy'})
        }
        return child
      })}
    </CarouselContent>
  )
}

ResponsiveCarouselContent.displayName = 'ResponsiveCarouselContent'
