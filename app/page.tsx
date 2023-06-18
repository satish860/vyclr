"use client";

import Image from 'next/image'
import useScroll from './lib/use-scroll';
import clsx from 'clsx';

export default function Home() {
  const scrolled = useScroll(80);
  return (
    <div>
      <nav
        className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
        })}>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
          <div className='flex h-14 items-center justify-between'>
            <h1 className='text-4xl font-extrabold tracking-tight lg:text-4xl'>Vyclr</h1>
            <div className='hidden items-center space-x-6 sm:flex'>
              <a className="rounded-md text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black" href="/pricing">pricing</a>
              <a className="rounded-md text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black" href="/pricing">changlog</a>
              <a className="rounded-md text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black" href="/pricing">Login</a>
              <a className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black" href="https://app.dub.sh/register">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        <div className="bg-gray-200 p-4">
          <h1 className='mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
            Unleash Lifelike Storytelling
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA]'>Excellence</span>
          </h1>
          <h2 className='mt-5 text-gray-600 sm:text-xl'>
            Unleash unparalleled storytelling with our cutting-edge Text to Speech and Voice Cloning software, offering captivating, immersive, and lifelike voices for creators and publishers seeking narrative excellence.
          </h2>
        </div>
        <div className="bg-gray-200 p-4">
          {/* Content for the second column */}
        </div>
      </div>

      {/* Header */}
      <div className='mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0'>

      </div>
    </div>
  )
}
