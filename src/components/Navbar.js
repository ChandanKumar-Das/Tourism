import { logo } from "../constants/constant"
import { navcontents } from "../constants/constant"
// import { MdKeyboardArrowDown } from "react-icons/md";

export function Navbar(){
    
    return(
        <>
          <div className="w-full p-4 bg-white sticky top-0 z-[999] shadow-md">
            <div className="max-w-[1250px] mx-auto">
            <div className="flex ">
            <div className="text-left w-[30%]">
                <img src={logo} className="w-[35%] cursor-pointer" alt="logo"/>
            </div>
            <div className="text-right flex justify-center items-center w-full">
              <div className="hidden md:block">
                <ul className="flex gap-4  ">
                    {navcontents.navdata.map((item,index)=>(
                       <li 
                       className="flex items-center cursor-pointer gap-1 text-[#454442] hover:text-[#6eb43f] font-semibold font-[Haboro-Soft] text-[17px] group" 
                       key={index}>
                       {item.name}
                       {item.name === 'Blog' ? '' : (
                        //  <MdKeyboardArrowDown 
                        //    className="text-[30px] transition duration-500 group-hover:rotate-[178deg]" 
                        //  />
                        <img className="w-[20px] transition duration-500 group-hover:rotate-[178deg]" 
                        src="https://africanscenicsafaris.com/images/down-arrow-svgrepo-com.svg" alt="img"/>
                       )}
                     </li>
                     
                    ))
                    } 
                </ul>
                </div>
                <div className="uppercase transition duration-500 ease-in-out ml-2 font-semibold cursor-pointer font-[Haboro-Soft] text-[17px] px-3 py-2 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">{navcontents.sendAnInquary}</div>
            </div>
            </div>
            </div>
          </div>
        </>
    )
}