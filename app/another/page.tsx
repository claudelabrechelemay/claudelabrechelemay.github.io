import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import AnotherMemory from './another-memory.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'

export default function Page () {
  return (
    <CollectionPage cover={<AnotherMemory />}>
      <CollectionLink
        src={img0}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Another Memory, Part 01',
          fr: ''
        }}
        url='/anothermemorypart1'
      />
      <CollectionLink
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Another Memory, Part 02',
          fr: ''
        }}
        url='/anothermemorypart2'
      />
    </CollectionPage>
  )
}
