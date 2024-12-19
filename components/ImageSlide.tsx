import type {StaticImageData, ImageProps as NextImageProps} from 'next/image'
import Picture from 'next-export-optimize-images/picture'
import {
  CarouselItem,
} from '@/components/ui/carousel'
import {remark} from 'remark'
import remarkHTML from 'remark-html'
import {carouselItemClass, Locales} from '@/config'
import {cn} from '@/lib/utils'

const locale = Locales.EN

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
  className?: string
}

export default async function Image ({src, alt, caption, loading, className}: ImageProps) {
  if (caption) {
    const parsed = await parseMarkdown.process(caption[locale])
    const html = parsed.toString()
    caption[locale] = html
  }

  return (
    <CarouselItem className={carouselItemClass}>
      <figure className={cn('relative table w-full', className)}>
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
