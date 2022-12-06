import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoItems from './InfoItems';

const InfoCards = () => {
    const infoData = [
        {
            id: 1,
            name: 'Opening Hours',
            brief: 'Saturday - Thursday from 4pm - 10pm',
            icon: clock,
        },
        {
            id: 2,
            name: 'Visit our location',
            brief: 'Brooklyn, NY 10036, United States',
            icon: marker,
        },
        {
            id: 3,
            name: 'Contact us now',
            brief: '+000 123 456789',
            icon: phone,
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 max-w-[1440px] mx-auto'>
            {
                infoData.map(item => <InfoItems
                key={item.id}
                item={item}
                ></InfoItems>)
            }
        </div>
    );
};

export default InfoCards;