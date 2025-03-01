'use client'

import {useRef, type PropsWithChildren, type WheelEvent} from 'react'
import {CarouselItem} from '@/components/ui/carousel'
import {cn} from '@/lib/utils'
import {carouselItemClass} from '@/config'
import TextBlock from '@/components/TextBlock'

export default function Text ({children}: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)
  function onWheel (event: WheelEvent) {
    if (!ref.current) {
      return
    }
    if ((
      event.deltaY > 0 && ref.current.clientHeight + ref.current.scrollTop < ref.current.scrollHeight
    ) || (
        event.deltaY < 0 && ref.current.scrollTop > 0
      )) {
      event.stopPropagation()
    }
  }
  return (
    <CarouselItem ref={ref} className={cn(carouselItemClass, `flex max-w-full min-w-96 flex-col overflow-y-scroll p-4`)} onWheel={onWheel}>
      <TextBlock>{children}</TextBlock>
    </CarouselItem>
  )
}

Text.displayName = 'Text'
