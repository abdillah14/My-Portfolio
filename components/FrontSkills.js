import React from 'react'
import { TbBrandJavascript, TbBrandReactNative } from 'react-icons/tb'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si'
const FrontSkills = () => {
  return (
    <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 '>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={jsImg} width='50px' height='50px' alt='/' /> */}
                   <TbBrandJavascript size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Javascript</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={jsImg} width='50px' height='50px' alt='/' /> */}
                   <SiTypescript size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Typescript</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={reactImg} width='50px' height='50px' alt='/' /> */}
                   <FaReact size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> React</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={windImg} width='50px' height='50px' alt='/' /> */}
                   <SiTailwindcss size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Tailwind</h3>
                </div>
             </div>
           </div>
           
        </div>
    </div>
  )
}

export default FrontSkills