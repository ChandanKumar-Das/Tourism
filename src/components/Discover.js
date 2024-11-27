import { DiscoverData } from "../constants/constant";

export function Discover() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto  pb-4">
        <div className="max-w-[85%] mx-auto pt-[50px]">
          <div className="flex-cols justify-center items-center">
            <h2 className="uppercase pl-6 text-center text-[#2d3e40] text-[36px] font-semibold font-montserrat ">
              {DiscoverData.Tilel}
            </h2>
            <div className="flex  gap-4 justify-center items-center px-16 pt-4">
              <img
                src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
                alt="logo"
              />
              <h3 className="uppercase text-[#15a1b4] font-medium text-[120%] font-haboro-soft">
                {DiscoverData.secondTitle}
              </h3>
            </div>
            <p className="pt-4 flex justify-center text-center leading-[1.5] text-[#555] font-normal text-[20px] font-[Haboro-Soft] normal-case">
              {DiscoverData.about}
            </p>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-4 gap-6 mt-4 mb-6">
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
      {/* absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 */}

        <h1 className="uppercase text-white font-bold text-2xl">{item.name}</h1>
        <h3 className="uppercase text-white text-lg pt-2 font-semibold">{item.more}</h3>
      </div>
    </li>
  ))}
</ul>

    </>
  );
}
