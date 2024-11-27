import { logo } from "../constants/constant";
import { navcontents } from "../constants/constant";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full p-4 bg-white sticky top-0 z-[9999] shadow-md">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="w-[50%] md:w-[30%]">
              <img
                src={logo}
                className="w-[70%] md:w-[35%] cursor-pointer"
                alt="logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-end items-center w-full">
              <ul className="flex gap-4">
                {navcontents.navdata.map((item, index) => (
                  <li
                    className="flex items-center cursor-pointer gap-1 text-[#454442] hover:text-[#6eb43f] font-semibold text-[16px] group"
                    key={index}
                  >
                    {item.name}
                    {item.name === "Blog" ? null : (
                      <img
                        className="w-[20px] transition-transform duration-500 group-hover:rotate-180"
                        src="https://africanscenicsafaris.com/images/down-arrow-svgrepo-com.svg"
                        alt="img"
                      />
                    )}
                  </li>
                ))}
              </ul>
              <div className="ml-4">
                <button className="uppercase transition duration-500 ease-in-out font-semibold text-[16px] px-4 py-2 rounded-full bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                  {navcontents.sendAnInquary}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#454442] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-50 rounded-lg shadow-md">
              <ul className="flex flex-col gap-2 p-4">
                {navcontents.navdata.map((item, index) => (
                  <li
                    className="flex items-center cursor-pointer gap-2 text-[#454442] hover:text-[#6eb43f] font-semibold text-[16px]"
                    key={index}
                  >
                    {item.name}
                    {item.name === "Blog" ? null : (
                      <img
                        className="w-[16px] transition-transform duration-500"
                        src="https://africanscenicsafaris.com/images/down-arrow-svgrepo-com.svg"
                        alt="img"
                      />
                    )}
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <button className="w-full uppercase transition duration-500 ease-in-out font-semibold text-[16px] py-2 rounded-full bg-[#6eb43f] hover:bg-[#3c681e] text-white">
                  {navcontents.sendAnInquary}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
