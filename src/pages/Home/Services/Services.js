import React from 'react';

import ServicesItem from './ServicesItem';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            name: 'Cavity Filling',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]
    return (
        <section className='bg-[#D0CCBF] pb-14'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/4 mx-auto '>
            {
            servicesData.map(service => <ServicesItem
            key={service.id}
            service={service}
            ></ServicesItem>)
            }
            </div>
        </section>
    );
};

export default Services;