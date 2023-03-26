import Image from 'next/image'
import React from 'react'

type Props = {}

export default function services({}: Props) {
  return (
    <div id='services' className='md:h-screen p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-2xl tracking-[20px] text-gray-500'>
                Services
            </p>
            <h2 className='py-4'>
                What I Offer
                
            </h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-8 h-auto'>
          <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-8 justify-center h-full items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/service/app-development.png' 
                alt=''
                width='1240'
                height='1240'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Web Development</h3>
              </div>
            </div>
            
          </div>


          <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-8 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/service/android.png' 
                alt=''
                width='1240'
                height='1240'
                />
                
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mobile Development</h3>
              </div>
            </div>
            
          </div>

          <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                src='/../public/service/graphic-designer.png' 
                alt=''
                width='1240'
                height='1240'
                />
                
              </div>
              <div className='flex flex-col items-center 'justify-center>
                <h3>Graphic Designs</h3>
              </div>
            </div>
            
          </div>
        </div>
        </div>
        
    </div>
  )
}