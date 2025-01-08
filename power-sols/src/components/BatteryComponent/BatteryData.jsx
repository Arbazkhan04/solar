import battery from '../../assets/battery.jpg';
import battery2 from '../../assets/battery-2.jpg';
import battery3 from '../../assets/battery-3.jpg';
import battery4 from '../../assets/battery-4.jpg';
import battery5 from '../../assets/battery-5.jpg';
import battery6 from '../../assets/battery-6.jpg';
import battery7 from '../../assets/battery-7.jpg';
import battery8 from '../../assets/battery-8.jpg';
import battery9 from '../../assets/battery-9.jpg';
import battery10 from '../../assets/battery-10.jpg';

export const BatteryData = [
    {
        value: '10kWh Battery System',
        label: '10kWh Battery System',
        price: '$4,000',
        subText: 'Recommended for small households',
        modalType: 'battery-10kWh',
        images: [
            { imageUrl: battery, label: '10kWh Image 1' },
            { imageUrl: battery2, label: '10kWh Image 2' },
            { imageUrl: battery3, label: '15kWh Image 1' },
        ],
    },
    {
        value: '15kWh Battery System',
        label: '15kWh Battery System',
        price: '$5,500',
        subText: 'Recommended for medium households',
        modalType: 'battery-15kWh',
        images: [
            { imageUrl: battery, label: '15kWh Image 2' },
            { imageUrl: battery5, label: '20kWh Image 1' },
            { imageUrl: battery6, label: '20kWh Image 2' },
        ],
    },
    {
        value: '20kWh Battery System',
        label: '20kWh Battery System',
        price: '$7,000',
        subText: 'Recommended for large households',
        modalType: 'battery-20kWh',
        images: [
            { imageUrl: battery, label: '10kWh Image 3' },
            { imageUrl: battery8, label: '10kWh Image 4' },
            { imageUrl: battery9, label: '10kWh Image 5' },
            { imageUrl: battery10, label: '10kWh Image 6' },
        ],
    },
    {
        value: '25kWh Battery System',
        label: '25kWh Battery System',
        price: '$8,000',
        subText: 'Recommended for high energy users',
        modalType: 'battery-25kWh',
        images: [
            { imageUrl: battery, label: '10kWh Image 3' },
            { imageUrl: battery8, label: '10kWh Image 4' },
            { imageUrl: battery9, label: '10kWh Image 5' },
            { imageUrl: battery10, label: '10kWh Image 6' },
        ],
    },
    {
        value: 'I don’t need a battery system',
        label: 'I don’t need a battery system',
        price: '$0', // Default price for "not-needed"
        subText: '',
        modalType: null,
        images: [],
    },
];
