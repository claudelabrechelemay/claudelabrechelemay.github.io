import CollectionPage, {type CollectionItem} from '@/components/CollectionPage'

import Cover from './deconstruire-le-corps.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'

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
      en: 'Selection of images',
      fr: ''
    }
  },
  url: '/4014936-deconstruire-le-corps-images'
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
      en: 'Installation View',
      fr: ''
    }
  },
  url: '/corps'
}]

export default function Page () {
  return (
    <CollectionPage cover={<Cover />} items={items} />
  )
}
