import SlideDeck, {type Slide} from '@/components/SlideDeck'

import deepTime from './deep-time.mdx'

import deepTimeCover from './images/deep-time-cover.jpg'
import wallOfClay from './images/wall-of-clay.jpg'
import sixtyFiveKg from './images/65-kg.jpg'
import spine from './images/spine.jpg'
import spineTail from './images/spine-tail.jpg'
import vertebrae from './images/vertebrae.jpg'
import spineCeiling from './images/spine-ceiling.jpg'
import deepTimeBookend from './images/deep-time-bookend.jpg'

export const slides: Slide[] = [{
  itemType: 'markdown',
  key: 'deep-time-into',
  md: deepTime
}, {
  itemType: 'image',
  key: 'deepTimeCover',
  image: {
    src: deepTimeCover,
    alt: {
      en: 'cover for as they move through deep time',
      fr: ''
    }
  }
}, {
  itemType: 'image',
  key: 'wallOfClay',
  image: {
    src: wallOfClay,
    alt: {
      en: 'wall of clay',
      fr: ''
    }
  },
  caption: {
    en: `_a wall of clay_ – 2023  
impression jet d'encre, ~8'x10'`,
    fr: `_a wall of clay_ – 2023  
impression jet d'encre, ~8'x10'`
  }
}, {
  itemType: 'image',
  key: '~65kg',
  image: {
    src: sixtyFiveKg,
    alt: {
      en: '~65kg',
      fr: ''
    }
  },
  caption: {
    en: `_~65kg_ – 2024  
19 impressions jet d'encre, 4"x5" chaque`,
    fr: `_~65kg_ – 2024  
19 impressions jet d'encre, 4"x5" chaque`
  }
}, {
  itemType: 'image',
  key: 'spine',
  image: {
    src: spine,
    alt: {
      en: 'spine',
      fr: ''
    }
  },
  caption: {
    en: `_Spine_ – 2024  
céramique enfumée, cire d'abeille, cire, argile naturelle, 10'x5"`,
    fr: `_Spine_ – 2024  
céramique enfumée, cire d'abeille, cire, argile naturelle, 10'x5"`
  }
}, {
  itemType: 'image',
  key: 'spineTail',
  image: {
    src: spineTail,
    alt: {
      en: 'spine base against the wooden floor',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}, {
  itemType: 'image',
  key: 'vertebrae',
  image: {
    src: vertebrae,
    alt: {
      en: 'close up of vertebrae',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}, {
  itemType: 'image',
  key: 'spineCeiling',
  image: {
    src: spineCeiling,
    alt: {
      en: 'spine going through the ceiling',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}, {
  itemType: 'image',
  key: 'deepTimeBookend',
  image: {
    src: deepTimeBookend,
    alt: {
      en: 'as they move through deep time by Claude Labrèche-Lemay',
      fr: ''
    }
  },
  caption: {
    en: '',
    fr: ''
  }
}]

export default function Page () {
  return (
    <SlideDeck
      slides={slides}
    />
  )
}
