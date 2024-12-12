import { useEffect, useState } from "react";
import { youtubevideosData } from "../constants/constant"
import { FaYoutube } from "react-icons/fa6";
import { Flag } from "./Animations/Flag";


export function Youtube (){
  
    return(
        <>
         <div className="max-w-[1250px] mx-auto pt-8 pb-10">
          <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <Flag/>
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-3xl font-haboro-soft">
              {'Subscribe to African Scenic Safaris on YouTube'}
              </h3>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {youtubevideosData.map((video) => (
        <div
          key={video.id}
          className="bg-white  overflow-hidden transition-transform transform "
        >
          {/* Video Thumbnail */}
          <div className="">
          <iframe
                className="w-full h-full"
                src={video.thumbnail}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>

          
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
            <p className="text-green-600 text-sm">
              {video.views}, {video.date}
            </p>
          </div>
        </div>
      ))}


    </div>
    <div className="w-full flex justify-center items-center">
          <div 
             className="uppercase items-center transition duration-500 ease-in-out inline-flex mt-8 font-semibold cursor-pointer font-[Haboro-Soft] 
        text-[17px] px-6 py-3 rounded-full  bg-[#6eb43f] hover:bg-[#3c681e] text-white">
              <FaYoutube   className="text-2xl"/>
                <div className="pl-3">{'SUBSCRIBE ON YOUTUBE'}</div>  
            </div>
        </div>
          </div>
        </>
    )
}