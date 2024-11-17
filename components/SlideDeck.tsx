import {remark} from 'remark'
import remarkHTML from 'remark-html'
import type {MDXProps} from 'mdx/types'
import Image, {type StaticImageData} from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {Fragment} from 'react'

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
  md: (props: MDXProps) => JSX.Element
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

export async function ImageSlide ({data}: ImageSlideProps) {
  const parsed = await remark().use(remarkHTML).process(data.caption?.en)
  const html = parsed.toString()
  return (
    <figure className='relative h-[50vh]'>
      <Image
        className='size-full object-contain'
        src={data.image.src}
        alt={data.image.alt['en']}
        placeholder='blur'
        width={100}
        height={0}
        sizes='(max-width: 768px) 512px, 768px'
      />
      <figcaption dangerouslySetInnerHTML={{__html: html || ''}} />
    </figure>
  )
}

export default function SlideDeck ({slides}: SlideDeckProps) {
  return (
    <Carousel>
      <CarouselContent>
        {slides.map((item: Slide) => {
          return (
            <Fragment key={item.key}>
              {item.itemType === 'image' ? (
                <CarouselItem className='basis-auto'>
                  <ImageSlide data={item} />
                </CarouselItem>
              ) : (
                <CarouselItem className='max-w-[75ch]'>
                  <item.md />
                </CarouselItem>
              )}
            </Fragment>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
