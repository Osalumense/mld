import React from 'react';
import {Link} from 'react-router-dom';
const Cta = () => {
    return ( 
        <div className="w-full h-auto flex items-center justify-center  bg-gray-500 text-white">
            <div className="mx-5 w-full text-center lg:text-left py-16 px-12 flex flex-col">                    
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Are you ready to scale your business?</p>
                        <p className="text-lg md:text-2xl">Get in touch and let us build something amazing <span className='font-black'>together!</span></p>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center">Contact US</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;