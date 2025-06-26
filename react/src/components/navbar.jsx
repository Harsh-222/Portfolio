import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center bg-gray-800 text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold">Portfolio</span>
      <ul className={`md:flex md:space-x-8 ${openMenu ? 'block' : 'hidden'} py-2 mt-4 md:mt-0`}>
        {['About', 'Projects', 'Contact'].map((link, index) => (
          <li key={index} className="text-md font-medium hover:text-yellow-400 transition">
            <a href={`#${link}`} className="text-md transition-all duration-300 p-1 md:p-0">
              {link}
            </a>
          </li>
        ))}
      </ul>
      {!openMenu ? (
        <IoMdMenu
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      ) : (
        <IoMdClose
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
