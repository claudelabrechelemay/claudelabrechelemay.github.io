import Link from 'next/link'
import About from './about.mdx'

export default function AboutPage () {
  return (
    <div className='p-2'>
      <div className='flex justify-between items-baseline gap-4 flex-wrap'>
        <div className='min-w-max'>
          <p>b. 1992 in Montreal, Qc, Canada.<br />works and lives in Montreal.</p>
        </div>
        <div className='overflow-x-hidden'>
          <h3 className='font-bold'>CONTACT</h3>
          <Link className='break-words' href='mailto:claudelabrechelemay@gmail.com'>claudelabrechelemay@gmail.com</Link>
        </div>
      </div>
      <hr />
      <About />
    </div>
  )
}
