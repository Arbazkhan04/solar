import React from 'react';

const PriceBreakdownModalContent = ({ selectedOptions, formattedPrice }) => {
    return (
        <div className="p-4 space-y-6 bg-white text-black rounded-lg">
            <table className="w-full text-left border-collapse">
                <tbody>
                    {/* Solar Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">Solar</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            {formattedPrice.format(
                                parseFloat(selectedOptions[0]?.price?.replace(/[^0-9.-]+/g, '')) || 0
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 text-gray-800 text-base pl-4">
                            {selectedOptions[0]?.value || 'Not selected'}
                        </td>
                    </tr>

                    {/* Battery Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">Battery</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            {formattedPrice.format(
                                parseFloat(selectedOptions[1]?.price?.replace(/[^0-9.-]+/g, '')) || 0
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 text-gray-800 text-base pl-4">
                            {selectedOptions[1]?.value || 'Not selected'}
                        </td>
                    </tr>

                    {/* EV Charger Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">EV Charger</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            {formattedPrice.format(
                                parseFloat(selectedOptions[2]?.price?.replace(/[^0-9.-]+/g, '')) || 0
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 text-gray-800 text-base pl-4">
                            {selectedOptions[2]?.value || 'Not selected'}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Spacer */}
            <div className="h-6"></div>

            <table className="w-full text-left border-collapse">
                <tbody>
                    {/* Installation Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">Installation</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            {formattedPrice.format(
                                parseFloat(selectedOptions[3]?.price?.replace(/[^0-9.-]+/g, '')) || 0
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 text-gray-800 text-base pl-4">
                            {selectedOptions[3]?.value || 'Included'}
                        </td>
                    </tr>

                    {/* Discounts Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">Rebates</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            ({formattedPrice.format(0)}) {/* Replace with dynamic value */}
                        </td>
                    </tr>

                    {/* Other Section */}
                    <tr className="border-b border-gray-300">
                        <td className="py-2 font-bold text-gray-800">Interest-Free Loans</td>
                        <td className="py-2 text-right font-semibold text-gray-700">
                            {formattedPrice.format(0)} {/* Replace with dynamic value */}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Total Price */}
            <div className="mt-6 text-lg font-bold text-gray-900 flex justify-between">
                <span>Total Price</span>
                <span>
                    {formattedPrice.format(
                        selectedOptions.reduce((total, option) => {
                            return total + (parseFloat(option.price.replace(/[^0-9.-]+/g, '')) || 0);
                        }, 0)
                    )}
                </span>
            </div>

            {/* Message */}
            <div className="mt-4 text-center text-orange-700 text-base">
                Secure your installation date with a fully refundable deposit today.
            </div>
        </div>
    );
};

export default PriceBreakdownModalContent;
