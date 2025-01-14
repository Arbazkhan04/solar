import React, { useState, useEffect } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { RxCross1 } from 'react-icons/rx';

const Modal = ({ isOpen, onClose, title, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500); // Matches the animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden" // Ensure it covers the entire viewport
            style={{ animation: isOpen ? 'fadeIn 0.5s ease-out' : 'fadeOut 0.5s ease-in' }}
        >
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-30" // Changed absolute to fixed to ensure full coverage
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div
                className={`relative bg-white px-6 pt-6 pb-0 rounded-lg w-[90vw] h-[90vh] lg:h-[80vh] lg:w-[50vw] shadow-lg overflow-y-auto
                    ${isOpen ? 'animate-fadeUp' : 'animate-fadeDown'}
                `}
            >
                {/* Modal Header */}
                <div className="flex items-center bg-gray-900 px-6 py-3 rounded-t-lg">
                    <TiArrowSortedDown className="text-orange-500 text-2xl mr-3" />
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <button onClick={onClose} className="ml-auto text-white text-xl">
                        <RxCross1 />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-4">{content}</div>
            </div>
        </div>
    );
};

export default Modal;
