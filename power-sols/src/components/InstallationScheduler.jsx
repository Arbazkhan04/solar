import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { usePrice } from './shared/PriceContext';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PvbHe03d8UipuLw2gmKpb90ujPC6f0gtZgp4NcSSjK25bkmzfv4lN6mOZB3m9yYF2mnRJnT46lH1IKfAy3xRdn000w6CR4td4');

const InstallationScheduler = ({
    isUserInfoFilled,
    userInfo,
    solarOption,
    batteryOption,
    evChargerOption,
    selectedInstallationOption,
}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const { totalPrice } = usePrice();
    const [warning, setWarning] = useState('');
    const [status, setStatus] = useState(null); // For payment status
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get('session_id');
        const canceled = queryParams.get('canceled');

        if (sessionId) {
            verifySession(sessionId);
        } else if (canceled) {
            setStatus('canceled');
        }
    }, [location]);

    const verifySession = async (sessionId) => {
        try {
            const response = await axios.post('http://localhost:8081/api/stripe/verifyJobStatus', { sessionId });
            setStatus(response.data.status)
        } catch (error) {
            console.error('Error verifying Stripe session:', error);
            setStatus('failed');
        }
    };

    const handleCheckout = async () => {
        if (!isUserInfoFilled) {
            setWarning('Please fill out the user information form before proceeding to checkout.');
            return;
        }

        if (!selectedDate) {
            setWarning('Please select an installation date before proceeding to checkout.');
            return;
        }

        console.log({solarOption, batteryOption, evChargerOption, selectedInstallationOption, userInfo, selectedDate, totalPrice});

        try {
            const response = await axios.post('http://localhost:8081/api/stripe/checkout', {
                solarOption,
                batteryOption,
                evChargerOption,
                selectedInstallationOption,
                userInfo,
                selectedDate,
                totalPrice: totalPrice * 100, // Stripe requires amount in cents
            });

            const { id } = response.data;

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId: id });

            if (error) {
                console.error('Stripe Checkout error:', error.message);
                setWarning(error.message||'Something went wrong with the payment process. Please try again.');
            }
        } catch (error) {
            console.error('Error initiating Stripe checkout:', error);
            setWarning('Something went wrong while initiating payment. Please try again.');
        }
    };

    const handleBack = () => {
        setStatus(null);
        navigate('/');
    };

    if (status) {
        return (
            <div className="shadow-lg rounded-md p-4 bg-white text-center space-y-4">
                {status === 'success' && (
                    <div className="text-green-600">
                        <h1 className="text-2xl font-bold">Payment Successful!</h1>
                        <p className="text-lg">Thank you for your purchase.</p>
                    </div>
                )}
                {status === 'canceled' && (
                    <div className="text-yellow-600">
                        <h1 className="text-2xl font-bold">Payment Canceled</h1>
                        <p className="text-lg">You have canceled the payment process.</p>
                    </div>
                )}
                {status === 'failed' && (
                    <div className="text-red-600">
                        <h1 className="text-2xl font-bold">Payment Failed</h1>
                        <p className="text-lg">Something went wrong. Please try again later.</p>
                    </div>
                )}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg"
                    onClick={handleBack}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="shadow-lg rounded-md p-4 bg-white">
            <div className="space-y-4 my-8">
                <h2 className="text-lg font-bold">Select Your Installation Date</h2>
                <div className="flex flex-col space-y-2">
                    <button
                        className={`p-2 rounded-md text-white transition ${
                            selectedDate === 'now' ? 'bg-gray-700' : 'bg-gray-500 hover:bg-gray-800'
                        }`}
                        onClick={() => setSelectedDate('now')}
                    >
                        I want to select my installation date now
                    </button>
                    <button
                        className={`p-2 rounded-md text-white transition ${
                            selectedDate === 'later' ? 'bg-gray-700' : 'bg-gray-500 hover:bg-gray-800'
                        }`}
                        onClick={() => setSelectedDate('later')}
                    >
                        I'll finalise my installation date later
                    </button>
                </div>
                {selectedDate && (
                    <p className="text-sm text-gray-500">
                        You have selected: <strong>{selectedDate === 'now' ? 'Now' : 'Later'}</strong>
                    </p>
                )}
                {selectedDate === 'now' && (
                    <div className="mt-6">
                        <InlineWidget
                            url="https://calendly.com/finalfantasy-fantasy9/powerr-sols"
                            styles={{ height: '600px', width: '100%' }}
                        />
                    </div>
                )}
            </div>
            {warning && (
                <div className="mb-4 p-3 text-red-600 bg-red-100 rounded-md">
                    <p>{warning}</p>
                </div>
            )}
            <div className="mt-6">
                <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition duration-300"
                    onClick={handleCheckout}
                >
                    Checkout - ${totalPrice.toLocaleString()}
                </button>
            </div>
        </div>
    );
};

export default InstallationScheduler;
