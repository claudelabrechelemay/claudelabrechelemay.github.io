'use client'

import type {StaticImageData} from 'next/image'
import Picture from 'next-export-optimize-images/picture'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {Fragment, type ReactElement} from 'react'
import {useIsMobile} from '@/hooks/use-mobile'
import {useSidebar} from './ui/sidebar'

export type SlideImage = {
  itemType: 'image'
  key: string
  image: {
    src: StaticImageData
    alt: {
      en: string
      fr: string
    }
  }
  caption?: {
    en: string
    fr: string
  }
}

export type Markdown = {
  itemType: 'markdown'
  key: string
  md: ReactElement
}

export type Slide = SlideImage | Markdown

export type SlideDeckProps = {
  slides: Slide[]
  loop?: boolean
}

export type localizedString = {
  en: string,
  fr: string
}

export default function SlideDeck ({slides, loop = false}: SlideDeckProps) {
  const isMobile = useIsMobile()
  const {state} = useSidebar()
  return (
    <Carousel orientation={isMobile ? 'vertical' : 'horizontal'} opts={{
      skipSnaps: true,
      loop
    }} className='max-h-[448px]'>
      <CarouselContent>
        {slides.map((item: Slide, idx) => {
          const itemClass = '[--carousel-height:60svh] basis-auto md:h-[calc(100svh-1.75rem)] short:h-[--carousel-height]'
          return (
            <Fragment key={item.key}>
              {item.itemType === 'image'
                ? (
                  <CarouselItem className={`${itemClass}`}>
                    <figure className={`relative flex w-full flex-col`}>
                      <Picture
                        src={item.image.src}
                        alt={item.image.alt['en']}
                        placeholder='blur'
                        loading={idx < 3 ? 'eager' : 'lazy'}
                        className='w-full max-h-96 object-contain sm:h-full sm:w-auto md:h-[calc(100svh-5.75rem)] short:h-[calc(var(--carousel-height)-4rem)]'
                        sizes='(max-width: 768px) 512px, 768px'
                      />
                      <figcaption className='h-16 px-4 [&>p]:mt-0' dangerouslySetInnerHTML={{__html: item.caption?.en || ''}} />
                    </figure>
                  </CarouselItem>
                ) : (
                  <CarouselItem className={`${itemClass} flex max-w-full flex-col overflow-y-scroll p-4 lg:max-w-[75ch] short:justify-center`}>
                    {item.md}
                  </CarouselItem>
                )
              }
            </Fragment>
          )
        })}
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
