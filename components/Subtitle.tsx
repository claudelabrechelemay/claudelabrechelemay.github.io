import {PropsWithChildren} from "react"

export default function Subtitle ({children}: PropsWithChildren) {
  return (
    <p className='mt-0'>{children}</p>
  )
}

Subtitle.displayName = 'Subtitle'
