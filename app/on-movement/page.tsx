import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import OnMovement from './on-movement.mdx'
import tryptic from './images/tryptic.jpg'
import dyptic from './images/dyptic.jpg'
import corner from './images/corner.jpg'
import burntFrameCloseup from './images/burnt-frame-closeup.jpg'
import blurCloseup from './images/blur-closeup.jpg'
import trypticMounted from './images/tryptic-mounted.jpg'
import dypticMounted from './images/dyptic-mounted.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><OnMovement /></Text>
      <Image
        src={tryptic}
        alt={{
          en: 'On Movement tryptic',
          fr: ''
        }}
      />
      <Image
        src={dyptic}
        alt={{
          en: 'On Movement dyptic',
          fr: ''
        }}
      />
      <Image
        src={corner}
        alt={{
          en: 'On Movement corner',
          fr: ''
        }}
        caption={{
          en: "Installation View / Vue d'installation",
          fr: ''
        }}
      />
      <Image
        src={burntFrameCloseup}
        alt={{
          en: 'On Movement burnt frame closeup',
          fr: ''
        }}
      />
      <Image
        src={blurCloseup}
        alt={{
          en: 'On Movement blur closeup',
          fr: ''
        }}
      />
      <Image
        src={trypticMounted}
        alt={{
          en: 'On Movement tryptic, framed and mounted',
          fr: ''
        }}
      />
      <Image
        src={dypticMounted}
        alt={{
          en: 'On Movement dyptic, framed and mounted',
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
