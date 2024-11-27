
import { BannerData } from "../constants/constant"
export function Banner (){
    return (
        <>
        <div className="relative z-50">
        <img src={BannerData.banner} className="h-[600px] w-[100vw]" alt="banner"/>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute top-[45%] left-[17%]">
        <h1 className=" text-white font-bold text-[300%]">{BannerData.content}</h1>
        <div className="uppercase transition duration-500 ease-in-out inline-flex mt-16 font-semibold cursor-pointer font-[Haboro-Soft] 
        text-[17px] px-6 py-2 rounded-full  bg-[#6eb43f] hover:bg-[#3c681e] text-white">
            {BannerData.sendAnInquary}
            </div>
        </div>
         <div className="absolute w-full -bottom-10 flex justify-center items-center ">
              <ul className="flex gap-10 bg-white px-20 rounded-full py-2 shadow-md  justify-center items-center">
               {
                BannerData.addvatises.map((item,index)=>(
                <li key={index} >
                    <img src={item.image} className="cursor-pointer"  width={'50px'} alt="imag"/>
                    </li>
                ))
               }
                </ul>  
         </div>
        </div>
   
        
        </>
    )
}