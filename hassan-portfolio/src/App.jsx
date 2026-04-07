import Profile from './Profile.png'
import { FaGithub } from 'react-icons/fa';
import logo from './logo.png'
 const navBar=['home','About','Projects','Skills','Contact']
export default function Home(){
  return(
    <div className="bg-[#1f1f1f] w-screen h-screen z-0 relative">
        <img src={Profile} alt="Profile" className='w-150  absolute right-0 top-[10%] z-0' />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#000000]/50 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-0"></div>
        <img src={logo} alt="logo" className='w-40 absolute ml-20'/>
        <nav className='absolute'>
          <ul className='flex justify-end w-screen '>
            {navBar.map((item,index)=>{
              return(
                <li className='text-white mr-20 mt-5 hover:text-[#10b981] hover:cursor-pointer ' key={index}>{item}</li>
              )
            })}
             <li><a href="https://github.com/nassah73"><FaGithub className='text-white size-7 mt-4.5 mr-5 hover:cursor-pointer hover:text-gray-400'/></a></li>
          </ul>
        </nav>
        <div className=' absolute text-white top-1/3 left-20 leading-7 capitalize font-[600] text-xl'>
            <p >hi there !</p>
            <p>i am <span className='text-[#10b981] font-[700]'>HASSAN ES-SEBAIY</span></p>
             <h1 className='w-110 text-2xl'>Full Stack & Software Developer specialized in Java, React, and Node.js.</h1>
            <button className='bg-[#10b981] px-5 py-1 mt-5 rounded-[5px] hover:bg-green-500'>contact me </button>
        </div>
        <div className='absolute text-white bottom-1/5 flex  '>
          <nav className='border-r-2 pr-2 ml-20 '>
            <p className='capitalize'>email</p>
            <p className='text-gray-400'>hassansobai6@gmail.com</p>
          </nav>
           <nav className='border-r-2 pr-2 ml-5 '>
            <p className='capitalize'>phone</p>
            <p className='text-gray-400'>+212-712613884</p>
          </nav>
          <nav className=' pr-2 ml-5 '>
            <p className='capitalize'>location</p>
            <p className='text-gray-400'>Taroudant,Morocco</p>
          </nav>
        </div>
    </div>
  )
}