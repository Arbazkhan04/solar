import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import Modal from './shared/Modal';
import PriceBreakdownModalContent from './PriceBreakDownData/PriceBreakdownModalContent';

const stripePromise = loadStripe('pk_test_51PvbHe03d8UipuLw2gmKpb90ujPC6f0gtZgp4NcSSjK25bkmzfv4lN6mOZB3m9yYF2mnRJnT46lH1IKfAy3xRdn000w6CR4td4');

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

  // This prepares data for the modal
  const getPriceBreakdownContent = () => ({
    modalTitle: 'PRICE BREAKDOWN',
    label: (
      <PriceBreakdownModalContent
        selectedOptions={validSelectedOptions}
        formattedPrice={formattedPrice}
      />
    ),
  });

  const handleOrderNowClick = async () => {

     // Extract each option from the array for clarity
     const [solarOption, batteryOption, evChargerOption, selectedInstallationOption, selectedDate] = selectedOptions;

     if (solarOption.value === 'Not selected') {
       alert('Please select a solar option.');
       return;
     }
     if (batteryOption.value === 'Not selected') {
       alert('Please select a battery option.');
       return;
     }
     if (evChargerOption.value === 'Not selected') {
       alert('Please select an EV charger option.');
       return;
     }
 
     if (selectedInstallationOption.value === 'Not selected') {
       alert('Please select an installation option.');
       return;
     }

     
    // 1. Validate user info
    const { userName, address, email, phoneNumber } = userInfo;
    if (!userName || userName === 'Not provided') {
      alert('Please fill in your name.');
      return;
    }
    if (!address || address === 'Not provided') {
      alert('Please fill in your address.');
      return;
    }
    if (!email || email === 'Not provided') {
      alert('Please fill in your email.');
      return;
    }
    if (!phoneNumber || phoneNumber === 'Not provided') {
      alert('Please fill in your phone number.');
      return;
    }

   

    // 3. Validate date if needed
    if (!selectedDate) {
      alert('Please select an installation date before placing an order.');
      return;
    }

    // 4. Log summary to console
    console.clear();
    console.log('Order Summary:', {
      userInfo,
      selectedOptions,
      totalPrice: formattedPrice.format(totalPrice),
      selectedDate,
    });

    // 5. Attempt to create a Stripe Checkout session
    try {
      const response = await axios.post('https://absolute-energy-83ba788af50b.herokuapp.com/api/stripe/checkout', {
        solarOption,
        batteryOption,
        evChargerOption,
        selectedInstallationOption,
        userInfo,
        selectedDate,
        totalPrice: totalPrice * 100,
      });

      const { id } = response.data;

      // 6. Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      if (error) {
        console.error('Stripe Checkout error:', error.message);
        setWarning(error.message || 'Something went wrong with the payment process. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating Stripe checkout:', error);
      setWarning('Something went wrong while initiating payment. Please try again.');
    }
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
        <TiArrowSortedDown className="text-green-500 text-2xl" />
      </div>

      {/* Order Now Button */}
      <button
        onClick={handleOrderNowClick}
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-500 transition"
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
        optionDetails={getPriceBreakdownContent()}
      />
    </footer>
  );
};

export default Footer;
