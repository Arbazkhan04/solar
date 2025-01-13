// src/components/BatteryData.js
import battery from '../../assets/battery.png';

export const BatteryData = [
    {
        value: '10kWh Battery System',
        label: '10kWh Battery System',
        price: '$9,785',
        subText: 'Recommended for small households',
        modalType: 'battery-10kWh',
        images: [
            { imageUrl: battery, label: '10kWh Image 1' },
        ],
    },
    {
        value: '15kWh Battery System',
        label: '15kWh Battery System',
        price: '$13,685',
        subText: 'Recommended for medium households',
        modalType: 'battery-15kWh',
        images: [
            { imageUrl: battery, label: '15kWh Image 2' },
        ],
    },
    {
        value: '20kWh Battery System',
        label: '20kWh Battery System',
        price: '$17,585',
        subText: 'Recommended for large households',
        modalType: 'battery-20kWh',
        images: [
            { imageUrl: battery, label: '20kWh Image 3' },
        ],
    },
    {
        value: 'I don’t need a battery system',
        label: 'I don’t need a battery system',
        price: '',
        subText: '',
        modalType: null,
        images: [],
    },
];
