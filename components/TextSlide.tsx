'use client'

import {useCallback, useEffect, useRef, useState, type PropsWithChildren, type WheelEvent} from 'react'
import {CarouselItem} from '@/components/ui/carousel'
import {cn} from '@/lib/utils'
import {carouselItemClass} from '@/config'
import TextBlock from '@/components/TextBlock'

const topShadow = 'shadow-[inset_0px_5px_10px_-12px_rgba(0,0,0,0.5)]'
const bottomShadow = 'shadow-[inset_0px_-5px_10px_-12px_rgba(0,0,0,0.5)]'
const bothShadows = 'shadow-[inset_0px_5px_10px_-12px_rgba(0,0,0,0.5),inset_0px_-5px_10px_-12px_rgba(0,0,0,0.5)]'

export default function Text ({children}: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)
  const [shadow, setShadow] = useState<string>('')

  function toggleShadow (element: HTMLDivElement) {
    const atTop = element.scrollTop === 0
    const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight
    if (atTop) {
      if (atBottom) {
        setShadow('')
      } else {
        setShadow(bottomShadow)
      }
    } else {
      if (atBottom) {
        setShadow(topShadow)
      } else {
        setShadow(bothShadows)
      }
    }
    return {atTop, atBottom}
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }
    toggleShadow(ref.current)
  }, [ref.current])
  const onWheel = useCallback((event: WheelEvent) => {
    if (!ref.current) {
      return
    }
    const scrollingDown = event.deltaY > 0
    const scrollingUp = event.deltaY < 0

    const {atTop, atBottom} = toggleShadow(ref.current)
    if ((
      scrollingDown && !atBottom
    ) || (
      scrollingUp && !atTop
      )) {
      event.stopPropagation()
    }
  }, [])

  return (
    <CarouselItem ref={ref} className={cn(carouselItemClass, 'flex max-w-full min-w-96 flex-col overflow-y-scroll p-4 transition-shadow', shadow)} onWheel={onWheel}>
      <TextBlock>{children}</TextBlock>
    </CarouselItem>
  )
}

Text.displayName = 'Text'
