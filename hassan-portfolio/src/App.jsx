import Profile from './Profile.png'
export default function Home(){
  return(
    <div className="bg-[#1f1f1f] w-screen h-screen">
        <img src={Profile} alt="Profile" className='w-150  absolute right-0 top-[10%]' />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#000000]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
    </div>
  )
}