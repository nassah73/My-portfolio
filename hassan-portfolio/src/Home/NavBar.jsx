import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
export default function Navbar(){
     const NavLink=[{name:'home',path:"/"},{name:'About',path:"/About"},{name:'Projects',path:"/Projects"},{name:'Skills',path:"/Skills"},{name:'Contact',path:"/Contact"}]
    return(
        <>
                <img src={logo} alt="logo" className='w-40 absolute ml-20'/>
                <nav className='absolute'>
                  <ul className='flex justify-end w-screen '>
                    {navBar.map((item,index)=>{
                      return(
                        <NavLink to={item.path} className='text-white mr-20 mt-5 hover:text-[#10b981] hover:cursor-pointer ' key={index}>{item.name}</NavLink>
                      )
                    })}
                     <li><a href="https://github.com/nassah73"><FaGithub className='text-white size-7 mt-4.5 mr-5 hover:cursor-pointer hover:text-gray-400'/></a></li>
                  </ul>
                </nav>
    </>
    )
}