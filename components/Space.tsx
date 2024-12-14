export type SpaceProps = {
  x: number
}
export default function Space ({x: length}: SpaceProps) {
  const items = new Array(length).fill('&emsp;')
  return <span dangerouslySetInnerHTML={{__html: items.join('')}} />
}

Space.displayName = 'Space'
