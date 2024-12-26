const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Checkout = async (req, res) => {
    try {
        // const { details } = req.body; // Get amount and jobId from request body

        // Ensure amount is passed in cents
        // const amountInCents = amount; // Assuming amount is already in cents

        // Create a checkout session with immediate payment capture
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Solar & Battery Installation',
                        },
                        unit_amount: 400,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment', // Immediate payment capture
            success_url: `${process.env.BASE_URL}/stripeCheckout?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/stripeCheckout?canceled=true`,
        });

        // Update the job with the new Stripe session ID and amount
        // const updatedJob = await Job.findByIdAndUpdate(
        //     jobId,
        //     {
        //         price: amountInCents,
        //         stripeSessionId: session.id,
        //     },
        //     { new: true } // Return the updated job
        // );

        // if (!updatedJob) {
        //     return res.status(404).send({ error: "Job not found" });
        // }

        res.json({ id: session.id }); // Send the session ID to the client
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {Checkout}