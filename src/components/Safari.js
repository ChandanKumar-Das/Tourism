import { safaridata } from "../constants/constant"
import { Flag } from "./Animations/Flag"
import { Card1 } from "./cards/card1"

export function Safari () {
       return(
        <>
       <div className="max-w-[1250px] mx-auto pt-6 md:pt-0 pb-10">
        <div className="max-w-[85%] mx-auto md:pt-[70px] lg:pt-[80px] text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2d3e40] text-2xl md:text-3xl lg:text-[36px] font-semibold font-montserrat">
              {safaridata.titel}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <Flag/>
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-1xl font-haboro-soft">
                {safaridata.subTitle}
              </h3>
            </div>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-black">
              {safaridata.paragraph1}
            </p>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-black">
              {safaridata.paragraph2}
            </p>
          </div>
        </div>
        
            <Card1 data={safaridata.cardData}/>

      

         <div className="flex flex-wrap justify-center items-center gap-4 mt-10 px-4">
          <div
            className="transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white"
          >
            <img
              src="https://africanscenicsafaris.com/images/file-info-alt-svgrepo-com.svg"
              width="25px"
              alt="icon"
            />
            <div>{safaridata.moreaboutus}</div>
          </div>
          <div
            className="transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white"
          >
            <img
              src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg"
              width="25px"
              alt="icon"
            />
            <div>{safaridata.sendAnInquary}</div>
          </div>
        </div>
      </div>
        </>
       )
}