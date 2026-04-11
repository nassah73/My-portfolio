import Navbar  from "../Home/NavBar"
import Img from './profile2.jpeg'
export default function About(){
    return(
        <>
        <div>
        <Navbar/>
        <div className="w-[1200px]  justify-self-center relative  bg-[#1f1f1f] ">
            <div className=" w-[1200px]   justify-self-center  flex  gap-10  relative top-[100px]">
            <nav className=" relative w-[50%] ">
            <div className="bg-[#10b981] w-[100%] h-100 rounded-xl relative  z-0 rotate-175"></div>
            <img src={Img} alt="" className="w-[100%] h-100 object-cover rounded-xl absolute top-[10px] z-1 "/>
             </nav>
             <nav className="w-[100%] relative w-[600px]  text-white font-[700]">
                 <div className="absolute w-[100%] z-0 h-100 bg-[#10b981] rounded-xl rotate-5 justify-self-center"></div>
                 <nav className="relative  w-[100%] h-100 justify-self-center z-4 bg-green-700 rounded-xl">
                    <h1 className="relative top-5 left-5 text-2xl">About Me</h1>
                  <p className="leading-[30px] my-7 ml-5" >
                   I am an IT student and aspiring software developer. My passion lies in building efficient full-stack 
                   applications and exploring the world of DevOps to automate workflows. I enjoy
                    tackling complex challenges and constantly learning new technologies like Java, React, and CI/CD tools to deliver high-quality software solutions.
                  </p>
                  </nav>
             </nav>
               
             </div>
              <section className="grid grid-cols-5 grid-rows-2   mt-40 bg-amber-700 w-[100%]">
                   <div className="bg-amber-300 h-40 w-40"> helo</div>
                    <div className="bg-amber-300 h-20"> helo</div>
                </section>
        </div>
        </div>
        </>
    )
}