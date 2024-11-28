import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Card1({ data,value }) {
  //console.log(props),value

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Monitor screen width to update the state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1268);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, // Less than 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets and smaller
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <>
      
      
      {isMobile ? (
        <div className="w-full overflow-hidden border-none">
  <Slider {...sliderSettings} className="p-4">
    {data.map((items, index) => (
      <div
        key={index}
        className="relative h-full w-full px-4  border-none overflow-hidden gap-4 flex items-center justify-center cursor-pointer group"
      >
        <img
          src={items.image}
          className="w-full border-none h-auto transition-transform duration-500 ease-in-out transform xl:group-hover:scale-110"
          alt="img"
        />
        {/* <div className="absolute inset-0 px-4 lg:px-0 bg-black bg-opacity-20 transition-opacity duration-500"></div> */}
        <div className="absolute bottom-0 w-full xl:bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
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
  </div>
) : value !='EX' ? (
  
  <ul className={`grid p-4 md:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-6 overflow-x-auto`}>
    {data.map((items, index) => (
      <li
        key={index}
        className="relative overflow-hidden flex items-center cursor-pointer group"
      >
        <img
          src={items.image}
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          alt="img"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>
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
):<ul className={`grid p-4 md:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 mb-6 overflow-x-auto`}>
{data.map((items, index) => (
  <li
    key={index}
    className="relative overflow-hidden flex items-center cursor-pointer group"
  >
    <img
      src={items.image}
      className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      alt="img"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-all duration-500"></div>
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
</ul>}

    </>
  );
} 