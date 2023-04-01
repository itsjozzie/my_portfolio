import React from 'react'
import HtmlImage from '../public/skills/html.png'
import CssImg from '../public/skills/css.png'
import JavaImg from '../public/skills/javascript.png'
import ReactImg from '../public/skills/react.png'
import TailImg from '../public/skills/tailwind.png'
import NextImg from '../public/skills/nextjs.png'
import Image from 'next/image'


type Props = {}

export default function skills({}: Props) {
  return (
    <div id='skills' className='w-full lg:h-screen p-2  md:h-screen  py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full m-auto px-2 py-16 w-ful'>
        <p className='uppercase text-2xl tracking-[20px] text-gray-500'>
          skills
        </p>
        <h2 className='py-4'>
          what i can do
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4'>

            <div className='m-auto h-16 w-16'>
              <Image src={HtmlImage} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>

          </div>

          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4'>
            <div className='m-auto h-16 w-16'>
              <Image src={CssImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>
          </div>

          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4 '>
            <div className='m-auto h-16 w-16'>
              <Image src={JavaImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>JAVASCRIPT</h3>
            </div>

          </div>

          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4 '>

            <div className='m-auto h-16 w-16'>
              <Image src={ReactImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>REACT</h3>
            </div>
          </div>

          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4'>
            <div className='m-auto h-16 w-16'>
              <Image src={TailImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>TAILWIND</h3>
            </div>

          </div>

          <div className='grid grid-cols-2 p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300 items-center justify-center gap-4'>

            <div className='m-auto h-16 w-16'>
              <Image src={NextImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>NEXTJS</h3>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}