import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
                <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                    About
                </Link>
                <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                    Service
                </Link>
                <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                    Portfolio
                </Link>
                <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                    Contact Us
                </Link>
        </>
    )
}

export default NavLinks;