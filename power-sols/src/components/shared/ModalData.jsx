import React, { useEffect, useState } from 'react';
import Modal from './Modal';



const ModalData = ({ isOpen, onClose, type }) => {
    const [modalContent, setModalContent] = useState(null);

    // Define dynamic content for different modal types
    const modalContents = {
        'battery-10kwh': {
            buttonText: 'Pylontech Force H3X 10kWh',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Compact battery option for small energy needs.</li>
                    <li>10kWh storage capacity.</li>
                    <li>Cost-efficient and space-saving solution.</li>
                </ul>
            ),
        },
        'battery-15kwh': {
            buttonText: 'Pylontech Force H3X 15kWh',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Mid-range battery option for medium energy needs.</li>
                    <li>15kWh storage capacity with advanced technology.</li>
                    <li>Supports households with moderate energy requirements.</li>
                </ul>
            ),
        },
        'battery-20kwh': {
            buttonText: 'Pylontech Force H3X 20kWh',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>High-capacity battery for large energy demands.</li>
                    <li>20kWh storage capacity for maximum power backup.</li>
                    <li>Perfect for large households or small businesses.</li>
                </ul>
            ),
        },
        'solar-existing': {
            buttonText: 'I Already Have A Solar',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Your existing solar system is sufficient for current usage.</li>
                    <li>Consider upgrades or maintenance for better performance.</li>
                    <li>Contact us for detailed analysis and advice.</li>
                </ul>
            ),
        },
        'solar-consultation': {
            buttonText: 'Consultation',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Schedule a personalized consultation for solar setup.</li>
                    <li>Discuss energy requirements and optimal solutions.</li>
                    <li>Get expert recommendations for your solar needs.</li>
                </ul>
            ),
        },
        'solar-8kw': {
            buttonText: '8kW Solar System',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Perfect for smaller energy users or small households.</li>
                    <li>Estimated energy generation: 30 kWh/day.</li>
                    <li>Compact and budget-friendly solution.</li>
                </ul>
            ),
        },
        'solar-13kw': {
            buttonText: '13kW Solar System',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Recommended for medium energy users or EV owners.</li>
                    <li>Estimated energy generation: 50 kWh/day.</li>
                    <li>Supports appliances, EV charging, and more.</li>
                </ul>
            ),
        },
        'solar-18kw': {
            buttonText: '18kW Solar System',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Designed for high-energy-demand homes or large families.</li>
                    <li>Estimated energy generation: 70 kWh/day.</li>
                    <li>Best for EV owners and extensive appliance usage.</li>
                </ul>
            ),
        },

        // EV Charger Modal Content
        'no-charger': {
            buttonText: 'I already have or don’t need an EV charger',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>No additional cost for this option.</li>
                    <li>Use your existing EV charger.</li>
                    <li>Ideal for those who have already installed a charger.</li>
                </ul>
            ),
        },
        'portable-charger': {
            buttonText: 'I want a portable EV charger',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Compact and easy-to-use portable EV charger.</li>
                    <li>Cost: $1,200.</li>
                    <li>Perfect for flexible charging needs.</li>
                </ul>
            ),
        },
        'wall-mounted-charger': {
            buttonText: 'I want a wall-mounted EV charger',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Professionally installed wall-mounted EV charger.</li>
                    <li>Cost: $1,800.</li>
                    <li>Ideal for home garages or dedicated charging stations.</li>
                </ul>
            ),
        },
        'premium-charger': {
            buttonText: 'I want a premium EV charger with advanced features',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced EV charger with smart monitoring features.</li>
                    <li>Cost: $2,500.</li>
                    <li>Provides energy insights and advanced scheduling options.</li>
                </ul>
            ),
        },

        // Installation Options Modal Content
        'standard-installation': {
            buttonText: 'Standard Installation',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Included in the package at no extra cost.</li>
                    <li>Basic setup for standard environments.</li>
                    <li>Quick and efficient installation by certified technicians.</li>
                </ul>
            ),
        },
        'custom-installation': {
            buttonText: 'Custom Installation',
            label: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Special installation for unique site requirements.</li>
                    <li>Cost: $1,500.</li>
                    <li>Tailored to meet complex or non-standard setups.</li>
                </ul>
            ),
        },
    };

    useEffect(() => {
        if (isOpen) {
            // Update modal content based on type when modal opens
            setModalContent(modalContents[type] || null);
        } else {
            // Reset content after closing with a slight delay
            const timer = setTimeout(() => setModalContent(null), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, type]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            optionDetails={modalContent} // Pass the selected content to Modal
        />
    );
};

export default ModalData;
