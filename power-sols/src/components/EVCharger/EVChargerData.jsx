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

export const EVChargerData = [
    {
        value: 'no_charger',
        label: 'I already have or don’t need an EV charger',
        price: '',
        subText: '(No additional cost)',
        modalType: 'no-charger',
        images: [
            { imageUrl: battery, label: 'EV Charger Option 1' },
            { imageUrl: battery2, label: 'EV Charger Option 2' },
            { imageUrl: battery3, label: 'EV Charger Option 3' },

        ],
    },
    {
        value: 'portable',
        label: 'I want a portable EV charger',
        price: '$1,200', // Ensure prices are included
        subText: '(Compact and easy to use)',
        modalType: 'portable-charger',
        images: [{ imageUrl: battery4, label: 'EV Charger Option 4' },
        { imageUrl: battery5, label: 'EV Charger Option 5' },
        ],

    },
    {
        value: 'wall_mount',
        label: 'I want a wall-mounted EV charger',
        price: '$1,800',
        subText: '(Professional installation required)',
        modalType: 'wall-mounted-charger',
        images: [

            { imageUrl: battery6, label: 'EV Charger Option 6' },
            { imageUrl: battery7, label: 'EV Charger Option 7' },
        ],
    },
    {
        value: 'premium',
        label: 'I want a premium EV charger with advanced features',
        price: '$2,500',
        subText: '(Includes smart monitoring features)',
        modalType: 'premium-charger',
        images: [
            { imageUrl: battery8, label: 'EV Charger Option 8' },
            { imageUrl: battery9, label: 'EV Charger Option 9' },
            { imageUrl: battery10, label: 'EV Charger Option 10' },
        ],
    },
];
