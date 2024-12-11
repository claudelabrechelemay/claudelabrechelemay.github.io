import ProjectPage from '@/components/ProjectPage'
import {type Markdown, type SlideImage, type Slide} from '@/components/SlideDeck'

import Flow from './flow.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'
import img6 from './images/img_6.jpg'
import img7 from './images/img_7.jpg'
import img8 from './images/img_8.jpg'
import img9 from './images/img_9.jpg'
import img10 from './images/img_10.jpg'
import img11 from './images/img_11.jpg'
import img12 from './images/img_12.jpg'
import img13 from './images/img_13.jpg'
import img14 from './images/img_14.jpg'
import img15 from './images/img_15.jpg'


const slides: Slide[] = [({
  itemType: 'markdown',
  key: 'flow',
  md: <Flow />
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
  key: 'img6',
  image: {
    src: img6,
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
  key: 'img7',
  image: {
    src: img7,
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
  key: 'img8',
  image: {
    src: img8,
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
  key: 'img9',
  image: {
    src: img9,
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
  key: 'img10',
  image: {
    src: img10,
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
  key: 'img11',
  image: {
    src: img11,
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
  key: 'img12',
  image: {
    src: img12,
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
  key: 'img13',
  image: {
    src: img13,
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
  key: 'img14',
  image: {
    src: img14,
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
  key: 'img15',
  image: {
    src: img15,
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
