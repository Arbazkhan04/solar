import React from 'react';
import PropTypes from 'prop-types';
import './ContentBelowBanner.css';

const ContentBelowBanner = () => {
    return (
        <div className="content-below-banner thq-section-padding mt-12">
            <div className="content-wrapper">
                <p className="content-description text-start font-medium font-montserrat">
                    At Absolute Energy, we’re passionate about providing homes and businesses in Victoria with the opportunity to generate and store their own renewable energy and ensure stable backup power when the grid is down. Whether you’re considering solar panels, battery storage, or EV chargers, our expert team is here to guide you every step of the way. Our simple online product selection and installation scheduling tool makes it quick and easy to land a solar, battery, and EV charging solution. We also provide the option of customized installations and equipment for residential and commercial properties.
                </p>
                <h3 className="content-heading text-start font-roboto">Are you ready to take the next step?</h3>
                <div className="content-actions">
                    <button className="thq-button-filled hero7-button1 hero7-text5 rounded-md my-4">ORDER NOW</button>
                </div>
                <p className="text-sm">
                    Or, if you have specialist requirements, contact us to discuss your project and receive a personalized quote. You can reach us via phone, email, or by filling out the contact form below. We look forward to hearing from you!
                </p>
            </div>
        </div>
    );
};

ContentBelowBanner.propTypes = {
    rootClassName: PropTypes.string,
};

ContentBelowBanner.defaultProps = {
    rootClassName: '',
};

export default ContentBelowBanner;
