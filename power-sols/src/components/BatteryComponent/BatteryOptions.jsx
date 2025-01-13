import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BatteryData } from './BatteryData';
import BatteryModalData from './BatteryModalData';
import { usePrice } from '../shared/PriceContext';
import { useOptionHandler } from '../shared/useOptionHandler';

const BatteryOptions = ({ setSelectedOption, setSelectedSlides }) => {
    const { updatePrice, resetPrice } = usePrice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModalType, setSelectedModalType] = useState(null);

    const { selectedOptionValue, handleOptionClick } = useOptionHandler(BatteryData, updatePrice, resetPrice);

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
                                setSelectedModalType(option.modalType);
                                setIsModalOpen(true);
                            }}
                        >
                            More Information <span className="ml-1">›</span>
                        </button>
                    )}
                </div>
            ))}
            <BatteryModalData isOpen={isModalOpen} onClose={handleModalClose} type={selectedModalType} />
        </div>
    );
};

BatteryOptions.propTypes = {
    setSelectedOption: PropTypes.func.isRequired,
    setSelectedSlides: PropTypes.func,
};

export default BatteryOptions;
