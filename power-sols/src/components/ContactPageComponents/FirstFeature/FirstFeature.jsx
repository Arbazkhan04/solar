import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './FirstFeature.css';
import CotactPageSolar from '../../../assets/contact-page-solar.jpeg';
import { useNavigate } from 'react-router-dom';

const FirstFeature = (props) => {
    const navigate = useNavigate();

    return (
        <div className={`features18-layout349 thq-section-padding ${props.rootClassName}`}>
            <div className="features18-max-width thq-section-max-width">
                {/* Text Content */}
                <div className="features18-content1">
                    <div className="features18-section-title">
                        <div className="features18-content2 xs:my-16 sm:my-8 lg:my-0">
                            <p className="features18-text10 thq-body-large">
                                {props.feature1Description ?? (
                                    <Fragment>
                                        <span>
                                            At Absolute Energy, we’re passionate about providing homes and businesses in Victoria with the opportunity to
                                            generate and store their own renewable energy. Whether you’re considering solar panels, battery storage, or EV
                                            chargers, our expert team is here to guide you every step of the way.
                                        </span>
                                        <br />
                                        <br />
                                        <span className="features18-title-text">
                                            Are you ready to take the next step?
                                        </span>

                                    </Fragment>
                                )}
                            </p>
                            <div className="features18-buttons">
                                <button
                                    className="features18-action1"
                                    onClick={() => navigate('/order')}
                                >
                                    ORDER NOW
                                </button>
                            </div>
                            <p className="features18-text10 thq-body-large">
                                {props.feature1Description ?? (
                                    <Fragment>
                                        <span>
                                            Or, if you have specialist requirements, contact us to
                                            discuss your project and receive a personalized quote. You can reach us via phone, email, or by filling out the
                                            contact form below. We look forward to hearing from you!
                                        </span>

                                    </Fragment>
                                )}
                            </p>

                        </div>
                    </div>
                </div>

               


                {/* Image */}
                <div className="features18-image-container">
                    <img
                        alt={props.feature1ImageAlt}
                        src={CotactPageSolar}
                        className="features18-placeholder-image"
                    />
                </div>
            </div>
        </div>
    );
};

FirstFeature.defaultProps = {
    feature1ImageAlt: 'Solar Panels Installation',
    feature1Description: undefined,
    feature1ImageSrc: '',
    feature1Description12: undefined,
    rootClassName: '',
    action1: undefined,
};

FirstFeature.propTypes = {
    feature1ImageAlt: PropTypes.string,
    feature1Description: PropTypes.element,
    feature1ImageSrc: PropTypes.string,
    feature1Description12: PropTypes.element,
    rootClassName: PropTypes.string,
    action1: PropTypes.element,
};

export default FirstFeature;
