import Corps from './corps.mdx'
import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><Corps /></Text>
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
      <Image
        src={img3}
        alt={{
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
      />
    </SlideDeck>
  )
}
