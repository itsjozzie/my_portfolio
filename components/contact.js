import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsFillPersonLinesFill, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const contact = () => {

    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            'service_odcjahp',
             'template_crj6k2r',
              form.current, 
              'tU_ZBoY73TOiN6WXa',
              )
          .then((result) => {
              console.log(result.text);
              console.log("message sent successfully")
          }, (error) => {
              console.log(error.text);
          }
          );
          e.target.reset()
      };
  return (
    <div id='contact' className='w-full lg:h-screen md:h-screen p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-ful'>
            <p className='uppercase text-2xl tracking-[20px] text-gray-500'>
                Contact me
            </p>
            <h2 className='py-4'>
                Let's Get In Touch 
            </h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-2xl shadow-gray-400 rounded-2xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-2xl hover:scale-105 ease-in duration-300'
                             src="/../public/images/contact.jpg"
                             alt="/" 
                             width='1240'
                             height='1249'
                             />
                        </div>
                        <div>
                            <h2 className='py-2'>Joseph Maguguli</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I am available for freelance or full-time position. Contact me and let's talk</p>
                            
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Let's Connect</p>
                    </div>
                    <div className='flex items-center justify-between py-4'>
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
                            <Link href='/'>
                                 <BsWhatsapp/>
                            </Link>
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

                
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-2xl shadow-gray-400 rounded-2xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            
                            <div className=''>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Name </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="user_name" required/>
                                    
                                </div>
                                
                            </div>
                            <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>email </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="user_email" required />
                                    
                            </div>
                            <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>subject </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" required/>
                                    
                            </div>
                            <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>message</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300 ' name="message" required/>
                                    
                                    
                            </div>
                            <button type="submit" className='w-full p-4 mt-8 '>SEND MESSAGE</button>
                        </form>
                        
                    </div>
                    
                </div>
                    
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#06141d]' size={30}/>
                    </div>
                </Link>
            </div>
            <div className='flex justify-center py-12'>
                <p className='text-xl tracking-widest text-gray-500'>Copyright &copy; ItsJoe 2023</p>
                
            </div>
            
        </div>
        
    </div>
    
  )
}

export default contact