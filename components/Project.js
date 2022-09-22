import {useEffect, useRef} from 'react';
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye, AiOutlineUpload } from 'react-icons/ai'


const Project = () => {
  return (
    <div>
            <h2 style={{textAlign: 'center'}} className='px-4 py-4 text-2xl tracking-wider items-center justify-center border-b'>All My projects Done  </h2>
            <p style={{textAlign: 'center'}} className='px-4 text-xl   sm:pr-20 py-2 flex items-center justify-center'>A passionate individual who always thrives to work on end to end products 
            which develop sustainable and
             scalable social and technical
              systems to create impact.</p>
        <div className='flex  items-center justify-center py-4'> 
        <Link href='https://github.com/abdillah14'>
            <button  className='flex items-center justify-center  p-3 w-[30%] hover:scale-95 ease-in duration-300 mt-4'> <p>See my project</p>   <AiOutlineEye className='pl-2' size={30}/></button>        
        </Link>   
        </div>
    </div>
  )
}

export default Project