import SlideDeck from '@/components/SlideDeck'
import Image from '@/components/ImageSlide'
import Video from '@/components/VideoSlide'

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
      <Video
        provider='vimeo'
        id='202279948'
        src='https://i.vimeocdn.com/video/616272600-e3434f93071ae78a70996b1559aba72ced321de29136d440dd1b67bee4528278-d?f=webp'
        alt='Untitled Video'
      />
    </SlideDeck>
  )
}
