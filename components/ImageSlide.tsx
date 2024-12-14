import type {StaticImageData, ImageProps as NextImageProps} from 'next/image'
import Picture from 'next-export-optimize-images/picture'
import {
  CarouselItem,
} from '@/components/ui/carousel'
import type {Locale} from '@/config'
import {remark} from 'remark'
import remarkHTML from 'remark-html'
import {carouselItemClass} from '@/config'

const locale: Locale = 'en'

const parseMarkdown = remark().use(remarkHTML)

export type ImageProps = {
  src: StaticImageData
  alt: {
    en: string
    fr: string
  }
  caption?: {
    en: string
    fr: string
  }
  loading?: NextImageProps['loading']
}

export default async function Image ({src, alt, caption, loading}: ImageProps) {
  if (caption) {
    const parsed = await parseMarkdown.process(caption[locale])
    const html = parsed.toString()
    caption[locale] = html
  }

  return (
    <CarouselItem className={carouselItemClass}>
      <figure className={`relative table w-full`}>
        <Picture
          src={src}
          alt={alt[locale]}
          placeholder='blur'
          loading={loading}
          className='object-contain w-full md:w-auto md:h-[calc(100svh-4rem-5rem)] short:h-[calc(var(--carousel-height)-4rem)]'
          sizes='(max-width: 768px) 512px, 768px'
        />
        <figcaption className='h-16 px-4 [&>p]:mt-0 whitespace-pre-wrap table-caption caption-bottom' dangerouslySetInnerHTML={{__html: caption?.en || ''}} />
      </figure>
    </CarouselItem>
  )
}

Image.displayName = 'ImageSlide'
