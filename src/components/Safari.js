import { safaridata } from "../constants/constant"
import { Card1 } from "./cards/card1"

export function Safari () {
       return(
        <>
       <div className="max-w-[1250px] mx-auto  pb-10">
        <div className="max-w-[85%] mx-auto pt-[50px]">
          <div className="flex-cols justify-center items-center">
            <h2 className="uppercase pl-6 text-center text-[#2d3e40] text-[36px] font-semibold font-montserrat ">
              {safaridata.titel}
            </h2>
            <div className="flex  gap-4 justify-center items-center px-16 pt-4">
              <img
                src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
                alt="logo"
              />
              <h3 className="uppercase text-[#15a1b4] font-medium text-[120%] font-haboro-soft">
              {safaridata.subTitle}
              </h3>
            </div>
            <p className="pt-4 flex justify-center text-center leading-[1.5] text-[#555] font-normal text-[20px] font-[Haboro-Soft] normal-case">
            {safaridata.paragraph1}
            </p>
            <p className="pt-4 flex justify-center text-center leading-[1.5] text-[#555] font-normal text-[20px] font-[Haboro-Soft] normal-case">
            {safaridata.paragraph2}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-4 mt-4 mb-6">
            <Card1 data={safaridata.cardData}/>
        </ul>

        <div className="flex justify-center items-center mt-20 ">
            <div 
             className=" transition duration-500 ease-in-out  gap-3 uppercase ml-2 font-semibold cursor-pointer font-[Haboro-Soft] text-[17px] px-7 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/file-info-alt-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div>{safaridata.moreaboutus}</div>
              
            </div>
            <div 
             className="transition duration-500 ease-in-out gap-3 uppercase ml-2 font-semibold cursor-pointer font-[Haboro-Soft] text-[17px] px-7 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div>{safaridata.sendAnInquary}</div>  
            </div>
         
         </div>
      </div>
        </>
       )
}