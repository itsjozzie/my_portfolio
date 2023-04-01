import React from 'react'
import Image from 'next/image'
import WebImg from '../public/service/app-development.png'
import AppImg from '../public/service/android.png'
import GraphicImg from '../public/service/graphic-designer.png'

type Props = {}

export default function services({}: Props) {
  return (
    <div id='services' className='md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] mx-auto m-auto px-2 py-16 '>
            <p className='uppercase text-2xl tracking-[20px] text-gray-500'>
                Services
            </p>
            <h2 className='py-4'>
                What I Offer
                
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto'>
              <div className='grid grid-cols-2 p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 items-center justify-center gap-8'>

                <div className='m-auto h-310 w-310'>
                  <Image src={WebImg} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Web Development</h3>
                </div>

              </div>

              <div className='grid grid-cols-2 p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 items-center justify-center gap-8'>
                <div className='m-auto h-310 w-310'>
                  <Image src={AppImg} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Mobile Development</h3>
                </div>
              </div>

              <div className='grid grid-cols-2 p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 items-center justify-center gap-8'>
                <div className='m-auto h-310 w-310'>
                  <Image src={GraphicImg} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Graphic Designs</h3>
                </div>

              </div>
          
        </div>

      </div>
    </div>
  )
}