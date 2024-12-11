import CollectionPage, {type CollectionItem} from '@/components/CollectionPage'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'

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
      en: 'Myth of Landscape',
      fr: ''
    }
  },
  url: '/untitledlandscape'
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
      en: 'Untitled (Collection of Space) - 2016',
      fr: ''
    }
  },
  url: '/space'
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
      en: 'Déconstruire le Corps - 2016',
      fr: ''
    }
  },
  url: '/deconstruire-le-corps'
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
      en: 'Another Memory - 2015',
      fr: ''
    }
  },
  url: '/another'
}]

export default function Page () {
  return (
    <CollectionPage items={items} />
  )
}
