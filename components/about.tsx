import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import HeroImage from '../public/images/4.jpg'

type Props = {}

export default function about({}: Props) {
  return (
    <div id='about' className='w-full md:h-screen px-5 md:px-10 2xl:px-16 flex items-center py-16 '>
     <div className='max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8 ml-2  px-2 py-16 w-ful'>
      
      <div className='col-span-2'>
        <p className='uppercase text-xl tracking-[10px] text-gray-500'>
          about me
        </p>
        <h2 className='py-3'>
          Who am I
        </h2>
        <p className='py-2 text-gray-700'>
          I am a Software Developer from Tanzania.
        </p>
        <p className='py-2 text-gray-700'>
          I have earned experience in:
        </p>
        
        <ul className='pb-5'>
          <li className='list-disc ml-10'>Web Development</li>
          <li className='list-disc ml-10'>Mobile Development</li>
          <li className='list-disc ml-10'>Graphic Design</li>
        </ul>
        
        <Link href='/#contact'>
          <button className='heroButton  ml-30'>Hire me</button>
        
        </Link>
        
        
      </div>
      <div className='flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
      <Image
      // I have a suggestion here, don't use a full image, use a cropped image
            className=' rounded-2xl h-310 w-310'
            src={HeroImage} 
            alt={''}
            />
      </div>
     </div>
    </div>
  )
}