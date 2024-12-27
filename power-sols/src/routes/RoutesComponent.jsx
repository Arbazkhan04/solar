import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentSuccessful from '../pages/PaymentSuccessful';
import PaymentDeclined from '../pages/PaymentDeclined';
import LeftContainer from '../pages/LeftContainer';
import RightContainer from '../pages/RightContainer';

const RoutesComponent = () => {
    const [slides, setSlides] = useState([]); // Shared slides state
    const [selectedOption, setSelectedOption] = useState({ value: 'Not selected', price: '$0' }); // Shared selected option

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="grid grid-cols-12 h-screen">
                            <LeftContainer slides={slides} selectedOption={selectedOption} />
                            <RightContainer setSelectedSlides={setSlides} setSelectedOption={setSelectedOption} />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
