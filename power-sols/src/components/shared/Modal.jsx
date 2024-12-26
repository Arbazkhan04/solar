import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, optionDetails }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true); // Show modal when isOpen is true
        } else {
            const timeout = setTimeout(() => setIsVisible(false), 500); // Wait for animation to finish before unmounting
            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [isOpen]);

    if (!isVisible) return null; // Don't render modal if not visible

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative bg-white p-8 rounded-lg w-[80%] lg:w-[40%] h-[50%] max-h-[800px] shadow-lg overflow-hidden ${isOpen ? 'animate-fadeUp' : 'animate-fadeDown'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>

                {/* Modal Title */}
                <h3 className="text-2xl font-bold mb-4">
                    {optionDetails?.buttonText || 'Modal Title'}
                </h3>

                {/* Modal Content */}
                <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
                    {optionDetails?.label || (
                        <p className="text-gray-700">This is the modal content.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
