import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-5xl bg-white text-black">
        <div className="mx-auto max-w-lg">
         <div className='mb-24'>
         <h1 className="mb-8 text-2xl leading-7 font-medium text-gray-900 lg:text-3xl lg:leading-9.5">
            A senior product designer helping SaaS companies achieve higher
            conversions with strategic UX and user-centered design.
          </h1>
          <p className="text-base text-gray-700">
            Say goodbye to hiring headaches and slow agency timelines. Get a
            dedicated designer who’s ready to deliver exceptional UI/UX .
          </p>

         </div>
          <div>
            <Link className="bg-teal-500 px-5 py-4 rounded-full" href="/about" target="_blank">
            Let's Work Together ->
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
