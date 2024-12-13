import { footerData } from "../constants/constant";
import { BannerData } from "../constants/constant";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

export  function Footer() {
  const { description, contact, links } = footerData;

  return (
    <footer className=" py-8">
      <div className="max-w-[1250px] border-t pt-4 mx-auto px-4 ">
        {/* Description */}
        <p className="text-gray-700 text-xl mb-4">{description}</p>

        {/* Trust Section */}
        <div className="sm:flex border-b pb-6 items-center justify-between grid grid-cols-1 gap-6 sm:gap-0">
        <h3 className="text-green-600 text-2xl font-semibold ">Ready To Trust African <br/> Scenic Safaris!</h3>
      <ul className="flex flex-wrap gap-10 ">
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

           <div className="flex items-center gap-5 text-2xl">
           <FaFacebookSquare className="text-blue-700" />
           <FaXTwitter  className="text-black" />
           <FaInstagramSquare  className="text-pink-700" />
           <FaYoutube className="text-red-500" />
           <FaLinkedin  className="text-blue-900" />
           <FaPinterestSquare className="text-red-500"  />
           </div>
        </div>
        
        <div className="sm:flex grid grid-cols-1  justify-between w-full gap-6 py-8 border-b border-green-600 items-center">
        <div className="sm:flex grid grid-cols-1 w-full items-center gap-4 mt-4">
          <p className="text-gray-700 flex items-center">
            <span className="text-[#00535e] hover:text-green-600 text-md sm:text-2xl font-bold mr-2">{contact.phone}</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-8 h-8 inline"
            />
          </p>
          <p className="text-[#00535e] hover:text-green-600 text-md sm:text-2xl font-bold">
            <a href={`mailto:${contact.email}`} >
              {contact.email}
            </a>
          </p>
          </div>
          <div className="flex items-center justify-end gap-4">
             <img src="https://africanscenicsafaris.com/images/trip-24-removebg-preview.webp" className="w-[20%]" alt="logo"/>
             <img src="https://africanscenicsafaris.com/images/gugulu-removebg-preview.webp" className="w-[20%]" alt="logo"/>
             <img src="https://africanscenicsafaris.com/images/book-saaa-removebg-preview.webp" className="w-[20%]" alt="logo"/>
          </div>
        </div>

      

        {/* Links */}
        <div className="flex flex-wrap sm:justify-center sm:px-[100px] px-[10px] gap-4 mt-6 text-sm text-gray-600">
          {links.map((link, index) => (
            <a key={index} href="#" className="hover:underline uppercase border-r-2 pr-2">
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
  className="flex items-center justify-between"
  // style={{
  //   background: "linear-gradient(to top, #1e3a8a, #93c5fd)", // Blue gradient from bottom to top
  //   padding: "20px",
  // }}
>
  <div>
    <img
      src="https://africanscenicsafaris.com/images/ss212.webp"
      alt="logo"
    />
  </div>

  {/* <div className="grid grid-cols-1 gap-3 sm:flex justify-between items-center"> */}
  <div className="mt-8 text-gray-500 text-sm">
    <p>© Copyright African Scenic Safaris 2024</p>
  </div>

  <div className="w-[200px]">
    <img
      src="https://africanscenicsafaris.com/images/payment-options.webp"
      alt="ooo"
    />
  </div>
</div>

        
      </div>
    </footer>
  );
}
