import { useState } from 'react';

export const useOptionHandler = (data, updatePrice, resetPrice) => {
    const [selectedOptionValue, setSelectedOptionValue] = useState(null);

    const handleOptionClick = (option, setSelectedOption, setSelectedSlides) => {
        const price = parseFloat(option.price?.replace(/[$,]/g, '')) || 0;

        if (selectedOptionValue === option.value) {
            // Deselect current option
            resetPrice(price);
            setSelectedOptionValue(null);
            setSelectedOption({ value: 'Not selected', price: '$0' });
            if (setSelectedSlides) setSelectedSlides([]);
        } else {
            // Reset previously selected option's price
            if (selectedOptionValue) {
                const previousOption = data.find((item) => item.value === selectedOptionValue);
                const previousPrice = parseFloat(previousOption?.price?.replace(/[$,]/g, '')) || 0;
                resetPrice(previousPrice);
            }
            // Select new option
            updatePrice(price);
            setSelectedOptionValue(option.value);
            setSelectedOption({ value: option.value, price: option.price });
            if (setSelectedSlides) setSelectedSlides(option.images || []);
        }
    };

    return { selectedOptionValue, handleOptionClick };
};
