'use client'

import Image, {type StaticImageData} from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {Fragment} from 'react'
import {useIsMobile} from '@/hooks/use-mobile'
import {useSidebar} from './ui/sidebar'

export type Image = {
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
  md: JSX.Element
}

export type Slide = Image | Markdown

export type SlideDeckProps = {
  slides: Slide[]
}

export type localizedString = {
  en: string,
  fr: string
}

export type ImageSlideProps = {
  data: {
    image: {
      src: StaticImageData,
      alt: localizedString
    },
    caption?: localizedString
  }
}

export default function SlideDeck ({slides}: SlideDeckProps) {
  const isMobile = useIsMobile()
  const {state} = useSidebar()
  return (
    <Carousel orientation={isMobile ? 'vertical' : 'horizontal'}>
      <CarouselContent>
        {slides.map((item: Slide, idx) => {
          const itemClass = '[--carousel-height:70svh] basis-auto md:h-[calc(100svh-1.75rem)] short:h-[--carousel-height]'
          return (
            <Fragment key={item.key}>
              {item.itemType === 'image'
                ? (
                  <CarouselItem className={`${itemClass}`}>
                    <figure className={`relative flex w-full flex-col`}>
                      <Image
                        className='w-full object-contain sm:h-full sm:w-auto md:h-[calc(100svh-5.75rem)] short:h-[calc(var(--carousel-height)-4rem)]'
                        src={item.image.src}
                        alt={item.image.alt['en']}
                        placeholder='blur'
                        sizes='(max-width: 768px) 512px, 768px'
                        loading={idx < 3 ? 'eager' : 'lazy'}
                      />
                      <figcaption className='h-16 px-4 [&>p]:mt-0' dangerouslySetInnerHTML={{__html: item.caption?.en || ''}} />
                    </figure>
                  </CarouselItem>
                ) : (
                  <CarouselItem className={`${itemClass} max-w-full overflow-y-scroll p-4 lg:max-w-[75ch]`}>
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
