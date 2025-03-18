import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="absolute  top-3 left-1/2 flex w-full max-w-lg -translate-x-1/2 transform justify-between rounded-full bg-gray-950 p-4 text-white">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gray-500"></div>
        <div className="pb-0">
          <p className="text-sm">
            Iroshan De Zilva <br />
            <span className="opacity-70">Product Designer</span>{' '}
          </p>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-1">
        <Link
          className="text-small rounded-lg pt-1 pr-2 pb-1 pl-2 font-medium text-white hover:bg-white/15 active:bg-white/15"
          href="/"
        >
          Home
        </Link>

        <Link
          className="text-small rounded-lg pt-1 pr-2 pb-1 pl-2 font-medium text-white hover:bg-white/15 active:bg-white/15"
          href="/about"
        >
          About
        </Link>

        <Link
          className="text-small rounded-lg pt-1 pr-2 pb-1 pl-2 font-medium text-white hover:bg-white/15 active:bg-white/15"
          href="/services"
        >
          Services
        </Link>

        <Link
          className="text-small rounded-lg pt-1 pr-2 pb-1 pl-2 font-medium text-white hover:bg-white/15 active:bg-white/15"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
