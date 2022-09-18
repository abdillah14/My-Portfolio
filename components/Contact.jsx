import emailjs from '@emailjs/browser';
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillHeart, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import Toast from './Toast';

//service_egntg8g serviceId
//template_2ktytz4 templteId
//9e7lEB8tLO0_SyhcU publickey
//1ZnTtys5LTKH81YONEphv privteKey

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  
    emailjs.sendForm('service_egntg8g', 'template_2ktytz4', form.current, '9e7lEB8tLO0_SyhcU')
      .then((result) => {
        result.text ? `${<Toast />}` : ''
          alert(result.text)
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  return (
    <div id='Contact' className='w-full lg:h-screen'>
      <h2 style={{textAlign: 'center'}} className='py-5 text-2xl tracking-wider items-center justify-center border-b'>Get In Touch</h2>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full  '>
         {/* <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact me</p>  */}
        
        <div className='grid lg:grid-cols-5 gap-8 pt-4'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div className='items-center justify-center'>
                        <Image className='rounded-xl hover:scale-105  ease-in duration-300' src='/../public/assets/progra.jpg' alt='/' width='294' height='171' />
                    </div>
                    <div>
                        <h2 className='py-2'> Name Here</h2>
                        <p>Web | mobile developer</p>
                        <p className='py-4 text-[#3a3e59]'>I am available for freelance and full-time position. Contact me and Let's talk</p>
                    </div>
                    <div>
                    <p className='uppercase pt-8'>Connect with me</p>
                    <div className='flex items-center justify-around py-4'>           
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <Link href='https://twitter.com/Abdillahally10'>
                            <FaTwitter /> 
                            </Link> 
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <Link href='https://github.com/abdillah14'>
                              <FaGithub />
                           </Link> 
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.instagram.com/__abdullahally/'>
                               <AiOutlineInstagram />
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>
                </div>            
            </div>
            {/* right */}
            <div className='col-span-3 w-full h-auto '>
              <div className='p-4'>
                <form ref={form}>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                         <div className='flex flex-col'>
                            <input className='border-2 rounded-2xl p-2 flex border-gray-300' type="text" placeholder=' your name...' name="name" id="name" />
                         </div>
                         <div className='flex flex-col'>
                            <input className='border-2 rounded-2xl p-2 flex border-gray-300' type="text" placeholder=' your phone number...' name="phone" id="phone" />
                         </div>
                    </div>
                    <div className='flex flex-col py-2'>
                            <input className='border-2 rounded-2xl p-2 flex border-gray-300' type="email" placeholder=' your email...' name="email_id" id="email_id" />
                         </div>
                         <div className='flex flex-col py-2'>
                            <input className='border-2 rounded-2xl p-2 flex border-gray-300' type="text" placeholder=' your Subject...' name="Subject" id="Subject" />
                         </div>
                         <div className='flex flex-col py-2'>
                            <textarea className='border-2 rounded-2xl p-2 flex border-gray-300' placeholder=' your message...' name="message" id="message" rows='4'></textarea>
                         </div>
                         <button onClick={sendEmail} className='flex items-center justify-center  p-3 w-full hover:scale-95 ease-in duration-300 mt-4'> <p>send</p>  <IoIosSend /></button>
                </form>
              </div>
            </div>
        </div>
        <div className='flex justify-center py-2 '>
            <Link href='/' className=' '>
                <HiOutlineChevronDoubleUp  className='text-[#3a3e59] animate-bounce '/>
            </Link>
        </div>
      </div>
      <div className='py-2 flex flex-row items-center justify-center '>
        <p className='text-[#3a3e59] flex'>Made by  <AiFillHeart color='red' size={25} className='px-1' /> | Created By <span className='px-2 font-bold font-signature text-xl'>Abdillah</span>.</p>
    </div>
    </div>
  )
}

export default Contact