import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import ReactTypingEffect from 'react-typing-effect';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>This is my own portfolio</p>
            <h1 className='py-4 text-[#3a3e59]'>Hi, I'm <span className='text-[#516ce5]'>Abdillah Ally</span> </h1>
            <h1 className='py-2 text-[#3a3e59]'>A <ReactTypingEffect text={["Web Developer...", "Mobile Developer..."]} speed={200} typingDelay={1000} eraseDelay={1000} /> </h1>
            <p className='py-4 text-[#3a3e59] max-w-[70%] m-auto tracking-widest'>
                I'm a web and mobile developer using React 
                for front-end & responsive web app
                and react native for native mobile application...
            </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
               <Link href='https://www.linkedin.com/mwlite/in/njopeka-abdillah-ally-77128223b'>
                <FaLinkedinIn />
               </Link>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <Link href='https://github.com/abdillah14'>
                 <FaGithub />
                </Link>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Main