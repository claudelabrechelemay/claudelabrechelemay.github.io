import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import Cover from './deconstruire-le-corps.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'

export default function Page () {
  return (
    <CollectionPage cover={<Cover />}>
      <CollectionLink
        src={img0}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Selection of images',
          fr: ''
        }}
        url='/4014936-deconstruire-le-corps-images'
      />
      <CollectionLink
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Installation View',
          fr: ''
        }}
        url='/corps'
      />
    </CollectionPage>
  )
}
