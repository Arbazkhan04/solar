import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentSuccessful from '../pages/PaymentPages/PaymentSuccessful';
import PaymentDeclined from '../pages/PaymentPages/PaymentDeclined';
import LeftContainer from '../pages/MainPages/LeftContainer';
import RightContainer from '../pages/MainPages/RightContainer';
import Footer from '../components/Footer';
import Contact from '../pages/Contact';

const RoutesComponent = () => {
    const [slides, setSlides] = useState([]); // Shared slides state
    const [selectedOptions, setSelectedOptions] = useState([]); // Shared selected options array

    return (
        <Router>
            <div className="grid grid-cols-12 h-screen pb-16 lg:pb-20"> {/* Add padding-bottom */}
                <div className=" col-span-12 lg:col-span-8">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <LeftContainer slides={slides} selectedOptions={selectedOptions} />
                            }
                        />
                        <Route path="/payment-successful" element={<PaymentSuccessful />} />
                        <Route path="/payment-declined" element={<PaymentDeclined />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <div className="col-span-12 lg:col-span-4 h-[80%]">
                    <RightContainer
                        setSelectedSlides={setSlides}
                        setSelectedOptions={setSelectedOptions}
                    />
                </div>
            </div>
            <Footer selectedOptions={selectedOptions} />
        </Router>
    );
};

export default RoutesComponent;
