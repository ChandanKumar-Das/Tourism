import { GuideData } from "../constants/constant";
import { Flag } from "./Animations/Flag";

export const Guide = () => {
  return (
    <>
      <div className="max-w-[1250px] mx-auto pb-10 px-4">
        {/* Header Section */}
        <div className="max-w-[85%] mx-auto pt-[100px] lg:pt-[150px] text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2d3e40] text-2xl md:text-3xl lg:text-[36px] font-semibold font-montserrat">
              {GuideData.headline}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <Flag/>
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-1xl font-haboro-soft">
                {GuideData.adventures}
              </h3>
            </div>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-black">
              {GuideData.paragraph1}
            </p>
            <p className="font-normal text-[14px] md:text-[18px] text-[#555] font-haboro-soft pt-4">
              {GuideData.paragraph2}
            </p>
            <p className="font-normal text-[14px] md:text-[18px] text-[#555] font-haboro-soft pt-4">
              {GuideData.paragraph3}
            </p>
          </div>
        </div>

        {/* More Data Section */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
          {GuideData.moredata.map((item, index) => (
            <li className="flex items-center pb-5" key={index}>
              <img src={item.image} className="w-[25px] mr-2" alt="img" />
              <span className="pl-4 cursor-pointer border-l-2 border-yellow-200 font-semibold text-[#00535e] hover:text-[#6eb43f] text-base md:text-lg lg:text-xl">
                {item.mane}
              </span>
            </li>
          ))}
        </ul>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10 px-4">
          <div
            className="transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white"
          >
            <img
              src="https://africanscenicsafaris.com/images/file-info-alt-svgrepo-com.svg"
              width="25px"
              alt="icon"
            />
            <div>{GuideData.moreaboutus}</div>
          </div>
          <div
            className="transition duration-500 ease-in-out gap-3 uppercase font-semibold cursor-pointer font-[Haboro-Soft] text-sm md:text-[17px] px-6 py-3 rounded-full flex items-center bg-[#6eb43f] hover:bg-[#3c681e] text-white"
          >
            <img
              src="https://africanscenicsafaris.com/images/email-svgrepo-com.svg"
              width="25px"
              alt="icon"
            />
            <div>{GuideData.sendAnInquary}</div>
          </div>
        </div>
      </div>
    </>
  );
};
