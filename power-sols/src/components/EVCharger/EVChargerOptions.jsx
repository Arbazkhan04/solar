import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EVChargerData } from './EVChargerData';
import ModalData from '../shared/ModalData';
import { usePrice } from '../shared/PriceContext';
import { useOptionHandler } from '../shared/useOptionHandler';

const EVChargerOptions = ({ setSelectedOption, setSelectedSlides }) => {
    const { updatePrice, resetPrice } = usePrice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModalType, setSelectedModalType] = useState(null);

    // Use the shared hook to handle option selection
    const { selectedOptionValue, handleOptionClick } = useOptionHandler(EVChargerData, updatePrice, resetPrice);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedModalType(null);
    };

    return (
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Select EV Charger</h2>
            {EVChargerData.map((option) => (
                <div
                    key={option.value}
                    className={`p-6 border-2 rounded-md hover:shadow-lg cursor-pointer transition duration-300 ${selectedOptionValue === option.value ? 'border-orange-300' : ''
                        }`}
                    onClick={() => {
                        // Handle options with missing price gracefully
                        const price = option.price || '$0';
                        handleOptionClick({ ...option, price }, setSelectedOption, setSelectedSlides);
                    }}
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{option.label}</span>
                        {option.price && <span className="text-gray-800 font-semibold">{option.price}</span>}
                    </div>
                    <p className="text-gray-500">{option.subText}</p>
                    {/* Commented out the "Learn more" functionality */}
                </div>
            ))}
            <ModalData isOpen={isModalOpen} onClose={handleModalClose} type={selectedModalType} />
        </div>
    );
};

// PropTypes Validation
EVChargerOptions.propTypes = {
    setSelectedOption: PropTypes.func.isRequired, // Ensures this is a required function
    setSelectedSlides: PropTypes.func, // Optional function for setting slides
};

export default EVChargerOptions;
