import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import DeepTime from './deep-time-2.mdx'

import img1 from './images/astheymove_EXPO-01.jpg'
import img2 from './images/astheymove_EXPO-02.jpg'
import img3 from './images/astheymove_EXPO-03.jpg'
import img4 from './images/astheymove_EXPO-04.jpg'
import img5 from './images/astheymove_EXPO-05.jpg'
import img6 from './images/astheymove_EXPO-06.jpg'
import img7 from './images/astheymove_EXPO-07.jpg'
import img8 from './images/astheymove_EXPO-08.jpg'
import img9 from './images/astheymove_EXPO-09.jpg'
import img10 from './images/astheymove_EXPO-10.jpg'
import img11 from './images/astheymove_EXPO-11.jpg'
import img12 from './images/astheymove_EXPO-12.jpg'
import img13 from './images/astheymove_EXPO-13.jpg'
import img14 from './images/astheymove_EXPO-14.jpg'
import img15 from './images/astheymove_EXPO-15.jpg'
import img16 from './images/astheymove_EXPO-16.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><DeepTime /></Text>
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
      <Image
        src={img5}
        alt={{
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
      />
      <Image
        src={img7}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img8}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img9}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img10}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img11}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img12}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img13}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img14}
        alt={{
          en: '',
          fr: ''
        }} />
      <Image
        src={img15}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img16}
        alt={{
          en: '',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
