import footerData from "../data/FooterData";

const Footer = () => {
  return (
    <footer className="py-12 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row justify-between items-start">
      {/* Logo Section */}
      <div className="text-center md:text-left mb-6 w-full md:w-auto">
        <div className="font-bold text-xl flex justify-center md:justify-start items-center">
          <p>Foodify</p>
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Copyright © 2022. <br /> All Rights Reserved.
        </p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap gap-8 w-full md:w-auto text-center md:text-left">
        {Object.entries(footerData).map(([title, links], index) => (
          <div key={index} className="mb-6">
            <h4 className="font-bold mb-3 text-gray-800">{title}</h4>
            <ul className="text-gray-600">
              {links.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href={link.link} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
