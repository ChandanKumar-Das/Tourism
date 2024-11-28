import { DiscoverData } from "../constants/constant";

export function Discover() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto pb-4 px-4">
        {/* Section Header */}
        <div className="max-w-[85%] mx-auto md:pt-[100px] lg:pt-[150px] text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2d3e40] text-2xl md:text-3xl lg:text-[36px] font-semibold font-montserrat">
              {DiscoverData.Tilel}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center items-center px-4 pt-4">
              <img
                src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
                alt="logo"
                className="w-[40px] md:w-[30px]"
              />
              <h3 className="uppercase text-[#15a1b4] font-medium text-lg md:text-lg lg:text-1xl font-haboro-soft">
                {DiscoverData.secondTitle}
              </h3>
            </div>
            <p className="pt-4 text-[16px] md:text-[20px] leading-relaxed text-black">
              {DiscoverData.about}
            </p>
          </div>
        </div>
        </div>
        {/* Card Section */}
        <ul className="grid grid-cols-1 px-4 md:p-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4  gap-6 mt-4 mb-6">
          {DiscoverData.cardData.map((item, index) => (
            <li
              className="relative overflow-hidden flex items-center cursor-pointer group"
              key={index}
            >
              <img
                src={item.img}
                className="w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                alt="img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
                <h1 className="uppercase text-white font-bold text-2xl">
                  {item.name}
                </h1>
                <h3 className="uppercase text-white text-lg pt-2 font-semibold">
                  {item.more}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      
    </>
  );
}
