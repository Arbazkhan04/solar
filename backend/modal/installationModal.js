const mongoose = require('mongoose');

const InstallationSchedulerSchema = new mongoose.Schema({
    solarOption: {
        value: { type: String, required: true }, // e.g., "solar-existing"
        price: { type: String, required: true }  // e.g., "$500"
    },
    batteryOption: {
        value: { type: String, required: true }, // e.g., "10kwh"
        price: { type: String, required: true }  // e.g., "$4,000"
    },
    evChargerOption: {
        value: { type: String, required: true }, // e.g., "no_charger"
        price: { type: String, required: true }  // e.g., "$0"
    },
    selectedInstallationOption: {
        value: { type: String, required: true }, // e.g., "standard-installation"
        price: { type: String, required: true }  // e.g., "$0"
    },
    userInfo: {
        name: { type: String, required: true },  // e.g., "Arbaz khan"
        address: { type: String, required: true }, // e.g., "House No # 39 ..."
        email: { type: String, required: true },   // e.g., "devartitect@gmail.com"
        phone: { type: String, required: true }   // e.g., "03114592555"
    },
    selectedDate: {
        type: String, required: true             // e.g., "later"
    },
    totalPrice: {
        type: Number, required: true             // e.g., 4500 (stored as a number for easy calculations)
    },
    stripeSessionId: {
        type: String, required: true              // e.g., "cs_test_..."
    },
    paymentStatus:{
        type: String, enum: ['pending','paid'] , default: 'pending'
    },
    createdAt: {
        type: Date, default: Date.now            // Automatically add a timestamp
    }
});

const InstallationScheduler = mongoose.model('InstallationScheduler', InstallationSchedulerSchema);

module.exports = InstallationScheduler;
