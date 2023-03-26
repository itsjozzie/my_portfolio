import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2 ],
        opacity:[0.2, 0.2],
        borderRadius: ["20%","20%"],
    }}
    transition={{
        duration: 1.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-40 animate-ping'/>
       {/* <div className='rounded-full border border-[#333333] h-[200px] w-[200px] mt-40 absolute'/> */}
        
    </motion.div>
  );
}