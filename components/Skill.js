import Image from 'next/image'
import React from 'react'
// import jsImg from '../public/assets/js.jpg'
//import NodeJsImg from  '../public/assets/nodejs.png'
//import reactImg from '../public/assets/react.png'
//import expressImg from '../public/assets/express.png'
//import nativeImg from '../public/assets/react-native.png'
//import mongoImg from '../public/assets/mongodb.jpg'
//import fireImg from '../public/assets/firebase.jpg'
//import windImg from '../public/assets/tailwind.jpg'
import { TbBrandJavascript, TbBrandReactNative } from 'react-icons/tb'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si'


const Skill = () => {
  return (
    <div id='Skill' className='w-full md:h-screen p-2'>
    
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h2 style={{textAlign: 'center'}} className='py-2 text-2xl tracking-wider items-center justify-center border-b'>What I Can Do</h2>
        <p className='py-4 uppercase tracking-wider text-[#3a3e59] items-center justify-center'>Front-End & Back-end </p>    
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
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
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={nativeImg} width='50px' height='50px' alt='/' /> */}
                   <SiNextdotjs size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Nextjs</h3>
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
                   {/* <Image src={expressImg} width='50px' height='50px' alt='/' /> */}
                   <SiExpress size={50}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Express js </h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   {/* <Image src={mongoImg} width='50px' height='50px' alt='/' /> */}
                   <SiMongodb size={50} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> MongoDb</h3>
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
        </div>
      </div>
    </div>
  )
}

export default Skill