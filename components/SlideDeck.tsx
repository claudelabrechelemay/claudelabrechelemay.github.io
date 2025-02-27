'use client'

import {type PropsWithChildren} from 'react'
import ResponsiveCarousel from '@/components/ResponsiveCarousel'

export type SlideDeckProps = {
  loop?: boolean
}

export default function SlideDeck ({children, loop = false}: PropsWithChildren<SlideDeckProps>) {
  return <>
    <ResponsiveCarousel orientation='horizontal' className='hidden md:block' loop={loop}>{children}</ResponsiveCarousel>
    <ResponsiveCarousel orientation='vertical' className='block md:hidden' loop={loop}>{children}</ResponsiveCarousel>
  </>
}

SlideDeck.displayName = 'SlideDeck'
