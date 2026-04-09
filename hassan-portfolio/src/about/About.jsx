import Navbar  from "../Home/NavBar"
import Img from './profile2.jpeg'
export default function About(){
    return(
        <>
        <div>
        <Navbar/>
        <div className="">
            <div className=" w-[1200px]  bg-amber-500 justify-self-center  flex  gap-10  relative top-[100px]">
            <nav className="bg-amber-200 relative ">
            <div className="bg-[#10b981] w-100 h-80 rounded-xl relative top-1/5 z-0 rotate-175"></div>
            <img src={Img} alt="" className="w-100 h-80 object-cover rounded-xl absolute top-1/5 z-1 "/>
             </nav>
             <nav className="w-[100%] relative">
                 <div cla></div>
                  <p className="relative top-1/5 w-100 justify-self-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet, reiciendis aut maxime impedit quos recusandae eius mollitia! Illo est blanditiis, mollitia laboriosam voluptates modi dolorum pariatur inventore commodi facilis.
                  </p>
             </nav>
             </div>
        </div>
        </div>
        </>
    )
}