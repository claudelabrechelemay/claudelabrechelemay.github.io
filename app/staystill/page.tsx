import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'
import Video from '@/components/VideoSlide'

import StayStill from './stay-still.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import videoPoster from './images/video-poster.jpg'

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
        src={videoPoster}
        alt='StayStill-Dummy'
      />
    </SlideDeck>
  )
}
