import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentSuccessful from '../pages/PaymentPages/PaymentSuccessful';
import PaymentDeclined from '../pages/PaymentPages/PaymentDeclined';
import LeftContainer from '../pages/MainPages/LeftContainer';
import RightContainer from '../pages/MainPages/RightContainer';
import Contact from '../pages/Contact'; // Import the Contact component

const RoutesComponent = () => {
    const [slides, setSlides] = useState([]); // Shared slides state
    const [selectedOptions, setSelectedOptions] = useState([]); // Shared selected options array

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="grid grid-cols-12 h-screen">
                            <LeftContainer slides={slides} selectedOptions={selectedOptions} />
                            <RightContainer setSelectedSlides={setSlides} setSelectedOptions={setSelectedOptions} />
                        </div>
                    }
                />
                <Route path="/payment-successful" element={<PaymentSuccessful />} />
                <Route path="/payment-declined" element={<PaymentDeclined />} />
                <Route path="/contact" element={<Contact />} /> {/* Add the Contact page route */}
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
