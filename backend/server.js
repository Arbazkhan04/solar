require('dotenv').config()
const express = require("express")
const connectDb = require("./db_config/connect")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()


// webhoool for stripe related to payment
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    console.log('Received Stripe event:');
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.ENDPOINTSCRETKEYFORPAYMENT;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error(`Webhook error: ${err.message}`);
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        try {
            // Store the paymentIntent ID and update paymentStatus
            await Job.updateOne(
                { stripeSessionId: session.id },
                {
                    $set: {
                        'paymentInfo.status': 'authorized',
                        paymentIntentId: session.payment_intent
                    }
                }
            );
            console.log('Payment status updated to authorized for session:', session.id);
        } catch (error) {
            console.log('Error updating payment status:', error);
        }
    }

    //handle stripe cancel event
    if (event.type === 'payment_intent.canceled') {
        const paymentIntent = event.data.object;

        try {
            const job = await Job.findOne({ paymentIntentId: paymentIntent.id });
            if (job) {
                await Job.updateOne(
                    { _id: job._id },
                    { paymentStatus: 'canceled' }
                );
                console.log(`Payment intent ${paymentIntent.id} was canceled.`);
            }
        } catch (error) {
            console.log('Error handling payment_intent.canceled:', error);
        }
    }


    res.json({ received: true });
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.raw());
app.use(cors());


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Header for your Application



const port = process.env.PORT || 3000;


// routes
app.use('/api/stripe', require('./routes/StripeCheckoutRouter.js'));


const start = async () => {
    try {
        // await connectDb(process.env.MONGO_URL);
        console.log('Database connected')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
    catch (err) {
        console.log(err);
    }
}
start()