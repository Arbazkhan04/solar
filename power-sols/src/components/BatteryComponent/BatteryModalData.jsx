import React, { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import BatteryDetails from './BatteryDetails';

const BatteryModalData = ({ isOpen, onClose, type }) => {
    const [modalContent, setModalContent] = useState(null);

    const modalContents = {
        'battery-10kWh': {
            title: '10kWh Battery System',
            content: <BatteryDetails />,
        },
        'battery-15kWh': {
            title: '15kWh Battery System',
            content: <BatteryDetails />,
        },
        'battery-20kWh': {
            title: '20kWh Battery System',
            content: <BatteryDetails />,
        },
    };

    useEffect(() => {
        if (isOpen) {
            setModalContent(modalContents[type] || null);
        } else {
            const timer = setTimeout(() => setModalContent(null), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, type]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={modalContent?.title || ''}
            content={modalContent?.content || ''}
        />
    );
};

export default BatteryModalData;
