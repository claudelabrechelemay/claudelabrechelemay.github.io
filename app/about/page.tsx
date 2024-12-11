import About from './about.mdx'

export default function AboutPage () {
  return (
    <>
      <div className='flex justify-between gap-4'>
        <div>
          <p>b. 1992 in Montreal, Qc, Canada.</p>
          <p>works and lives in Montreal.</p>
        </div>
        <div className='float-right'>
          <h3 className='font-bold'>CONTACT</h3>
          <a href='mailto:claudelabrechelemay@gmail.com'>claudelabrechelemay@gmail.com</a>
        </div>
      </div>
      <hr />
      <About />
    </>
  )
}
