export type PlayerProps = {
  id: string
}
export default function Player ({id}: PlayerProps) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${id}?autoplay=1`}
      allowFullScreen
      allow='autoplay; picture-in-picture; clipboard-write'
      className='absolute top-0 left-0 size-full'
      loading='lazy'
    ></iframe>
  )
}