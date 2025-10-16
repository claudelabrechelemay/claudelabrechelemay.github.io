const url = 'https://www.youtube-nocookie.com/embed/dhoo8GhykBM?si=ssmJrRF92kge_6LM'

export default function Page () {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <iframe
        width='560'
        height='315'
        src={url}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      >
      </iframe>
    </div>
  )
}
