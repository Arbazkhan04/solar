import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SolarData } from './SolarData';
import SolarModalData from './SolarModalData';
import { usePrice } from '../shared/PriceContext';
import { useOptionHandler } from '../shared/useOptionHandler';

const SolarOptions = ({ setSelectedOption, setSelectedSlides }) => {
  const { updatePrice, resetPrice } = usePrice();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalType, setSelectedModalType] = useState(null);

  const { selectedOptionValue, handleOptionClick } = useOptionHandler(SolarData, updatePrice, resetPrice);

  const handleLearnMoreClick = (modalType) => {
    setSelectedModalType(modalType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedModalType(null);
  };

  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">Select Solar</h2>
      {SolarData.map((option) => (
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
            <span className="font-bold text-lg">{option.buttonText}</span>
            {option.price && <span className="text-gray-800 font-semibold">{option.price}</span>}
          </div>
          <p className="text-gray-500 text-sm">
            {option.value === 'add-replace' ? (
              <>
                Contact us{' '}
                <Link to="/contact" className="italic underline text-orange-500">
                  here
                </Link>
              </>
            ) : (
              option.subText
            )}
          </p>
          {option.modalType && (
            <button
              className="mt-2 text-gray-400 hover:underline text-sm flex items-center w-fit italic"
              onClick={(e) => {
                e.stopPropagation();
                handleLearnMoreClick(option.modalType);
              }}
            >
              More Information <span className="ml-1">›</span>
            </button>
          )}
        </div>
      ))}
      <SolarModalData isOpen={isModalOpen} onClose={handleModalClose} type={selectedModalType} />
    </div>
  );
};

SolarOptions.propTypes = {
  setSelectedOption: PropTypes.func.isRequired,
  setSelectedSlides: PropTypes.func,
};

export default SolarOptions;
