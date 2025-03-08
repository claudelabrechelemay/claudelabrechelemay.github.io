'use client'

import {lazy, useState, useTransition} from 'react'
import {CarouselItem} from '@/components/ui/carousel'
import {carouselItemClass} from '@/config'
import {cn} from '@/lib/utils'
import PlayerSkeleton from '@/components/PlayerSkeleton'
import type {StaticImageData} from 'next/image'

const Player = lazy(() => import('@/components/Player'))

export type VideoProps = {
  provider?: 'vimeo'
  id: string
  src: StaticImageData
  alt: string
}
export default function Video ({provider = 'vimeo', id, src, alt}: VideoProps) {
  const [, startTransition] = useTransition()
  const [showPlayer, setShowPlayer] = useState(false)
  return (
    <CarouselItem className={cn(carouselItemClass, 'basis-full')}>
      {(() => {
        switch (provider) {
          case 'vimeo':
            return (
              <div className='relative pt-[56.25%] pb-0 px-0 size-full'>
                <button onClick={() => {
                  startTransition(() => {
                    setShowPlayer(true)
                  })
                }} className='cursor-pointer pointer-events-auto'>
                  <PlayerSkeleton src={src} alt={alt} />
                </button>
                {showPlayer && <Player id={id} />}
              </div>
            )
          default:
            throw new Error(`Unknown provider: ${provider}`)
        }
      })()}
    </CarouselItem>
  )
}

Video.displayName = 'Video'
