import Picture from 'next-export-optimize-images/picture'

import {type SlideImage} from "./SlideDeck"
import type {ReactElement} from 'react'

export type CollectionItem = {
  image: SlideImage,
  url: string
}

export type CollectionPageProps = {
  cover?: ReactElement
  items: CollectionItem[]
}

export default function CollectionPage ({cover, items}: CollectionPageProps) {
  return (
    <>
      {cover || null}
      <div className='flex flex-wrap gap-4'>
        {items.map(({url, image}) => {
          return (
            <a key={url} href={url} className='w-full md:w-1/4'>
              <figure>
                <Picture
                  src={image.image.src}
                  alt={image.image.alt.en}
                  loading='eager'
                  placeholder='blur'
                  className='w-full'
                  sizes='(max-width: 768px) 512px, 200px'
                />
                <figcaption>{image.caption?.en}</figcaption>
              </figure>
            </a>
          )
        })}
      </div>
    </>
  )
}