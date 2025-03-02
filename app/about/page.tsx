import Link from 'next/link'
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
          <Link href='mailto:claudelabrechelemay@gmail.com'>claudelabrechelemay@gmail.com</Link>
        </div>
      </div>
      <hr />
      <About />
    </>
  )
}
