import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import DeepTime from './deep-time.mdx'

import img0 from './images/deep-time-cover.jpg'
import img1 from './images/wall-of-clay.jpg'
import img2 from './images/65-kg.jpg'
import img3 from '@/app/as-they-move-through-deep-time/images/spine.jpg'
import img4 from './images/spine-tail.jpg'
import img5 from './images/vertebrae.jpg'
import img6 from './images/spine-ceiling.jpg'
import img7 from './images/deep-time-bookend.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><DeepTime /></Text>
      <Image
        src={img0}
        alt={{
          en: 'cover for as they move through deep time',
          fr: ''
        }}
      />
      <Image
        src={img1}
        alt={{
          en: 'wall of clay',
          fr: ''
        }}
        caption={{
          en: "_a wall of clay_ – 2023\nimpression jet d'encre, ~8'x10'",
          fr: "_a wall of clay_ – 2023\nimpression jet d'encre, ~8'x10'"
        }}
      />
      <Image
        src={img2}
        alt={{
          en: '~65kg',
          fr: ''
        }}
        caption={{
          en: `_~65kg_ – 2024\n19 impressions jet d'encre, 4"x5" chaque`,
          fr: `_~65kg_ – 2024\n19 impressions jet d'encre, 4"x5" chaque`
        }}
      />
      <Image
        src={img3}
        alt={{
          en: 'spine',
          fr: ''
        }}
        caption={{
          en: `_Spine_ – 2024\ncéramique enfumée, cire d'abeille, cire, argile naturelle, 10'x5"`,
          fr: `_Spine_ – 2024\ncéramique enfumée, cire d'abeille, cire, argile naturelle, 10'x5"`
        }}
      />
      <Image
        src={img4}
        alt={{
          en: 'spine base against the wooden floor',
          fr: ''
        }}
      />
      <Image
        src={img5}
        alt={{
          en: 'close up of vertebrae',
          fr: ''
        }}
      />
      <Image
        src={img6}
        alt={{
          en: 'spine going through the ceiling',
          fr: ''
        }}
      />
      <Image
        src={img7}
        alt={{
          en: 'as they move through deep time by Claude Labrèche-Lemay',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
