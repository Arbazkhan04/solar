import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EVChargerData } from './EVChargerData';
import EVChargerModalData from './EVChargerModalData';
import { usePrice } from '../shared/PriceContext';
import { useOptionHandler } from '../shared/useOptionHandler';

const EVChargerOptions = ({ setSelectedOption, setSelectedSlides }) => {
    const { updatePrice, resetPrice } = usePrice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModalType, setSelectedModalType] = useState(null);

    const { selectedOptionValue, handleOptionClick } = useOptionHandler(EVChargerData, updatePrice, resetPrice);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedModalType(null);
    };

    const handleLearnMoreClick = (modalType) => {
        setSelectedModalType(modalType);
        setIsModalOpen(true);
    };

    return (
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Select EV Charger</h2>
            {EVChargerData.map((option) => (
                <div
                    key={option.value}
                    className={`p-6 border-2 rounded-md hover:shadow-lg cursor-pointer transition duration-300 my-4 ${selectedOptionValue === option.value ? 'border-orange-300' : ''
                        }`}
                    onClick={() => {
                        const price = option.price || '$0';
                        handleOptionClick({ ...option, price }, setSelectedOption, setSelectedSlides);
                    }}
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{option.label}</span>
                        {option.price && <span className="text-gray-800 font-semibold">{option.price}</span>}
                    </div>
                    <p className="text-gray-500">{option.subText}</p>
                    {option.modalType && (
                        <button
                            className="mt-2 text-gray-400 hover:underline text-sm flex items-center w-fit italic"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLearnMoreClick(option.modalType);
                            }}
                        >
                            More Information <span className="ml-1">›</span>
                        </button>
                    )}
                </div>
            ))}
            <EVChargerModalData isOpen={isModalOpen} onClose={handleModalClose} type={selectedModalType} />
        </div>
    );
};

EVChargerOptions.propTypes = {
    setSelectedOption: PropTypes.func.isRequired,
    setSelectedSlides: PropTypes.func,
};

export default EVChargerOptions;
