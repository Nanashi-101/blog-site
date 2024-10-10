import React from 'react'

function Footer() {
  return (
    <footer className="mt-16 mb-10 px-4 text-center text-black dark:text-white">
      <small className="mb-2 block text-xs">
        &copy; 2024 Soumyadip. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Sanity, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
