import Picture from "next-export-optimize-images/picture"
import type {StaticImageData} from "next/image"
import Link from "next/link"

type CollectionLinkProps = {
  url: string
  src: StaticImageData
  alt: {
    en: string
    fr: string
  }
  caption?: {
    en: string
    fr: string
  }
}
export default function CollectionLink ({url, src, alt, caption}: CollectionLinkProps) {
  return (
    <Link key={url} href={url} className='w-full md:w-1/4'>
      <figure>
        <Picture
          src={src}
          alt={alt.en}
          loading='eager'
          placeholder='blur'
          className='w-full'
          sizes='(max-width: 768px) 512px, 200px'
        />
        <figcaption>{caption?.en}</figcaption>
      </figure>
    </Link>
  )
}

CollectionLink.displayName = 'CollectionLink'
