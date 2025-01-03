import React, { useState, useEffect } from 'react';
import SolarOptions from '../../components/SolarComponent/SolarOptions';
import BatteryOptions from '../../components/BatteryComponent/BatteryOptions';
import EVChargerOptions from '../../components/EVCharger/EVChargerOptions';
import InstallationOptions from '../../components/InstallationOptionsComponent/InstallationOptions';
import UserInfoForm from '../../components/UserInfoForm';
import InstallationScheduler from '../../components/InstallationScheduler';

const RightContainer = ({ setSelectedSlides, setSelectedOptions, setUserInfo }) => {
    const [isUserInfoFilled, setIsUserInfoFilled] = useState(false);

    const [solarOption, setSolarOption] = useState({ value: 'Not selected', price: '0' });
    const [batteryOption, setBatteryOption] = useState({ value: 'Not selected', price: '0' });
    const [evChargerOption, setEVChargerOption] = useState({ value: 'Not selected', price: '0' });
    const [installationOption, setInstallationOption] = useState({ value: 'Not selected', price: '0' });

    // Update the selectedOptions whenever any of the options change
    useEffect(() => {
        const options = [
            solarOption,
            batteryOption,
            evChargerOption,
            installationOption,
        ];
        setSelectedOptions(options);
    }, [solarOption, batteryOption, evChargerOption, installationOption, setSelectedOptions]);

    const handleCheckout = () => {
        console.clear();
        console.log('Checkout Info:', {
            solarOption,
            batteryOption,
            evChargerOption,
            installationOption,
        });
    };

    return (
        <div className="pb-28 col-span-12 lg:col-span-4 h-[60vh] lg:h-screen bg-slate-100 overflow-y-auto space-y-8">
            <SolarOptions setSelectedOption={setSolarOption} setSelectedSlides={setSelectedSlides} />
            <BatteryOptions setSelectedOption={setBatteryOption} setSelectedSlides={setSelectedSlides} />
            <EVChargerOptions setSelectedOption={setEVChargerOption} setSelectedSlides={setSelectedSlides} />
            <InstallationOptions setSelectedOption={setInstallationOption} />
            <UserInfoForm onFormFilled={setIsUserInfoFilled} setUserInfo={setUserInfo} />
            <InstallationScheduler
                isUserInfoFilled={isUserInfoFilled}
                solarOption={solarOption}
                batteryOption={batteryOption}
                evChargerOption={evChargerOption}
                installationOption={installationOption}
                onCheckout={handleCheckout}
            />
        </div>
    );
};

export default RightContainer;
