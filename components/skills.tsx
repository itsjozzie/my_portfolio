import Image from 'next/image'
import React from 'react'

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
          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/html.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/css.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/javascript.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/react.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/tailwind.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/skills/nextjs.png' 
                alt=''
                width='64'
                height='64'
                />
                
              </div>
              <div className='flex flex-col items-center 'justify-center>
                <h3>NEXTJS</h3>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  )
}