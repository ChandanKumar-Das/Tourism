import { AdventureData } from "../constants/constant"
import { Flag } from "./Animations/Flag"
import { Card1 } from "./cards/card1"

export function Adventure () {

 
       return(
        <>
       <div className="max-w-[1250px] mx-auto  pb-4">

        <div className="max-w-[85%] mx-auto md:pt-[40px] lg:pt-[70px] text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2d3e40] text-2xl md:text-3xl lg:text-[36px] font-semibold font-montserrat">
              {AdventureData.titel}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <Flag/>
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-1xl font-haboro-soft">
                {AdventureData.subTitle}
              </h3>
            </div>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-black">
              {AdventureData.paragraph}
            </p>
          </div>
        </div>
     
     <Card1 data={AdventureData.cardData}/>
   
    

      </div>
        </>
       )
}