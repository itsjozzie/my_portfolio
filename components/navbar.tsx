import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {BsFacebook, BsFillPersonLinesFill, BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { useEffect, useState } from "react";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function navbar({}: Props) {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect (() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)

    },[])

    
  return (
    <div 
    className={
         shadow? 'fixed w-full h-20 shadow-2xl z-[100] bg-[#ecf0f3]' :
                 'fixed w-full h-20  z-[100] bg-[#ecf0f3]'
                 }>
        
        {/* normal navbar */}
        <div className='flex justify-between text-center w-full h-full px-2 2xl:px-16'>
            
            {/* logo */}

           <Link href='/'>
                  <Image className='rounded-full'
                    src='/../public/images/logo.jpg' alt='' 
                    width='70' 
                    height='70' 
                    />
           
           </Link>

            {/* nav */}

            <div>
                <ul className='hidden md:flex pt-7'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b '>home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>about</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>skills</li>
                    </Link>
                    <Link href='/#services'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Services</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden pt-7 cursor-pointer' >
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            
        </div>
        
        {/* side-nav */}
        
        <div className={ nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' :''}>
            <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500' 
                                : 'fixed left-[-100%] top-0  p-4 ease-in duration-500'}>
                <div>
                    {/* logo */}
                    <div className='flex w-full justify-between items-center'>
                        <Image className='rounded-full'
                        src='/../public/images/logo.jpg' alt='' 
                        width='64' 
                        height='64'
                        />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                        
                    </div>
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something together</p>
                    </div>
                </div>
                <div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link onClick={() => setNav(false)} href='/'>
                                <li className='py-2 text-sm ' >home</li>
                            </Link>
                            <Link onClick={() => setNav(false)} href='/#about'>
                                <li className='py-2 text-sm ' >about</li>
                            </Link>
                            <Link onClick={() => setNav(false)} href='/#skills'>
                                <li className='py-2 text-sm ' >skills</li>  
                            </Link>
                            <Link onClick={() => setNav(false)} href='/#services'>
                                <li className='py-2 text-sm ' >Services</li>
                            </Link>
                            <Link onClick={() => setNav(false)} href='/#contact'>
                                <li className='py-2 text-sm ' >contact</li>
                            </Link>
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase tracking-widest text-[#06141d] font-semibold'>let's connect</p>
                            
                            <div  className='flex items-center justify-between my-2 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                     <Link href='https://www.instagram.com/j.o.z.z.i.e/'>
                                         <BsInstagram/>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/joe2113'>
                                         <FaGithub/> 
            
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsWhatsapp/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://web.telegram.org/z/'>
                                        <FaTelegram/>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://web.facebook.com/profile.php?id=100015951318096'>
                                        <BsFacebook/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}