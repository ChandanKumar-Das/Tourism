import { footerData } from "../constants/constant";

export  function Footer() {
  const { description, contact, logos, socialMedia, links } = footerData;

  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-[1250px] mx-auto px-4 text-center">
        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        {/* Trust Section */}
        <h3 className="text-green-600 text-lg font-semibold mt-6">READY TO TRUST SCENIC!</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <p className="text-gray-700 flex items-center">
            <span className="text-green-600 font-bold mr-2">{contact.phone}</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5 inline"
            />
          </p>
          <p className="text-gray-700">
            <a href={`mailto:${contact.email}`} className="text-blue-600">
              {contact.email}
            </a>
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-10" />
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {socialMedia.map((platform, index) => (
            <a key={index} href={platform.link} className="text-blue-600">
              <img src={platform.icon} alt={platform.name} className="h-6" />
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
          {links.map((link, index) => (
            <a key={index} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>© Copyright African Scenic Safaris 2024</p>
        </div>
      </div>
    </footer>
  );
}
