import { GuideData } from "../constants/constant"

export const Guide = ()=>{
    return(
        <>
        <div className="max-w-[1250px] mx-auto  pb-10">
         <div className="max-w-[85%] mx-auto pt-[150px]">
            <div className="flex-cols justify-center items-center">
            <h2 className="uppercase pl-6 text-center text-[#2d3e40] text-[36px] font-semibold font-montserrat ">{GuideData.headline}</h2>
            <div className="flex  gap-4 justify-center items-center px-16 pt-4">
                <img src="https://africanscenicsafaris.com/images/contacts-r-icon.svg" alt="logo"/>
                <h3 className="uppercase text-[#15a1b4] font-medium text-[120%] font-haboro-soft">{GuideData.adventures}</h3>
            </div>
            <p className="pt-4 text-[22px] leading-[1.5] text-black">{GuideData.paragraph1}</p>
            <p className="font-normal text-[19px] text-[#555] font-haboro-soft pt-4">{GuideData.paragraph2}</p>
            <p className="font-normal text-[19px] text-[#555] font-haboro-soft pt-4">{GuideData.paragraph3}</p>
            </div>
         </div>
         <ul className="grid grid-cols-3 gap-10 mt-10">
            {GuideData.moredata.map((item,index)=>(
                <li className="flex items-center pb-5" key={index}>
                    <img src={item.image} className="w-[25px] mr-2" alt="img"/>
                    <span className="pl-4 cursor-pointer border-l-2 border-yellow-200 font-semibold text-[#00535e] hover:text-[#6eb43f] text-xl">{item.mane}</span>
                </li>
            ))}
         </ul>
         <div className="flex justify-center items-center mt-10 ">
            <div 
             className=" transition duration-500 ease-in-out  gap-3 uppercase ml-2 font-semibold cursor-pointer font-[Haboro-Soft] text-[17px] px-7 py-4 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/file-info-alt-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div>{GuideData.moreaboutus}</div>
              
            </div>
            <div 
             className="transition duration-500 ease-in-out gap-3 uppercase ml-2 font-semibold cursor-pointer font-[Haboro-Soft] text-[17px] px-7 py-4 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div>{GuideData.sendAnInquary}</div>  
            </div>
         
         </div>
        </div>
        </>
    )
}