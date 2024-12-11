import ProjectPage from '@/components/ProjectPage'
import {type Markdown, type SlideImage, type Slide} from '@/components/SlideDeck'

import OnMovement from './on-movement.mdx'
import tryptic from './images/tryptic.jpg'
import dyptic from './images/dyptic.jpg'
import corner from './images/corner.jpg'
import burntFrameCloseup from './images/burnt-frame-closeup.jpg'
import blurCloseup from './images/blur-closeup.jpg'
import trypticMounted from './images/tryptic-mounted.jpg'
import dypticMounted from './images/dyptic-mounted.jpg'

const slides: Slide[] = [({
  itemType: 'markdown',
  key: 'on-movement-intro',
  md: <OnMovement />
}) as Markdown, ({
  itemType: 'image',
  key: 'tryptic',
  image: {
    src: tryptic,
    alt: {
      en: 'On Movement tryptic',
      fr: ''
    }
  }
}) as SlideImage, ({
  itemType: 'image',
  key: 'dyptic',
  image: {
    src: dyptic,
    alt: {
      en: 'On Movement dyptic',
      fr: ''
    }
  }
}), ({
  itemType: 'image',
  key: 'corner',
  image: {
    src: corner,
    alt: {
      en: 'On Movement corner',
      fr: ''
    }
  },
  caption: {
    en: "Installation View / Vue d'installation",
    fr: ''
  }
}), ({
  itemType: 'image',
  key: 'burnt-frame',
  image: {
    src: burntFrameCloseup,
    alt: {
      en: 'On Movement burnt frame closeup',
      fr: ''
    }
  }
}), ({
  itemType: 'image',
  key: 'blur-closeup',
  image: {
    src: blurCloseup,
    alt: {
      en: 'On Movement blur closeup',
      fr: ''
    }
  }
}), ({
  itemType: 'image',
  key: 'tryptic-mounted',
  image: {
    src: trypticMounted,
    alt: {
      en: 'On Movement tryptic, framed and mounted',
      fr: ''
    }
  }
}), ({
  itemType: 'image',
  key: 'dyptic-mounted',
  image: {
    src: dypticMounted,
    alt: {
      en: 'On Movement dyptic, framed and mounted',
      fr: ''
    }
  }
})]

export default function Page () {
  return (
    <ProjectPage slides={slides} />
  )
}
