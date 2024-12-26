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
        value: '10kwh',
        label: 'Pylontech Force H3X 10kWh',
        price: '$4,000',
        subText: '(Compact Battery Option)',
        modalType: 'battery-10kwh',
        images: [
            { imageUrl: battery, label: '10kWh Image 1' },
            { imageUrl: battery2, label: '10kWh Image 2' },
            { imageUrl: battery3, label: '15kWh Image 1' },
        ],
    },
    {
        value: '15kwh',
        label: 'Pylontech Force H3X 15kWh',
        price: '$5,500',
        subText: '(Mid-range Battery Option)',
        modalType: 'battery-15kwh',
        images: [
            { imageUrl: battery4, label: '15kWh Image 2' },
            { imageUrl: battery5, label: '20kWh Image 1' },
            { imageUrl: battery6, label: '20kWh Image 2' },

        ],
    },
    {
        value: '20kwh',
        label: 'Pylontech Force H3X 20kWh',
        price: '$7,000',
        subText: '(High-capacity Battery Option)',
        modalType: 'battery-20kwh',
        images: [
            { imageUrl: battery7, label: '10kWh Image 3' },
            { imageUrl: battery8, label: '10kWh Image 4' },
            { imageUrl: battery9, label: '10kWh Image 5' },
            { imageUrl: battery10, label: '10kWh Image 6' },
        ],
    },
];
