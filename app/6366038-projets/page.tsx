import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'

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
          en: 'On Movement',
          fr: ''
        }}
        url='/on-movement'
      />
      <CollectionLink
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Translation Of Movement',
          fr: ''
        }}
        url='/translation-of-movement'
      />
      <CollectionLink
        src={img2}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'On Language',
          fr: ''
        }}
        url='/on-language'
      />
      <CollectionLink
        src={img3}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Sous une Géologie des Corps',
          fr: ''
        }}
        url='/sous-une-geologie-des-corps'
      />
      <CollectionLink
        src={img4}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Anchored in the Process',
          fr: ''
        }}
        url='/anchored-in-process'
      />
      <CollectionLink
        src={img5}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: 'Stat Still',
          fr: ''
        }}
        url='/staystill'
      />
    </CollectionPage>
  )
}
