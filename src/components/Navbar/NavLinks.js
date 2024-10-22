import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-black-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink
  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
  smooth
  to="#"
  onClick={(e) => { e.preventDefault(); window.open('https://discord.gg/fGwBVN75', '_blank'); }}
>
  Discord Server
</HashLink>

        </>
    )
}

export default NavLinks;
