import React from 'react';
import servImg1 from '../../../assets/images/fluoride.png';
import servImg2 from '../../../assets/images/cavity.png';
import servImg3 from '../../../assets/images/whitening.png';
import ServicesItem from './ServicesItem';


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: servImg1
        },
        {
            id: 2,
            name: 'Cavity Filling',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: servImg2
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            brief: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: servImg3
        }
    ]
    return (
        <section className='bg-primary rounded-2xl my-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-[1440px] mx-auto'>
            {
            servicesData.map(service => <ServicesItem
            key={service.id}
            service={service}
            ></ServicesItem>)
            }
        </section>
    );
};

export default Services;