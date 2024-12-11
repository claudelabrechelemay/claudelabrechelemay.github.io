import ProjectPage from '@/components/ProjectPage'
import {type Markdown, type SlideImage, type Slide} from '@/components/SlideDeck'

import TranslationOfMovement from './translation-of-movement.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'
import img6 from './images/img_6.jpg'

const slides: Slide[] = [({
  itemType: 'markdown',
  key: 'translation-of-movement',
  md: <TranslationOfMovement />
}) as Markdown, ({
  itemType: 'image',
  key: 'img0',
  image: {
    src: img0,
    alt: {
      en: 'Video Still',
      fr: ''
    }
  },
  caption: {
    en: 'Video Still',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img1',
  image: {
    src: img1,
    alt: {
      en: 'Video Still',
      fr: ''
    }
  },
  caption: {
    en: 'Video Still',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img2',
  image: {
    src: img2,
    alt: {
      en: 'Video Still',
      fr: ''
    }
  },
  caption: {
    en: 'Video Still',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img3',
  image: {
    src: img3,
    alt: {
      en: 'Video Still',
      fr: ''
    }
  },
  caption: {
    en: 'Video Still',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img4',
  image: {
    src: img4,
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
  key: 'img5',
  image: {
    src: img5,
    alt: {
      en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
      fr: ''
    }
  },
  caption: {
    en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
    fr: ''
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'img6',
  image: {
    src: img6,
    alt: {
      en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
      fr: ''
    }
  },
  caption: {
    en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
    fr: ''
  }
}) as SlideImage]

export default function Page () {
  return (
    <ProjectPage slides={slides} />
  )
}
