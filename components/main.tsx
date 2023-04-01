import { BsFacebook, BsFillPersonLinesFill, BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

import { AiOutlineMail } from 'react-icons/ai'
import BackgroundCircles from './BackgroundCircles'
import HeroImage from '../public/images/1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function hero({}: Props) {
  const [text, count] = useTypewriter({
      words: [
          "Hi, I'm JOSEPH ",
          "A Software Developer",
          
      ],
      loop: true,
      delaySpeed: 2000,

  });
return (
  <div id='main' className='w-full h-screen text-center '>
        <div className='max-w-[1240px]  w-full mx-auto p-2 h-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
           
            <BackgroundCircles />
            
            <Image className='relative rounded-full h-32 w-32  mt-52 object-cover'
            src={HeroImage} alt={''}/>
            <div>
            <h2 className='text-sm uppercase text-gray-600 pb-2 tracking-widest'>Let's build something together</h2>
            <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                
            </h1>
            <div className='flex items-center justify-between max-w-[330px] m-auto mt-20'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Link href='https://www.instagram.com/j.o.z.z.i.e/'>
                        <BsInstagram/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Link href='https://github.com/joe2113'>
                        <FaGithub/> 
            
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsWhatsapp/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Link href='https://web.telegram.org/z/'>
                            <FaTelegram/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Link href='https://web.facebook.com/profile.php?id=100015951318096'>
                         <BsFacebook/>
                    </Link>
                </div>
                
                
            </div>
            
            </div>
            
            
            
        </div>
        
        
        
    </div>
);
}
