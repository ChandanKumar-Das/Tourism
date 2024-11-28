import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Card1({ data }) {
  //console.log(props)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Monitor screen width to update the state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };
  return (
    <>
      

{isMobile ? (
        <Slider {...sliderSettings} className="p-4 md:hidden ">
          {data.map((items, index) => (
            <div
              key={index}
              className="relative overflow-hidden flex items-center justify-center cursor-pointer group"
            >
              <img
                src={items.image}
                className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                alt="img"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
                <div className="transition-transform duration-500 group-hover:-translate-y-5">
                  <h1 className="uppercase text-white font-bold text-lg">
                    {items.titel1}
                  </h1>
                  <h3 className="uppercase text-white text-sm pt-2 font-semibold">
                    {items.titel2}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
           
        <ul className="grid p-4 md:p-0 grid-cols-4 gap-4 mt-4 mb-6  overflow-x-auto">
            {/* <Card1 data={AdventureData.cardData}/> */}
            {data.map((items, index) => (
        <li
          key={index}
          className="relative overflow-hidden flex items-center cursor-pointer group"
        >
          <img
            src={items.image}
            className=" transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            alt="img"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>

          {/* absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 */}

          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
            <div className="transition-transform duration-500 group-hover:-translate-y-5">
              <h1 className="uppercase text-white font-bold text-2xl">
                {items.titel1}
              </h1>
              <h3 className="uppercase text-white text-lg pt-2 font-semibold">
                {items.titel2}
              </h3>
            </div>
          </div>
        </li>
      ))}
        </ul>
      )}
    </>
  );
}
