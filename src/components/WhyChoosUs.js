
import { WhyChoosUsData } from "../constants/constant"
import { FcOk } from "react-icons/fc";
import { SiWhatsapp } from "react-icons/si";
export function WhyChooseUs(){
    return(
        <>
        <div className="w-full bg-[#f0f0f0] pb-14">
           <div className="max-w-[1250px] mx-auto">
           <div className="max-w-[85%] mx-auto pt-4 md:pt-[100px] lg:pt-[100px] text-center">

            <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2d3e40] text-2xl md:text-3xl lg:text-[36px] font-semibold font-montserrat">
              {WhyChoosUsData.titel}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <img
                src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
                alt="logo"
                className="w-[40px] md:w-[30px]"
              />
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-1xl font-haboro-soft">
                {WhyChoosUsData.subTitle}
              </h3>
            </div>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-[#555]">
              {WhyChoosUsData.paragraph1}
            </p>
            
          </div>

           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 md:gap-y-4  pt-10">
              
              
              {WhyChoosUsData.listData.map((items,index)=>(
                    
                    <li 
                    key={index}
                    className="text-[16px] text-left  md:text-[19px] font-normal relative text-black font-haboro  pt-3  pl-16 ">{items}
                    <FcOk className="absolute font-bold text-5xl top-0 left-1" />
                    </li>
                    
                ))
              }
           </ul>

           <div className="flex flex-wrap justify-center items-center gap-4 mt-10 px-4 ">
            <div 
             className="
             transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#454442] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/file-info-alt-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div>{WhyChoosUsData.chooseUs}</div>
              
            </div>
            <div 
             className="transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <SiWhatsapp />
                <div>{WhyChoosUsData.whatsapp}</div>  
            </div>
         
         </div>
        
  
          
        </div>
         </div>
         </div>
        </>
    )
}