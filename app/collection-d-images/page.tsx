import CollectionPage, {type CollectionItem} from '@/components/CollectionPage'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'

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
      en: 'Abitibi',
      fr: ''
    }
  },
  url: '/abitibi'
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
      en: 'Current images',
      fr: ''
    }
  },
  url: '/flow'
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
      en: 'Stay Still',
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
