import React from 'react';
import aboutImg from '../../../assets/images/home_about.jpg';

const HomeAbout = () => {
    return (
        <section className='bg-[#D0CCBF] py-20'>
            <div className='flex justify-center items-center flex-col lg:flex-row w-3/4 mx-auto'>
            <div className="about-brief w-full lg:w-2/4 pr-10 py-10 text-base">
                <h3 className="text-3xl pb-8">
                Quality dental at a price to make you smile
                </h3>
                <p>
                At Canadian Unity Dental you don’t have to have Canadian Unity insurance to visit our dental centres, because everyone’s welcome.
                </p>
                <p className='py-6'>
                As an introductory offer for new patients, you can book a dental check-up, including bitewing X-rays for just $149* at any of our five Canadian Unity Dental Centres around Melbourne.
                </p>
                <p>
                Plus you may be able to claim benefits on your extras cover which means you’ll pay even less (amount varies based on your level of cover and your yearly limits).
                </p>
            </div>
            <div className="about-image w-full lg:w-2/4 flex lg:justify-end">
                <img src={aboutImg} alt="" className='w-full lg:w-5/6 shadow-2xl' />
            </div>
        </div>
        </section>
    );
};

export default HomeAbout;