import React from 'react'
import { useNavigate ,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function CheckoutResponse() {

    const [status, setStatus] = useState(null); 
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get('session_id');
        const canceled = queryParams.get('canceled');
        console.log("useEffect is called...")
        console.log("sessionId: ",sessionId)
        console.log("canceled: ",canceled)
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

    if ( status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h1>
                <p className="text-lg text-gray-700">Your payment was successful. You will receive an email confirmation shortly.</p>
                <button
                    className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </button>
            </div>
        );
    }

    if (status === null) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
                <h1 className="text-2xl font-bold text-gray-600">Checking payment status...</h1>
            </div>
        );
    }

    if (status === 'canceled') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-yellow-100 text-center">
                <h1 className="text-4xl font-bold text-yellow-600 mb-4">Payment Canceled</h1>
                <p className="text-lg text-gray-700">You have canceled the payment process.</p>
                <button
                    className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded"
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </button>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
                <p className="text-lg text-gray-700">Something went wrong with the payment process. Please try again later.</p>
                <button
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </button>
            </div>
        );
    }
}

export default CheckoutResponse
