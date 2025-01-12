import React, { useState } from 'react';
import LeftContainer from './MainPages/LeftContainer';
import RightContainer from './MainPages/RightContainer';
import Footer from '../components/Footer';
import LandingPageHeader from '../components/LandingPageHeader&Footer/LandingPageHeader/LandingPageHeader';

const Order = () => {
    const [slides, setSlides] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [userInfo, setUserInfo] = useState({
        userName: 'Not provided',
        address: 'Not provided',
        email: 'Not provided',
        phoneNumber: 'Not provided',
    });

    return (
        <>
            <LandingPageHeader />
            <div className="grid grid-cols-12 h-screen pb-16 lg:pb-20">
                <LeftContainer slides={slides} selectedOptions={selectedOptions} />
                <RightContainer
                    setSelectedSlides={setSlides}
                    setSelectedOptions={setSelectedOptions}
                    setUserInfo={setUserInfo}
                />
                <Footer selectedOptions={selectedOptions} userInfo={userInfo} />
            </div>
        </>
    );
};

export default Order;
