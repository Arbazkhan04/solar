import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessful = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-700">Your payment was processed successfully. Thank you for your purchase!</p>
            <button
                className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                onClick={() => navigate('/')}
            >
                Go to Home
            </button>
        </div>
    );
};

export default PaymentSuccessful;
