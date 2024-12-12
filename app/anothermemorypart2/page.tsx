import AnotherMemoryPart2 from './another-memory-part-2.mdx'
import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
export default function Page () {

  return (
    <SlideDeck>
      <Text><AnotherMemoryPart2 /></Text>
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
    </SlideDeck>
  )
}
