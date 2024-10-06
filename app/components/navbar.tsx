import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './modeToggleBtn'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full flex relative items-center justify-between text-6xl px-4 py-5 max-w-2xl mx-auto'>
        <Link href='/' className='font-bold tracking-tighter'>Sam{"'"}s<span className='text-red-600'>Blogs</span></Link>
        <ModeToggle />
      </nav>
    </div>
  )
}

export default Navbar
