import Navbar  from "../Home/NavBar"
import Img from './profile2.jpeg'
export default function About(){
    return(
        <>
        <div>
        <Navbar/>
        <div className="">
            <div className=" w-[1200px]   justify-self-center  flex  gap-10  relative top-[100px]">
            <nav className=" relative ">
            <div className="bg-[#10b981] w-100 h-80 rounded-xl relative  z-0 rotate-175"></div>
            <img src={Img} alt="" className="w-100 h-80 object-cover rounded-xl absolute top-[10px] z-1 "/>
             </nav>
             <nav className="w-[100%] relative  text-white font-[700]">
                 <div className="absolute w-110 z-0 h-80 bg-[#10b981] rounded-xl rotate-5 justify-self-center"></div>
                  <p className="relative  w-110 h-80 justify-self-center z-4 bg-amber-600 rounded-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet, reiciendis aut maxime impedit quos recusandae eius mollitia! Illo est blanditiis, mollitia laboriosam voluptates modi dolorum pariatur inventore commodi facilis.
                  </p>
             </nav>
             </div>
        </div>
        </div>
        </>
    )
}