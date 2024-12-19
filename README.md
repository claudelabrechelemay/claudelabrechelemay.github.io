This is the code repository for Claude Labrèche-Lemay's website https://www.claudelabrechelemay.com

## Requirements
1. Install
  - [Node.js and npm](https://nodejs.org)
  - [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [VS Code](https://code.visualstudio.com/)
2. Create a [GitHub](https://github.com/) account. You'll be able to deploy things to `<username>.github.io` as well as `<username>.github.io/<repository>` so choose your username wisely!

## Installation
1. Fork this repository into your account
2. Clone it locally on your development device
```sh copy
git clone https://github.com/$USERNAME/$REPOSITORY
```
3. Go to the directory you cloned the repository in
```sh
cd $REPOSITORY
```
2. Install the dependencies
```sh copy
npm install
```

## Development
Start the development environment:
```sh copy
npm run dev
```

## Content Management
This repo uses the Next.js [App Router](https://nextjs.org/docs/app), so you'll find the pages in the [`app/`](/app/) directory. The `page.tsx` files define the contents for each page by importing various content files (images and `.mdx` files) and rendering them using the provided components.

### Importing files
Use the `import` keyword at the top of the file

#### Images
```tsx
import img0 from './images/some-image.jpg'
```

#### MDX files
```tsx
import Mdx from './file.mdx'
```

### Components
Provide imported content to components to render them on the page.

#### SlideDeck
Producing a horizontal carousel, the `SlideDeck` component accepts various types of slides:
- `TextSlide`
- `ImageSlide`
- `VideoSlide`
```tsx
import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'
import Video from '@/components/VideoSlide'

import img0 from './images/some-image.jpg'
import Mdx from './file.mdx'

<SlideDeck>
  <Text><Mdx /></Text>
  <Image
    src={img0}
    alt={{
      en: 'A large red square',
      fr: 'Un gros carré rouge'
    }}
  />
  <Video
    provider='vimeo'
    id='123456789'
    src='https://i.vimeocdn.com/video/123456789-e34e4f93071a278a70993b1559aba72ce3321de29136d430dd1b67bee3525678-d?f=webp'
    alt='Salto arrière'
  />
</SlideDeck>
```

#### CollectionPage
Producing a grid of image links with an optional text block above it, the `CollectionPage` component accepts a single types of content, `CollectionLink`, but also accepts a `cover` parameter for the inclusion of a text block above the grid.
```tsx
import CollectionPage from '@/components/CollectionPage'
import CollectionLink from '@/components/CollectionLink'

import img0 from './images/red-square.jpg'
import img1 from './images/fruit.jpg'

import Mdx from './file.mdx'

<CollectionPage cover={<Mdx />}>
  <CollectionLink
    src={img0}
    alt={{
      en: 'A large red square',
      fr: 'Un gros carré rouge'
    }}
    url='/carre-rouge'
  />
  <CollectionLink
    src={img1}
    alt={{
      en: 'A bowl of fruit',
      fr: 'Un bol de fruits'
    }}
    url='/nature-morte'
  />
</CollectionPage>
```

#### TextBlock
Both `TextSlide` and `CollectionPage`'s `cover` prop both wrap their contents in a `TextBlock` component, meant to ensure a consistent feel in text blocks throughout the website. Mostly useful in `.mdx` files when writing larger blocks of text, `TextBlock` also exports useful text formatting components:
```mdx
import {Subtitle, Center, Indented, Right, Caption} from '@/components/TextBlock'

## Titles appear in large text
<Subtitle>subtitles stay close to their title above</Subtitle>

Normal paragraphs wrap at a maximum of 75 characters automatically for more comfortable reading. This is provided by the `TextBlock` component.

<Center>This text is centered</Center>

<Indented>This text will be indented right a little</Indented>

<Right>This text is right-aligned</Right>

<Caption>
  Captions appear at the bottom
</Caption>
```

### Metadata
Each page can export its own metadata to help social apps and search engines produce meaningful preview links
```tsx
import type {Metadata} from 'next'
const title = "Page title"
const description = 'Page description'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: []
  }
}
```

#### Fallback metadata
If no metadata is provided for a page, the app will fallback on the metadata provided for the [app layout](app/layout.tsx)

## Testing
Launch a production server locally:
```
npm run build && npm start
```

## Deployment
This repository is [configured](.github/workflows/deploy.yml) to deploy to GitHub Pages on every push to the `main` branch.

## LICENSE

The content of this project itself is [not licensed for use](/app/LICENSE) under Claude's 2019 copyright (all rights reserved). However, the underlying source code used to format and display that content is [licensed for fair use](/LICENCE) under the **GPL-3.0-or-later** license.
