import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import img from '../images/Web-developer.svg';

const SupineTips = (props) => {

    useDocTitle('Supine | Tips to Relax More and Work Less')

    const tips = [
        { title: "Take Frequent Breaks", description: "Incorporate short breaks into your workday to stretch, walk around, or simply relax. These breaks can boost productivity and reduce stress." },
        { title: "Prioritize Sleep", description: "Ensure you get at least 7-8 hours of quality sleep each night. Good sleep is essential for overall health and well-being." },
        { title: "Delegate Tasks", description: "Don't hesitate to delegate tasks to others. Focus on what you do best and let others handle the rest." },
        { title: "Practice Mindfulness", description: "Spend a few minutes each day practicing mindfulness or meditation. This can help clear your mind and reduce anxiety." },
        { title: "Unplug Regularly", description: "Take time away from screens and digital devices. This can help you relax and recharge." },
        { title: "Enjoy Leisure Activities", description: "Make time for hobbies and activities that you enjoy. This can bring joy and balance to your life." }
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="m-auto max-w-6xl p-2 md:p-24 h-5/6">
                {tips.map((tip, index) => (
                    <div className="flex flex-col lg:flex-row py-3 justify-between lg:text-left" data-aos="zoom-out" key={index}>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                               
                            </div>
                            <h3 className="text-2xl text-blue-900 font-bold">{tip.title}</h3>
                            <div>
                                <p className='my-3 text-lg text-gray-600 font-semibold'>{tip.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default SupineTips;