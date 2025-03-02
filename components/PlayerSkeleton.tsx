import Picture from 'next-export-optimize-images/picture'
import {Play} from 'lucide-react'
import type {StaticImageData} from 'next/image'

export type PlayerSkeletonProps = {
  src: StaticImageData
  alt: string
  caption?: string
}
export default function PlayerSkeleton ({src, alt, caption}: PlayerSkeletonProps) {
  return (
    <div className='absolute top-0 left-0 size-full flex flex-col justify-center'>
      <figure>
        <Picture
          src={src}
          alt={alt}
          placeholder='blur'
          className='w-full'
          sizes='(max-width: 768px) 512px, 200px'
        />
        <Play
          size={48}
          className='h-10 w-14 absolute left-[calc(50%-28px)] top-[calc(50%-28px)] transition duration-300 ease-in-out bg-white opacity-50'
        />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  )
}

PlayerSkeleton.displayName = 'PlayerSkeleton'
