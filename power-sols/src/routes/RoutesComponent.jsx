import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentSuccessful from '../pages/PaymentPages/PaymentSuccessful';
import PaymentDeclined from '../pages/PaymentPages/PaymentDeclined';
import LeftContainer from '../pages/MainPages/LeftContainer';
import RightContainer from '../pages/MainPages/RightContainer';
import Footer from '../components/Footer';
import Contact from '../pages/Contact';

const RoutesComponent = () => {
    const [slides, setSlides] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [userInfo, setUserInfo] = useState({
        userName: 'Not provided',
        address: 'Not provided',
        email: 'Not provided',
        phoneNumber: 'Not provided',
    });

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <div className="grid grid-cols-12 h-screen pb-16 lg:pb-20">
                            <LeftContainer slides={slides} selectedOptions={selectedOptions} />
                            <RightContainer

                                setSelectedSlides={setSlides}
                                setSelectedOptions={setSelectedOptions}
                                setUserInfo={setUserInfo}
                            />
                        </div>
                        <Footer selectedOptions={selectedOptions} userInfo={userInfo} />
                    </>
                }
            />
            <Route path="/payment-successful" element={<PaymentSuccessful />} />
            <Route path="/payment-declined" element={<PaymentDeclined />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default RoutesComponent;
