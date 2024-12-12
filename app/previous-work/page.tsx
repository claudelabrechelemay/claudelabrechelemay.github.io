import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'

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
          en: 'Myth of Landscape',
          fr: ''
        }}
        url='/untitledlandscape'
      />
      <CollectionLink
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Untitled (Collection of Space) - 2016',
          fr: ''
        }}
        url='/space'
      />
      <CollectionLink
        src={img2}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Déconstruire le Corps - 2016',
          fr: ''
        }}
        url='/deconstruire-le-corps'
      />
      <CollectionLink
        src={img3}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Another Memory - 2015',
          fr: ''
        }}
        url='/another'
      />
    </CollectionPage>
  )
}
