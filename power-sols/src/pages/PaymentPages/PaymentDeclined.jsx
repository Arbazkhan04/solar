import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentDeclined = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Declined</h1>
            <p className="text-lg text-gray-700">
                Unfortunately, your payment could not be processed. Please try again later.
            </p>
            <button
                className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                onClick={() => navigate('/')}
            >
                Go to Home
            </button>
        </div>
    );
};

export default PaymentDeclined;
