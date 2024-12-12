import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import MythOfLandscape from './myth-of-landscape.mdx'

import img0 from './images/img_0.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><MythOfLandscape /></Text>
      <Image
        src={img0}
        alt={{
          en: '',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
