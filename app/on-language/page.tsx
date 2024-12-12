import SlideDeck from '@/components/SlideDeck'
import Image from '@/components/ImageSlide'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Image
        src={img0}
        alt={{
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
      />
      <Image
        src={img2}
        alt={{
          en: '',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
