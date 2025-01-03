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
import evCharger from '../../assets/evCharger.jpeg';
import evCharger2 from '../../assets/evCharger-2.jpeg';


export const EVChargerData = [
    {
        value: 'wall-connector',
        label: 'Tesla Wall Connector Gen 3',
        price: '$800',
        subText: 'Wall-mounted',
        modalType: 'no-charger',
        images: [
            { imageUrl: evCharger, label: 'EV Charger Option 1' },
            { imageUrl: battery, label: 'EV Charger Option 2' },
            { imageUrl: battery2, label: 'EV Charger Option 3' },
            { imageUrl: battery3, label: 'EV Charger Option 4' },
        ],
    },
    {
        value: 'high-output',
        label: 'Tesla Mobile Connector',
        price: '$1,200',
        subText: 'Supplied with high-output adapter and wall socket',
        modalType: 'high-output',
        images: [
            { imageUrl: evCharger2, label: 'EV Charger Option 5' },
            { imageUrl: battery4, label: 'EV Charger Option 6' },
            { imageUrl: battery5, label: 'EV Charger Option 7' },
        ],

    },
    {
        value: 'ev-mount',
        label: 'Smart EV Charger',
        price: '$1,800',
        subText: 'Enables you to charge from excess solar',
        modalType: 'ev-charger',
        images: [
            { imageUrl: evCharger, label: 'EV Charger Option 8' },
            { imageUrl: battery6, label: 'EV Charger Option 9' },
            { imageUrl: battery7, label: 'EV Charger Option 10' },
        ],
    },
    {
        value: 'not-needed',
        label: 'I don’t need an EV charger',
        // price: '$0',
        // subText: '',
        modalType: null, // No modal for this option
        images: [],
    },
];
