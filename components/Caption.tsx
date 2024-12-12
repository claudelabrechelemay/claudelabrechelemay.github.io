import {PropsWithChildren} from "react"

export default function Caption ({children}: PropsWithChildren) {
  return (
    <div className='table-caption caption-bottom'>{children}</div>
  )
}
