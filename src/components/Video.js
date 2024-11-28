import { VideoData } from "../constants/constant";

export function Video() {
  return (
    <div className="relative w-full mb-20 md:mb-32">
      {/* Video Section */}
      <div className="relative w-full aspect-video">
        <iframe
          className=" sm:w-full sm:h-full w-full h-full"
          src="https://www.youtube.com/embed/sPwZHYoptfc?autoplay=1&mute=1&loop=1&playlist=sPwZHYoptfc&controls=0&showinfo=0&modestbranding=1&start=17"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start gap-6 px-6 sm:px-10 md:px-16 lg:px-24 text-white">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[90%] sm:max-w-[70%] md:max-w-[60%]">
          {VideoData.titel}
        </h1>

        {/* Button */}
        <div className="uppercase transition duration-500 ease-in-out inline-flex items-center gap-3 mt-4 md:mt-6 px-6 py-3 rounded-full bg-[#6eb43f] hover:bg-[#3c681e] text-[15px] sm:text-[17px] font-semibold">
          <img
            src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg"
            width="25px"
         
            alt="Email Icon"
          />
          <span>{VideoData.buttoncontent}</span>
        </div>

        {/* Advertisement Logos */}
        <ul className="flex gap-6 sm:gap-8 md:gap-10 mt-2 md:pt-6 items-center flex-wrap">
          {VideoData.addvatises.map((item, index) => (
            <li key={index} className="flex-shrink-0">
              <img
                src={item.image}
                className="cursor-pointer transition-transform transform hover:scale-110"
                width="50"
                sm-width="75"
                md-width="90"
                alt="Advertisement"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
