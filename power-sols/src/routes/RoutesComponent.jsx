import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentSuccessful from '../pages/PaymentPages/PaymentSuccessful';
import PaymentDeclined from '../pages/PaymentPages/PaymentDeclined';
import Order from '../pages/Order';
import Home from '../pages/Home';
import FaqPage from '../pages/Faq';
import LearnPage from '../pages/Learn';
import ContactPage from '../pages/Contact';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const RoutesComponent = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/order" element={<Order />} />
                <Route path="/payment-successful" element={<PaymentSuccessful />} />
                <Route path="/payment-declined" element={<PaymentDeclined />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
};

export default RoutesComponent;
