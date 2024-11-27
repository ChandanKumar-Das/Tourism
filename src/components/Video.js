import { VideoData } from "../constants/constant"
export function Video(){
    return(
        <>
        <div className="relative w-full h-[100vh] mb-[250px]">

        <div className="relative w-full aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/sPwZHYoptfc?autoplay=1&mute=1&loop=1&playlist=sPwZHYoptfc&controls=0&showinfo=0&modestbranding=1&start=17"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      <div className="absolute top-[30%] pl-[10%] inset-0 ">
       <h1 className="text-6xl max-w-[50%] font-bold text-white">{VideoData.titel}</h1>
       <div 
             className="uppercase f transition duration-500 ease-in-out inline-flex mt-16 font-semibold cursor-pointer font-[Haboro-Soft] 
        text-[17px] px-6 py-3 rounded-full  bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                <img src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg" width={'25px'} alt="img"/>
                <div className="pl-3">{VideoData.buttoncontent}</div>  
            </div>

            <ul className="flex gap-10 pt-10  pl-[20%] items-center">
               {
                VideoData.addvatises.map((item,index)=>(
                <li key={index} >
                    <img src={item.image} className="cursor-pointer"  width={'90px'} alt="imag"/>
                    </li>
                ))
               }
                </ul>  
      </div>
    </div>
        </>
    )
}