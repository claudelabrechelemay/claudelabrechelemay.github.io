import CollectionPage, {type CollectionItem} from '@/components/CollectionPage'

import AnotherMemory from './another-memory.mdx'

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
      en: 'Another Memory, Part 01',
      fr: ''
    }
  },
  url: '/anothermemorypart1'
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
      en: 'Another Memory, Part 02',
      fr: ''
    }
  },
  url: '/anothermemorypart2'
}]

export default function Page () {
  return (
    <CollectionPage cover={<AnotherMemory />} items={items} />
  )
}
