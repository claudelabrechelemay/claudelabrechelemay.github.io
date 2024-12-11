import ProjectPage from '@/components/ProjectPage'
import {type Markdown, type SlideImage, type Slide} from '@/components/SlideDeck'

import MythOfLandscape from './myth-of-landscape.mdx'

import img0 from './images/img_0.jpg'

const slides: Slide[] = [({
  itemType: 'markdown',
  key: 'myth-of-landscape',
  md: <MythOfLandscape />
}) as Markdown, ({
  itemType: 'image',
  key: 'img0',
  image: {
    src: img0,
    alt: {
      en: '',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}) as SlideImage]

export default function Page () {
  return (
    <ProjectPage slides={slides} />
  )
}
