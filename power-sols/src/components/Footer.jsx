import React from 'react';
import { usePrice } from './shared/PriceContext';

const Footer = () => {
  const { totalPrice } = usePrice();

  // Format the total price with commas
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice);

  return (
    <footer className="h-full flex items-center justify-center text-white text-lg">
      <p>Total Price: {formattedPrice}</p>
    </footer>
  );
};

export default Footer;
