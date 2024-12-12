import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import AnchoredInProcess from './anchored-in-process.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'
import img6 from './images/img_6.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><AnchoredInProcess /></Text>
      <Image
        src={img0}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img1}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img2}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img3}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img4}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img5}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img6}
        alt={{
          en: '',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
