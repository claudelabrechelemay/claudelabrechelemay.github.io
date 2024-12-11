import SlideDeck, {type Slide} from '@/components/SlideDeck'

import {remark} from 'remark'
import remarkHTML from 'remark-html'

const parseMarkdown = remark().use(remarkHTML)

type Locale = 'en' | 'fr'

const locales: Locale[] = ['en', 'fr']

export type ProjectPageProps = {
  slides: Slide[]
  loop?: boolean
}

export default async function ProjectPage ({slides, loop}: ProjectPageProps) {
  const parsedSlides = await slides.map((slide) => {
    if (slide.itemType === 'image') {
      const newSlide = {
        ...slide
      }
      Promise.all(locales.map(async (locale) => {
        if (newSlide.caption) {
          const parsed = await parseMarkdown.process(slide.caption?.[locale])
          const html = parsed.toString()
          newSlide.caption[locale] = html
        }
        return locale
      }))
      return newSlide
    }
    return slide
  })
  return (
    <SlideDeck
      slides={parsedSlides}
      loop={loop}
    />
  )
}
