import type {PropsWithChildren} from 'react'
import {CarouselItem} from '@/components/ui/carousel'
import {cn} from '@/lib/utils'
import {carouselItemClass} from '@/config'
import TextBlock from '@/components/TextBlock'

export default function Text ({children}: PropsWithChildren) {
  return (
    <CarouselItem className={cn(carouselItemClass, `flex max-w-full flex-col overflow-y-scroll p-4`)}>
      <TextBlock>{children}</TextBlock>
    </CarouselItem>
  )
}
