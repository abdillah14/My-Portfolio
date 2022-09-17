import Image from 'next/image'
import React from 'react'


const Skill = () => {
  return (
    <div id='Skill' className='w-full md:h-screen p-2'>
    
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h2 style={{textAlign: 'center'}} className='py-2 text-2xl tracking-wider items-center justify-center border-b'>What I Can Do</h2>
        <p className='py-4 uppercase tracking-widest text-[#5651e5]'>Skills</p>    
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/js.jpg' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Javascript</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/nodejs.png' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Node.js</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/react.png' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> React</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/express.png' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Express js</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/react-native.png' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> React Native</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/mongodb.jpg' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> MongoDb</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/firebase.jpg' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Firebase</h3>
                </div>
             </div>
           </div>
           <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                   <Image src='/../public/assets/tailwind.jpg' width='50px' height='50px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> Tailwind</h3>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Skill