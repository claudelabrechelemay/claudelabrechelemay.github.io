import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import Abitibi from './abitibi.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><Abitibi /></Text>
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
