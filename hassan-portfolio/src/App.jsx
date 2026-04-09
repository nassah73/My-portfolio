import Profile from './Profile.png'
import Typewriter from 'typewriter-effect';
import { FaGithub } from 'react-icons/fa';

import Navbar from './Home/NavBar'

export default function Home(){
  return(
    <div className="bg-[#1f1f1f] w-screen h-screen z-0 relative">
        <img src={Profile} alt="Profile" className='w-150  absolute right-0 top-[10%] z-0' />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#000000]/50 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-0"></div>
        <Navbar/>
        <div className=' absolute text-white top-1/3 left-20 leading-7 capitalize font-[600] text-xl'>
               <Typewriter
                   onInit={(typewriter) => {
            typewriter
            .typeString('<span class="text-white">Hi There !</span><br/>')
             .pauseFor(500)
             .typeString('<span class="text-white">I Am </span><span class="text-green-400">HASSAN ES-SEBAIY</span><br/>')
             .pauseFor(500)
             .typeString('<span class="text-white text-xl">Full Stack and Software Developer</span><br/>')
             .pauseFor(500)
             .typeString('<span class="text-gray-400 text-lg">Specialized In Java, React, And Node.Js.</span>')
             .start();
        }}
         options={{
             cursor: '▋',
             delay: 50, 
          }}
  />
            <button className='bg-[#10b981] px-5 py-1 mt-5 rounded-[5px] hover:bg-green-500'>contact me </button>
        </div>
        <div className='absolute text-white bottom-1/5 flex  '>
          <nav className='border-r-2 pr-2 ml-20 '>
            <p className='capitalize'>email</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hassansobai6@gmail.com" className='text-gray-400'>hassansobai6@gmail.com</a>
          </nav>
           <nav className='border-r-2 pr-2 ml-5 '>
            <p className='capitalize'>phone</p>
            <a href="https://wa.me/+212712613884" className='text-gray-400'>+212-712613884</a>
          </nav>
          <nav className=' pr-2 ml-5 '>
            <p className='capitalize'>location</p>
            <p className='text-gray-400'>Taroudant,Morocco</p>
          </nav>
        </div>
    </div>
  )
}