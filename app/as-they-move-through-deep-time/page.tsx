import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import DeepTime from './deep-time.mdx'

import deepTimeCover from './images/deep-time-cover.jpg'
import wallOfClay from './images/wall-of-clay.jpg'
import sixtyFiveKg from './images/65-kg.jpg'
import spine from './images/spine.jpg'
import spineTail from './images/spine-tail.jpg'
import vertebrae from './images/vertebrae.jpg'
import spineCeiling from './images/spine-ceiling.jpg'
import deepTimeBookend from './images/deep-time-bookend.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><DeepTime /></Text>
      <Image
        src={deepTimeCover}
        alt={{
          en: 'cover for as they move through deep time',
          fr: ''
        }}
      />
      <Image
        src={wallOfClay}
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
        src={sixtyFiveKg}
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
        src={spine}
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
        src={spineTail}
        alt={{
          en: 'spine base against the wooden floor',
          fr: ''
        }}
      />
      <Image
        src={vertebrae}
        alt={{
          en: 'close up of vertebrae',
          fr: ''
        }}
      />
      <Image
        src={spineCeiling}
        alt={{
          en: 'spine going through the ceiling',
          fr: ''
        }}
      />
      <Image
        src={deepTimeBookend}
        alt={{
          en: 'as they move through deep time by Claude Labrèche-Lemay',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
