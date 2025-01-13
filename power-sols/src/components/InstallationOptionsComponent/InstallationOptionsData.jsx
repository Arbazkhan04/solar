export const InstallationOptionsData = [
    {
        value: 'included', // Ensure this matches the default value
        buttonText: 'Installation included in package cost',
        price: '', // No additional cost
        subText: 'No additional cost for installation. Included in your package.',
    },
    {
        value: 'custom-installation',
        buttonText: 'Custom Installation',
        price: '',
        subText: (
            <div className="italic">
                (Need help with specific installation requirements?{' '}
                <a href="/contact" className="text-orange-500 hover:underline">
                    Contact Us
                </a>
                )
            </div>
        ),
    },
];