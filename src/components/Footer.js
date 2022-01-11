import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    // const year = new Date().getFullYear();
    return (
        <>
            {/* <footer className="bg-gray-500 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                    <div className="p-5 mx-auto w-full md:w-4/12">
                        <h4 className='text-4xl mx-auto font-black text-gray-200 mb-4 uppercase'>mld</h4>
                        <h5 className='text-md font-medium text-gray-300'>Molad e Konsult</h5>
                        <p className='text-md font-medium text-gray-300'>Ilo Awela,</p>
                        <p className='text-md font-medium text-gray-300'>Ota,</p>
                        <p className='text-md font-medium text-gray-300'>Ogun State.</p>
                    </div>

                    <div className="p-5 w-1/2 md:w-3/12">
                        
                        <div className="text-lg font-bold uppercase text-gray-300 mb-6">
                            Links
                        </div>

                        
                        <HashLink to="/#about" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            About
                        </HashLink>
                        <HashLink to="/#services" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            Services
                        </HashLink>
                        <Link to="/contact" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            Contact
                        </Link>
                    </div>

                    
                    <div className="p-5 w-1/2 md:w-3/12">
                        
                        <div className="text-lg font-bold uppercase text-gray-300 mb-6">
                            Services
                        </div>

                        <HashLink to="/#services" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            Web Development
                        </HashLink>
                        <HashLink to="/#services" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            Mobile App Development
                        </HashLink>
                        <HashLink to="/#services" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            Domain and Hosting Services
                        </HashLink>
                        <HashLink to="/#services" className="my-3 block text-gray-300 hover:text-blue-900 text-md font-medium duration-700">
                            General IT Consultations
                        </HashLink>
                    </div>

                    <div className="p-5 w-full md:w-2/12">

                        <div className="text-lg font-bold uppercase text-gray-300 mb-6">
                            Social Media Links.
                        </div>

                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Follow us on social media.
                        </div>
                        
                        <div className="md:flex-auto md:flex-row flex-row flex mx-auto">
                            <Link to="#" className="w-6 mx-1 text-gray-400 hover:text-blue-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                            </Link>
                            <Link to="#" className="w-6 mx-1 text-gray-400 hover:text-blue-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                            </Link>
                            <Link to="#" className="w-6 mx-1 text-gray-400 hover:text-blue-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current'><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                            </Link>
                        </div>
                                                
                    </div>
                </div>

                <div className="pt-8">
                    <div className="flex justify-center pb-5 px-3 m-auto pt-5 
                        border-t border-gray-200 text-gray-400 text-sm 
                        flex-col md:flex-row max-w-6xl">
                        <div className="mt-2 mx-auto">
                            © Copyright {year}. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer> */}

    <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

            {/* Top area: Blocks */}
            <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

            {/* 1st block */}
            <div className="col-span-12 lg:col-span-3">
                <div className="box-border border-4 border-b-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg">
                    <h3 className="font-bold text-4xl mb-4">MLD</h3>
                    <div className='text-md font-medium text-gray-600'>
                        <h5>Molad e Konsult</h5>
                        <p>Ilo Awela,</p>
                        <p>Ota,</p>
                        <p>Ogun State.</p>
                    </div>
                </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-3 lg:ml-7">
                <h6 className="text-[#013289] font-medium mb-2">LINKS</h6>
                <ul className="text-sm">
                <li className="mb-2">
                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">About</HashLink>
                </li>
                <li className="mb-2">
                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">Services</HashLink>
                </li>
                <li className="mb-2">
                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">Contact</HashLink>
                </li>                            
                </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
                <h6 className="text-[#013289] font-medium mb-2">OUR SERVICES</h6>
                <ul className="text-sm">
                <li className="mb-2">
                    <Link to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">Web Development</Link>
                </li>
                <li className="mb-2">
                    <Link to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">Mobile App Development</Link>
                </li>
                <li className="mb-2">
                    <Link to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">Domain and Hosting Services</Link>
                </li>
                <li className="mb-2">
                    <Link to="#" className="text-[#013289] hover:text-gray-900 transition duration-150 ease-in-out">General IT Consultations</Link>
                </li>
                </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-gray-100">
                <div className="text-xl mb-6">
                    Social Media Links.
                </div>

                        <div className="text-md font-medium mb-6">
                            Follow us on social media.
                        </div>
                <div className="mx-auto text-center mt-2">
                        <ul className="flex justify-center mb-4 md:mb-0">
                            <li>
                                <Link to="#" className="flex justify-center items-center text-[#013289] hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="#" className="flex justify-center items-center text-[#013289] hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>          

            </div>

            <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright &copy; {new Date().getFullYear()}{"  "}
              <HashLink
                to="#"
                className=" hover:text-gray-900"
              >
                Molad e Konsult
              </HashLink>. All rights reserved.
            </div>
          </div>
        </div>

	    </div>
	    
    </footer>
        </>
    )
}
export default Footer;