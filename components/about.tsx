import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import HeroImage from '../public/images/4.jpg'

type Props = {}

export default function about({}: Props) {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
     <div className='max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8 ml-2  px-2 py-16 w-ful'>
      
      <div className='col-span-2'>
        <p className='uppercase text-2xl tracking-[20px] text-gray-500'>
          about me
        </p>
        <h2 className='py-4'>
          Who I am
        </h2>
        <p className='py-2 text-gray-700'>
          I am a Software Developer from Tanzania.
        </p>
        <p className='py-2 text-gray-700'>
          I have earned experience in:
        </p>
        
        <ul className=''>
          <li className='list-disc ml-10'>Web Development</li>
          <li className='list-disc ml-10'>Mobile Development</li>
          <li className='list-disc ml-10'>Graphic Design</li>
        </ul>
        
        <Link href='/#contact'>
          <button className='heroButton  ml-30'>Hire me</button>
        
        </Link>
        
        
      </div>
      <div className=' shadow-2xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
      <Image
            className=' rounded-full h-310 w-310'
            src={HeroImage} 
            alt={''}
            />
      </div>
     </div>
    </div>
  )
}