import evCharger from '../../assets/evCharger.jpeg';
import evCharger2 from '../../assets/evCharger-2.jpeg';

export const EVChargerData = [
    {
        value: 'Tesla Wall Connector',
        label: 'Tesla Wall Connector',
        price: '$1090',
        subText: 'Wall-mounted',
        modalType: null,
        images: [{ imageUrl: evCharger, label: 'EV Charger Option 1' }],
    },
    {
        value: 'Tesla Mobile Connector',
        label: 'Tesla Mobile Connector',
        price: '$1050',
        subText: 'Supplied with high-output adapter and wall socket',
        modalType: null,
        images: [{ imageUrl: evCharger2, label: 'EV Charger Option 2' }],
    },
    {
        value: 'EVNex E2, Made in NZ',
        label: 'EVNex E2, Made in NZ',
        price: '$2295',
        subText: 'Enables you to charge from excess solar',
        modalType: null,
        images: [{ imageUrl: evCharger, label: 'EV Charger Option 3' }],
    },
    {
        value: 'don’t need an EV charger',
        label: 'I don’t need an EV charger',
        modalType: null,
        images: [],
    },
];
