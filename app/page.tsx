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
    </div>
  )
}
