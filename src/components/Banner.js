import { BannerData } from "../constants/constant";

export function Banner() {
  return (
    <>
      <div className="relative z-50">
        {/* Banner Image */}
        <img
          src={BannerData.banner}
          className="h-[50vh] md:h-[600px] w-full object-cover"
          alt="banner"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Banner Content */}
        <div className="absolute top-[40%] left-[10%] md:top-[45%] md:left-[17%] text-center md:text-left px-4">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
            {BannerData.content}
          </h1>
          <div
            className="uppercase transition duration-500 ease-in-out inline-flex mt-8 md:mt-16 font-semibold cursor-pointer text-sm md:text-lg px-4 py-2 rounded-full bg-[#6eb43f] hover:bg-[#3c681e] text-white"
          >
            {BannerData.sendAnInquary}
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="absolute w-full -bottom-10 flex justify-center items-center">
          <ul className="flex flex-wrap gap-4 md:gap-10 bg-white px-10 py-2 md:px-20 rounded-full shadow-md">
            {BannerData.addvatises.map((item, index) => (
              <li key={index} className="flex justify-center">
                <img
                  src={item.image}
                  className="cursor-pointer w-10 md:w-12 lg:w-14"
                  alt="advertise"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
