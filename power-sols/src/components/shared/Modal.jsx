import React, { useEffect, useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen, onClose, optionDetails }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`relative bg-white p-6 rounded-lg w-[80%] lg:w-[40%] max-h-[80%] shadow-lg overflow-y-auto ${isOpen ? 'animate-fadeUp' : 'animate-fadeDown'
                    }`}
            >
                <div className="flex items-center bg-gray-900 px-6 py-3 rounded-2xl shadow-md">
                    <TiArrowSortedDown className="text-green-500 text-2xl mr-3" />
                    <h3 className="text-lg uppercase font-bold tracking-wide text-white">
                        {optionDetails.modalTitle}
                    </h3>
                    <button
                        onClick={onClose}
                        className="ml-auto text-gray-400 hover:text-gray-600 text-xl"
                    >
                        <RxCross1 />
                    </button>
                </div>

                <div className="p-4">{optionDetails.label}</div>
            </div>
        </div>
    );
};

export default Modal;
