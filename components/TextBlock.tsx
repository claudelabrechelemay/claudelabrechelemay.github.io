import type {PropsWithChildren} from "react"

export default function TextBlock ({children}: PropsWithChildren) {
  return (
    <div className='lg:max-w-[75ch]'>
      {children}
    </div>
  )
}