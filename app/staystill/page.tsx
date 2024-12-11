import ProjectPage from '@/components/ProjectPage'
import {type Markdown, type SlideImage, type Slide} from '@/components/SlideDeck'

import StayStill from './stay-still.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'

const slides: Slide[] = [({
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
}) as SlideImage, ({
  itemType: 'image',
  key: 'img1',
  image: {
    src: img1,
    alt: {
      en: '',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img2',
  image: {
    src: img2,
    alt: {
      en: '',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'markdown',
  key: 'stay-still',
  md: <StayStill />
}) as Markdown, ({
  itemType: 'image',
  key: 'img3',
  image: {
    src: img3,
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
