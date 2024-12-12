import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'

export default function Page () {
  return (
    <CollectionPage>
      <CollectionLink
        src={img0}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Abitibi',
          fr: ''
        }}
        url='/abitibi'
      />
      <CollectionLink
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Current images',
          fr: ''
        }}
        url='/flow'
      />
      <CollectionLink
        src={img2}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Stay Still',
          fr: ''
        }}
        url='/staystill'
      />
    </CollectionPage>
  )
}
