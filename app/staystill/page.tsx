import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'
import Video from '@/components/VideoSlide'

import StayStill from './stay-still.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'

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

      <Image
        src={img3}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Text><StayStill /></Text>
      <Video
        provider='vimeo'
        id='209989649'
        src='https://i.vimeocdn.com/video/625672641-fafb995e23608f99d6d27c082ac4a3faf662a2c2cad8c94442c7f83d21fa75d4-d?f=webp'
        alt='StayStill-Dummy'
      />
    </SlideDeck>
  )
}
