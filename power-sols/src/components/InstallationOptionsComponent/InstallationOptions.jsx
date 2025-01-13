import React, { useState, useEffect } from 'react';
import { usePrice } from '../shared/PriceContext';
import { InstallationOptionsData } from './InstallationOptionsData';

const InstallationOptions = ({ setSelectedOption }) => {
    const { updatePrice, resetPrice } = usePrice();
    const [selectedOptionValue, setSelectedOptionValue] = useState('included'); // Default to "installation-included"

    useEffect(() => {
        const defaultOption = InstallationOptionsData.find(
            (option) => option.value === 'included'
        );
        if (defaultOption) {
            const price = parseFloat(defaultOption.price?.replace(/[$,]/g, '')) || 0;
            updatePrice(price); // Update price for default option
            setSelectedOption({ value: defaultOption.value, price: defaultOption.price || '$0' });
        }
    }, [setSelectedOption, updatePrice]);

    const handleButtonClick = (option) => {
        const price = parseFloat(option.price?.replace(/[$,]/g, '')) || 0;

        if (selectedOptionValue === option.value) {
            // Deselect current option
            resetPrice(price);
            setSelectedOptionValue(null);
            setSelectedOption({ value: 'Not selected', price: '$0' });
        } else {
            // Reset previously selected option's price
            if (selectedOptionValue) {
                const previousOption = InstallationOptionsData.find(
                    (item) => item.value === selectedOptionValue
                );
                const previousPrice = parseFloat(previousOption?.price?.replace(/[$,]/g, '')) || 0;
                resetPrice(previousPrice);
            }

            // Set new option
            updatePrice(price);
            setSelectedOptionValue(option.value);
            setSelectedOption({ value: option.value, price: option.price || '$0' });
        }
    };

    return (
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Select Installation</h2>
            <div className="space-y-4">
                {InstallationOptionsData.map((option) => (
                    <div
                        key={option.value}
                        className={`p-6 border-2 rounded-md hover:shadow-lg cursor-pointer transition duration-300 ${selectedOptionValue === option.value ? 'border-orange-300' : ''
                            }`}
                        onClick={() => handleButtonClick(option)}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg">{option.buttonText}</span>
                            {option.price && <span className="text-gray-800 font-semibold">{option.price}</span>}
                        </div>
                        <p className="text-gray-500 text-sm">{option.subText}</p>
                    </div>
                ))}
                {/* <p className="text-sm italic text-gray-500 mt-4">
                    Need help with installation?{' '}
                    <a href="/contact" className="text-orange-500 hover:underline">
                        Contact Us
                    </a>
                    .
                </p> */}
            </div>
        </div>
    );
};

export default InstallationOptions;