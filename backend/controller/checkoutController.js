const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const InstallationScheduler = require('../modal/installationModal');

const Checkout = async (req, res) => {
    try {
        const {
            batteryOption,
            solarOption,
            totalPrice,
            evChargerOption,
            selectedInstallationOption,
            userInfo,
            selectedDate,
        } = req.body;

        // Helper function to convert prices from string format ("$500") to cents
        const parsePriceToCents = (price) => Math.round(parseFloat(price.replace('$', '').replace(',', '')) * 100);

        // Create line items based on options
        const lineItems = [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: solarOption.value,
                        description: 'Solar Option',
                    },
                    unit_amount: parsePriceToCents(solarOption.price),
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: batteryOption.value,
                        description: 'Battery Option',
                    },
                    unit_amount: parsePriceToCents(batteryOption.price),
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: evChargerOption.value,
                        description: 'EV Charger Option',
                    },
                    unit_amount: parsePriceToCents(evChargerOption.price),
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: selectedInstallationOption.value,
                        description: 'Installation Option',
                    },
                    unit_amount: parsePriceToCents(selectedInstallationOption.price),
                },
                quantity: 1,
            },
        ];

        // Create a Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment', // Immediate payment capture
            success_url: `${process.env.BASE_URL}/stripeCheckout?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/stripeCheckout?canceled=true`,
        });

        // Save the session ID and other details to the database
        const installationScheduler = new InstallationScheduler({
            solarOption: solarOption,
            batteryOption: batteryOption,
            evChargerOption: evChargerOption,
            selectedInstallationOption: selectedInstallationOption,
            userInfo: userInfo,
            selectedDate: selectedDate,
            totalPrice: totalPrice,
            stripeSessionId: session.id,
        });

        await installationScheduler.save();

        res.json({ id: session.id }); // Send the session ID to the client
    } catch (error) {
        console.error('Error creating Stripe checkout session:', error);
        res.status(500).send({ error: error.message });
    }
};

module.exports = {Checkout}