import React, { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import SolarDetails from './SolarDetails';

const SolarModalData = ({ isOpen, onClose, type }) => {
    const [modalContent, setModalContent] = useState(null);

    const modalContents = {
        'solar-6.6kW': { buttonText: '6.6kW Solar System', label: <SolarDetails /> },
        'solar-13kW': { buttonText: '13kW Solar System', label: <SolarDetails /> },
        'solar-18kW': { buttonText: '18kW Solar System', label: <SolarDetails /> },
    };

    useEffect(() => {
        if (isOpen) {
            setModalContent(modalContents[type] || null);
        } else {
            const timer = setTimeout(() => setModalContent(null), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, type]);

    return <Modal isOpen={isOpen} onClose={onClose} title={modalContent?.buttonText} content={modalContent?.label} />;
};

export default SolarModalData;
