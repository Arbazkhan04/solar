import React, { useEffect, useState } from 'react';
import Modal from '../shared/Modal';
import EVChargerDetails from './EVChargerDetails';

const EVChargerModalData = ({ isOpen, onClose, type }) => {
    const [modalContent, setModalContent] = useState(null);

    const modalContents = {
        'tesla-wall-connector': {
            buttonText: 'Tesla Wall Connector',
            label: <EVChargerDetails />,
        },
        'tesla-mobile-connector': {
            buttonText: 'Tesla Mobile Connector',
            label: <EVChargerDetails />,
        },
        'evnex-e2': {
            buttonText: 'EVNex E2, Made in NZ',
            label: <EVChargerDetails />,
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

    return <Modal isOpen={isOpen} onClose={onClose} title={modalContent?.buttonText} content={modalContent?.label} />;
};

export default EVChargerModalData;
