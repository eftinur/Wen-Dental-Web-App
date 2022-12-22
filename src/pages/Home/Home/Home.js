import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Services from '../Services/Services';
import TermsCondition from '../TermsCondition/TermsCondition';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <TermsCondition></TermsCondition>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;