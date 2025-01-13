import solar from '../../assets/solar.jpg';
import banner from '../../assets/banner.png';

export const SolarData = [
    {
        value: '6.6kW Solar System',
        buttonText: '6.6kW Solar System',
        modalType: 'solar-6.6kW',
        price: '$6,600',
        subText: 'Recommended for small-medium households',
        images: [{ imageUrl: solar, label: 'Solar Image 1' }],
    },
    {
        value: '13kW Solar System',
        buttonText: '13kW Solar System',
        modalType: 'solar-13kW',
        price: '$12,200',
        subText: 'Recommended for medium-large households',
        images: [{ imageUrl: solar, label: 'Solar Image 1' }],
    },
    {
        value: '18kW Solar System',
        buttonText: '18kW Solar System',
        modalType: 'solar-18kW',
        price: '$16,400',
        subText: 'Recommended for high energy users',
        images: [{ imageUrl: solar, label: 'Solar Image 1' }],
    },
    {
        value: 'add or replace solar system',
        buttonText: 'I have a solar system but would like to add more or replace',
        subText: 'We’ll contact you to understand your specific needs and provide a free quote',
        images: [{ imageUrl: solar, label: 'Solar Image 1' }],
    },
    {
        value: 'I don’t need solar system',
        buttonText: 'I don’t need a solar system',
        images: [{ imageUrl: banner, label: 'Solar Image 1' }],
    },
];
