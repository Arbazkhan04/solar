import React, { useState } from 'react';
import SolarOptions from '../components/SolarComponent/SolarOptions';
import BatteryOptions from '../components/BatteryComponent/BatteryOptions';
import EVChargerOptions from '../components/EVCharger/EVChargerOptions';
import InstallationOptions from '../components/InstallationOptionsComponent/InstallationOptions';
import UserInfoForm from '../components/UserInfoForm';
import InstallationScheduler from '../components/InstallationScheduler';

const RightContainer = ({ setSelectedSlides, setSelectedOption }) => {
    const [isUserInfoFilled, setIsUserInfoFilled] = useState(false);
    const [userInfo, setUserInfo] = useState({
        userName: 'Not provided',
        address: 'Not provided',
        email: 'Not provided',
        phoneNumber: 'Not provided',
    });

    const [solarOption, setSolarOption] = useState({ value: 'Not selected', price: '$0' });
    const [batteryOption, setBatteryOption] = useState({ value: 'Not selected', price: '$0' });
    const [evChargerOption, setEVChargerOption] = useState({ value: 'Not selected', price: '$0' });
    const [selectedInstallationOption, setSelectedInstallationOption] = useState({
        value: 'Not selected',
        price: '$0',
    });

    const handleCheckout = () => {
        console.clear();
        console.log('Checkout Info:');
        console.log('Solar Option:', solarOption);
        console.log('Battery Option:', batteryOption);
        console.log('EV Charger Option:', evChargerOption);
        console.log('Installation Option:', selectedInstallationOption);
        console.log('User Info:', userInfo);
    };

    return (
        <div className="col-span-12 lg:col-span-4 h-[60vh] lg:h-screen bg-slate-100 overflow-y-auto p-6 space-y-8">
            <SolarOptions setSelectedOption={setSolarOption} setSelectedSlides={setSelectedSlides} />
            <BatteryOptions setSelectedOption={setBatteryOption} setSelectedSlides={setSelectedSlides} />
            <EVChargerOptions setSelectedOption={setEVChargerOption} setSelectedSlides={setSelectedSlides} />
            <InstallationOptions setSelectedOption={setSelectedInstallationOption} />
            <UserInfoForm onFormFilled={setIsUserInfoFilled} setUserInfo={setUserInfo} />
            <InstallationScheduler
                isUserInfoFilled={isUserInfoFilled}
                userInfo={userInfo}
                solarOption={solarOption}
                batteryOption={batteryOption}
                evChargerOption={evChargerOption}
                selectedInstallationOption={selectedInstallationOption}
                onCheckout={handleCheckout}
            />
        </div>
    );
};

export default RightContainer;
