import CollectionPage, {type CollectionItem} from '@/components/CollectionPage'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'

const items: CollectionItem[] = [{
  image: {
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
      en: 'On Movement',
      fr: ''
    }
  },
  url: '/on-movement'
}, {
  image: {
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
      en: 'Translation Of Movement',
      fr: ''
    }
  },
  url: '/translation-of-movement'
}, {
  image: {
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
      en: 'On Language',
      fr: ''
    }
  },
  url: '/on-language'
}, {
  image: {
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
      en: 'Sous une Géologie des Corps',
      fr: ''
    }
  },
  url: '/sous-une-geologie-des-corps'
}, {
  image: {
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
      en: 'Anchored in the Process',
      fr: ''
    }
  },
  url: '/anchored-in-process'
}, {
  image: {
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
      en: 'Stat Still',
      fr: ''
    }
  },
  url: '/staystill'
}]

export default function Page () {
  return (
    <CollectionPage items={items} />
  )
}
