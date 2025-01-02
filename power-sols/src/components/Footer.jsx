import React, { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import Modal from './shared/Modal';
import PriceBreakdownModalContent from './PriceBreakDownData/PriceBreakdownModalContent';

const Footer = ({ selectedOptions = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const getPriceBreakdownContent = () => ({
    modalTitle: 'PRICE BREAKDOWN', // Title for the modal
    label: (
      <PriceBreakdownModalContent
        selectedOptions={selectedOptions}
        formattedPrice={formattedPrice}
      />
    ),
  });

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center items-center">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="text-lg font-bold">
          Total Price:{" "}
          {formattedPrice.format(
            selectedOptions.reduce((total, option) => {
              return total + (parseFloat(option.price.replace(/[^0-9.-]+/g, '')) || 0);
            }, 0)
          )}
        </span>
        <TiArrowSortedDown className="text-green-500 text-2xl" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        optionDetails={getPriceBreakdownContent()}
      />
    </footer>
  );
};

export default Footer;
