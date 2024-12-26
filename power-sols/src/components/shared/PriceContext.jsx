import React, { createContext, useContext, useState } from 'react';

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const updatePrice = (price) => {
        const numericPrice = parseFloat(price) || 0;
        setTotalPrice((prev) => parseFloat((prev + numericPrice).toFixed(2)));
    };

    const resetPrice = (price) => {
        const numericPrice = parseFloat(price) || 0;
        setTotalPrice((prev) => parseFloat((prev - numericPrice).toFixed(2)));
    };

    const clearPrice = () => {
        setTotalPrice(0);
    };

    return (
        <PriceContext.Provider value={{ totalPrice, updatePrice, resetPrice, clearPrice }}>
            {children}
        </PriceContext.Provider>
    );
};

export const usePrice = () => {
    const context = useContext(PriceContext);
    if (!context) {
        throw new Error('usePrice must be used within a PriceProvider');
    }
    return context;
};
