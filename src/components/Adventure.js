import { AdventureData } from "../constants/constant"
import { Card1 } from "./cards/card1"

export function Adventure () {
       return(
        <>
       <div className="max-w-[1250px] mx-auto  pb-4">
        <div className="max-w-[85%] mx-auto pt-[50px]">
          <div className="flex-cols justify-center items-center">
            <h2 className="uppercase pl-6 text-center text-[#2d3e40] text-[36px] font-semibold font-montserrat ">
              {AdventureData.titel}
            </h2>
            <div className="flex  gap-4 justify-center items-center px-16 pt-4">
              <img
                src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
                alt="logo"
              />
              <h3 className="uppercase text-[#15a1b4] font-medium text-[120%] font-haboro-soft">
              {AdventureData.subTitle}
              </h3>
            </div>
            <p className="pt-4 flex justify-center text-center leading-[1.5] text-[#555] font-normal text-[20px] font-[Haboro-Soft] normal-case">
            {AdventureData.paragraph}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-4 mt-4 mb-6">
            <Card1 data={AdventureData.cardData}/>
        </ul>
      </div>
        </>
       )
}