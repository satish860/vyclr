"use client";

import useScroll from './lib/use-scroll';
import clsx from 'clsx';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PlayIcon, RefreshCwIcon, Download } from 'lucide-react';


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
        <div className="p-4">
          <h1 className='mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]'>
            Unleash Lifelike Storytelling
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA]'>Excellence</span>
          </h1>
          <h2 className='mt-5 text-gray-600 sm:text-xl'>
            Unleash unparalleled storytelling with our cutting-edge Text to Speech and Voice Cloning software, offering captivating, immersive, and lifelike voices for creators and publishers seeking narrative excellence.
          </h2>
        </div>
        <div className="p-4">
          <h2 className='text-lg text-muted-foreground mb-2'>
            Click on the language to Generate Random Contents in that language
          </h2>
          <div className='flex flex-wrap gap-2 mb-4'>
            <Badge variant="secondary">English</Badge>
            <Badge variant="secondary">German</Badge>
            <Badge variant="secondary">Polish</Badge>
            <Badge variant="secondary">Spanish</Badge>
            <Badge variant="secondary">Italian</Badge>
            <Badge variant="secondary">French</Badge>
            <Badge variant="secondary">Portuguese</Badge>
            <Badge variant="secondary">Hindi</Badge>
          </div>
          <Card className='bg-white shadow-2xl rounded-md h-full'>
            <CardContent className='w-full flex flex-col h-full'>
              <div className='flex-grow'>
                <textarea
                  className="font-serif text-lg bg-transparent p-2 w-full h-36 max-h-96  resize-none focus:outline-none overflow-hidden"
                  maxLength={333}
                  placeholder="Vyclr enables you to convert any length of text into high-quality voice output, 
              effortlessly aligning the spoken words with their corresponding intonation and expression. 
              For optimal performance, 
              Vyclr excels when processing longer texts, so please input a few sentences for a 
              satisfying experience." />
              </div>
              <div className='flex justify-between p-3'>
                <select className="border-none focus:outline-none bg-transparent text-sm">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <p>33/333</p>
              </div>

              <Separator />
              <div className='flex flex-row items-center gap-3 w-full'>
                <div className="w-full">
                  <audio id="audioPlayer" className="w-full">
                    <source src="your-audio-file.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  <div className="flex items-center  mt-4">
                    <button>
                      <PlayIcon size={24} />
                    </button>
                    <input type="range" className="flex-grow h-1 overflow-hidden appearance-none bg-gray-200 rounded w-full" />
                    <button className='mx-2'>
                      <RefreshCwIcon size={24} />
                    </button>
                    <button>
                      <Download size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Header */}
      <div className='mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0'>

      </div>
    </div>
  )
}
