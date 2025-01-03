import React, { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import Modal from './shared/Modal';
import PriceBreakdownModalContent from './PriceBreakDownData/PriceBreakdownModalContent';

const Footer = ({ selectedOptions = [], userInfo = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const getPriceBreakdownContent = () => ({
    modalTitle: 'PRICE BREAKDOWN',
    label: (
      <PriceBreakdownModalContent
        selectedOptions={selectedOptions}
        formattedPrice={formattedPrice}
      />
    ),
  });

  const handleOrderNowClick = () => {
    console.clear();
    console.log('Order Now Button Clicked!');
    console.log('Order Summary:', {
      userInfo,
      selectedOptions,
      totalPrice: formattedPrice.format(
        selectedOptions.reduce((total, option) => {
          return total + (parseFloat(option.price.replace(/[^0-9.-]+/g, '')) || 0);
        }, 0)
      ),
    });

    const isPaymentSuccessful = Math.random() > 0.5;

    if (isPaymentSuccessful) {
      console.log('Redirecting to Payment Successful');
      navigate('/payment-successful');
    } else {
      console.log('Redirecting to Payment Declined');
      navigate('/payment-declined');
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center items-center space-x-6">
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
      <button
        onClick={handleOrderNowClick}
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-500 transition"
      >
        Order Now
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        optionDetails={getPriceBreakdownContent()}
      />
    </footer>
  );
};

export default Footer;
