import type {PropsWithChildren} from "react"

export default function TextBlock ({children}: PropsWithChildren) {
  return (
    <div className='lg:max-w-[75ch] [&>h2:has(+p.mt-0)]:mb-0 table h-full'>
      {children}
    </div>
  )
}