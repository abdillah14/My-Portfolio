import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { SiReact, SiFirebase, SiRedux } from 'react-icons/si'

const MobileSkills = () => {
  return (
    <div>
         <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 '>
           
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={reactImg} width='50px' height='50px' alt='/' /> */}
                   <SiReact size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> React Native</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={NodeJsImg} width='50px' height='50px' alt='/' /> */}
                   <FaNodeJs  size={50}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Node.js</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={fireImg} width='50px' height='50px' alt='/' /> */}
                   <SiFirebase size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Firebase</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={fireImg} width='50px' height='50px' alt='/' /> */}
                   <SiRedux size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Redux</h3>
                </div>
             </div>
           </div>
           
        </div>
    </div>
  )
}

export default MobileSkills