import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BatteryData } from './BatteryData';
import ModalData from '../shared/ModalData';
import { usePrice } from '../shared/PriceContext';
import { useOptionHandler } from '../shared/useOptionHandler';

const BatteryOptions = ({ setSelectedOption, setSelectedSlides }) => {
    const { updatePrice, resetPrice } = usePrice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModalType, setSelectedModalType] = useState(null);

    // Use the shared hook to handle option selection
    const { selectedOptionValue, handleOptionClick } = useOptionHandler(BatteryData, updatePrice, resetPrice);

    const handleLearnMoreClick = (modalType) => {
        setSelectedModalType(modalType);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedModalType(null);
    };

    return (
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Select Battery</h2>
            {BatteryData.map((option) => (
                <div
                    key={option.value}
                    className={`p-4 border rounded-md hover:shadow-lg cursor-pointer transition duration-300 ${selectedOptionValue === option.value ? 'border-green-500' : ''
                        }`}
                    onClick={() => handleOptionClick(option, setSelectedOption, setSelectedSlides)}
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{option.label}</span>
                        {option.price && <span className="text-gray-800 font-semibold">{option.price}</span>}
                    </div>
                    <p className="text-gray-500">{option.subText}</p>
                    <button
                        className="mt-2 text-green-600 hover:underline text-sm flex items-center w-fit"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMoreClick(option.modalType);
                        }}
                    >
                        Learn more <span className="ml-1">›</span>
                    </button>
                </div>
            ))}
            <ModalData isOpen={isModalOpen} onClose={handleModalClose} type={selectedModalType} />
        </div>
    );
};

// PropTypes Validation
BatteryOptions.propTypes = {
    setSelectedOption: PropTypes.func.isRequired, // Ensures this is a required function
    setSelectedSlides: PropTypes.func, // Optional function for setting slides
};

export default BatteryOptions;
