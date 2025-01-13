import React, { useState } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import Modal from './shared/Modal';
import PriceBreakdownModalContent from './PriceBreakDownData/PriceBreakdownModalContent';

const stripePromise = loadStripe('pk_live_51QbIonK7P9rz2EDICLY9BDe5tnIFpJEtdX4KnLjPRZus51jyqyabztEH5UbFMX2tKDuGZgdqHNC7iPEOfX9VvuJZ00huOJm7H9');

const Footer = ({ selectedOptions = [], userInfo = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const validSelectedOptions = selectedOptions.filter(option => option && option.price !== undefined);

  // Format currency for display
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // Calculate the total price from selected options
  const totalPrice = selectedOptions.reduce((total, option) => {
    if (!option || typeof option.price !== 'string') {
      return total;
    }

    return total + (parseFloat(option.price.replace(/[^0-9.-]+/g, '')) || 0);
  }, 0);

  const handleOrderNowClick = async () => {
    // Existing implementation for order logic
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center items-center space-x-6 z-50">
      {/* Price Breakdown Modal Trigger */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="text-lg font-bold">
          Total Price: {formattedPrice.format(totalPrice)}
        </span>
        <TiArrowSortedUp className="text-orange-500 text-2xl" />
      </div>

      {/* Order Now Button */}
      <button
        onClick={handleOrderNowClick}
        className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-500 transition"
      >
        Order Now
      </button>

      {/* Warning / Error message */}
      {warning && (
        <div className="ml-4 px-3 py-2 bg-red-600 text-white rounded">
          {warning}
        </div>
      )}

      {/* Price Breakdown Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="PRICE BREAKDOWN"
        content={
          <PriceBreakdownModalContent
            selectedOptions={validSelectedOptions}
            formattedPrice={formattedPrice}
          />
        }
      />
    </footer>
  );
};

export default Footer;
