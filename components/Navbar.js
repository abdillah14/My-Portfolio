import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import logo from "../public/assets/logo-new.png"


function Navbar() {
  const [Nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  useEffect(() => {
    const handleShadow = () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])
  
  const  HandleNav = () => {
    setNav(!Nav)
  }
  return (
    <div style={{backgroundColor: '#1f1527'}} className={shadow ? 'fixed w-full h-15 shadow-xl z-[100]' : 'fixed w-full h-15  z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
         <Image src={logo} alt="/" width='135' height='100' className="w-52 h-auto" />
         {/* <h1 className='text-3xl font-signature py-3 px-5'> Abdillah </h1> */}
         <div className='px-5'>
          <ul className='hidden md:flex'>
            <Link href='/#Home' passHref >
             <li className='ml-10 text-sm text-white uppercase  hover:scale-105 ease-out duration-300 p-3 py-2 rounded-md hover:bg-gray-700 transition '> Home</li>
            </Link>
            <Link href='/#About' passHref>
             <li className='ml-10 text-sm text-white uppercase hover:scale-90 ease-out duration-300 p-3 py-2 rounded-md hover:bg-gray-700 transition '> About</li>
            </Link>
            <Link href='/#Skill' passHref>
             <li className='ml-10 text-sm text-white uppercase hover:scale-90 ease-out duration-300 p-3 py-2 rounded-md hover:bg-gray-700 transition '> Skills</li>
            </Link>
            <Link href='/#Contact' passHref>
             <li className='ml-10 text-sm text-white uppercase hover:scale-90 ease-out duration-300 p-3 py-2 rounded-md hover:bg-gray-700 transition '> Contact</li>
            </Link>
          </ul>
         </div>
         <div onClick={HandleNav} className='md:hidden'>
          <AiOutlineMenu  size={25}/>
         </div>
        </div>  
        <div className={Nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
         <div className={Nav 
         ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fafaf2] p-10 ease-in duration-500' 
         : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
            {/* <Image src="/../public/assets/logos.png" alt="/" width='97' height='45' /> */}
            <h1 className='text-3xl font-signature py-3 px-2'> Abdillah </h1>
            <div onClick={HandleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%]  md:w-[90%] py-4 text-center'> Enjoy My portfolio | Enjoy coding</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/#Home' >
             <li onClick={()=> setNav(false)} className='py-4 text-sm text-white hover:border-b'> Home</li>
            </Link>
            <Link href='/#About' >
             <li onClick={()=> setNav(false)} className='py-4 text-sm text-white hover:border-b'> About</li>
            </Link>
            <Link href='/#Skill' >
             <li onClick={()=> setNav(false)} className='py-4 text-sm text-white hover:border-b'> Skills</li>
            </Link>
            <Link href='/#Contact' >
             <li onClick={()=> setNav(false)} className='py-4 text-sm text-white hover:border-b'> Contact</li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase tracking-widest'>{`Let's`} Connect with me </p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[]85%'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
          </div>
         </div>
        </div>     
    </div>
  )
}

export default Navbar