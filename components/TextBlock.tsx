import type {PropsWithChildren} from "react"

export default function TextBlock ({children}: PropsWithChildren) {
  return (
    <div className='lg:max-w-[75ch] [&>h2:has(+p.mt-0)]:mb-0 table h-full'>
      {children}
    </div>
  )
}

TextBlock.displayName = 'TextBlock'

export function Subtitle ({children}: PropsWithChildren) {
  return (
    <p className='mt-0'>{children}</p>
  )
}

Subtitle.displayName = 'Subtitle'

export function Centered ({children}: PropsWithChildren) {
  return (
    <span className='block text-center'>{children}</span>
  )
}

Centered.displayName = 'Centered'

export function Indented ({children}: PropsWithChildren) {
  return (
    <span className='block indent-12'>{children}</span>
  )
}

Indented.displayName = 'Indented'

export function Right ({children}: PropsWithChildren) {
  return (
    <span className='block text-right'>{children}</span>
  )
}

Right.displayName = 'Right'

export function Caption ({children}: PropsWithChildren) {
  return (
    <div className='table-caption caption-bottom'>{children}</div>
  )
}

Caption.displayName = 'Caption'
