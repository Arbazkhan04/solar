export const InstallationOptionsData = [
    {
        value: 'installation-included', // Ensure this matches the default value
        buttonText: 'Installation included in package cost',
        price: '$0', // No additional cost
        subText: 'No additional cost for installation. Included in your package.',
    },
    {
        value: 'custom-installation',
        buttonText: 'Custom Installation',
        price: '$1,500',
        subText: (
            <>
                (Need help with specific installation requirements?{' '}
                <a href="/contact" className="text-orange-500 hover:underline">
                    Contact Us
                </a>
                )
            </>
        ),
    },
];
