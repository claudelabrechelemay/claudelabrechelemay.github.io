import {Play} from 'lucide-react'

export type PlayerSkeletonProps = {
  src: string
  alt: string
}
export default function PlayerSkeleton ({src, alt}: PlayerSkeletonProps) {
  return (
    <div className='absolute top-0 left-0 size-full'>
      <img
        alt={alt}
        src={src}
        className='absolute top-0 left-0 size-full'
        loading='lazy'
      />
      <Play
        size={48}
        className='h-10 w-14 absolute left-[calc(50%-28px)] top-[calc(50%-28px)] transition duration-300 ease-in-out bg-white opacity-50 cursor-pointer'
      />
    </div>
  )
}

PlayerSkeleton.displayName = 'PlayerSkeleton'
