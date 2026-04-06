import Profile from './Profile.png'
 const navBar=['home','About','Projects','Skills','Contact']
export default function Home(){
  return(
    <div className="bg-[#1f1f1f] w-screen h-screen z-0 relative">
        <img src={Profile} alt="Profile" className='w-150  absolute right-0 top-[10%] z-0' />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#000000]/50 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-0"></div>
        <nav className='absolute'>
          <ul className='flex justify-end w-screen '>
            {navBar.map((item,index)=>{
              return(
                <li className='text-white mr-20 mt-5 hover:text-[#10b981] hover:cursor-pointer ' key={index}>{item}</li>
              )
            })}

          </ul>
        </nav>
    </div>
  )
}