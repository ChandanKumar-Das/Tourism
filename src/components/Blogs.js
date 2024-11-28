import { BlogsData } from "../constants/constant";
import { BiLogoWhatsapp } from "react-icons/bi";
import Draggable from "react-draggable";
import { Flag } from "./Animations/Flag";

export function Blogs() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto pt-16 pb-10">
        {/* <div className="max-w-[85%] mx-auto pt-[150px]"> */}
          

          <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
     
             <Flag/>
   
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-3xl font-haboro-soft">
                {BlogsData.titel}
              </h3>
            </div>

            
           
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4 md:p-0 mt-16 mb-6 ">
            {BlogsData.cardData.map((items, index) => (
              <li
                key={index}
                className="relative overflow-hidden flex items-center cursor-pointer group"
              >
                <img
                  src={items.image}
                  className=" transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  alt="img"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>

                {/* absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 */}

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
                  <div className="transition-transform duration-500 ">
                    <h1 className="uppercase text-white font-bold text-2xl">
                      {items.titel1}
                    </h1>
                    <h3 className=" text-white text-lg font-semibold  pt-2 ">
                      {items.titel2}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        <div className="w-full flex justify-center items-center">
          <div 
             className="uppercase items-center transition duration-500 ease-in-out inline-flex mt-16 font-semibold cursor-pointer font-[Haboro-Soft] 
        text-[17px] px-6 py-3 rounded-full  bg-[#6eb43f] hover:bg-[#3c681e] text-white">
              <BiLogoWhatsapp  className="text-2xl"/>
                <div className="pl-3">{'READ MORE BLOGS'}</div>  
            </div>
        </div>
        </div>
      {/* </div> */}
    </>
  );
}
