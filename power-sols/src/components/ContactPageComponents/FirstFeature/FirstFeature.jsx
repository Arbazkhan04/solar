import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './FirstFeature.css'
import CotactPageSolar from "../../../assets/contact-page-solar.jpeg";


const FirstFeature = (props) => {
    return (
        <div
            className={`features18-layout349 thq-section-padding ${props.rootClassName} `}
        >
            <div className="features18-max-width thq-section-max-width">
                <div className="features18-content1">
                    <div className="features18-section-title">
                        <div className="features18-content2">
                            <p className="features18-text10 thq-body-large">
                                {props.feature1Description ?? (
                                    <Fragment>
                                        <span className="features18-text13">
                                            <span>
                                                At Absolute Energy, we’re passionate about providing
                                                homes and businesses in Victoria with the opportunity to
                                                generate and store their own renewable energy and ensure
                                                stable backup power when the grid is down. Whether
                                                you’re considering solar panels, battery storage, or EV
                                                chargers, our expert team is here to guide you every
                                                step of the way. Our simple online product selection and
                                                installation scheduling tool makes it quick and easy to
                                                land a solar, battery and EV charging solution. We also
                                                provide the option of customized installations and
                                                equipment for residential and commercial properties.
                                            </span>
                                            <br></br>
                                            <br></br>
                                            <span>
                                                Are you ready to take the next step?
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: ' ',
                                                    }}
                                                />
                                            </span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </p>
                            <div className="features18-buttons">
                                <div className="features18-container"></div>
                                <button className="features18-action1 thq-button-animated thq-button-filled">
                                    <span>
                                        {props.action1 ?? (
                                            <Fragment>
                                                <span className="features18-text23">ORDER NOW</span>
                                            </Fragment>
                                        )}
                                    </span>
                                </button>
                            </div>
                            <p className="features18-text12 thq-body-large">
                                {props.feature1Description12 ?? (
                                    <Fragment>
                                        <span className="features18-text19">
                                            <span>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: ' ',
                                                    }}
                                                />
                                            </span>
                                            <span className="features18-text21">
                                                Or, if you have specialist requirements contact us to
                                                discuss your project and receive a personalized quote.
                                                You can reach us via phone, email, or by filling out the
                                                contact form below. We look forward to hearing from you!
                                            </span>
                                            <br></br>
                                        </span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="features18-image-container">
                    <img
                        alt={props.feature1ImageAlt}
                        src={CotactPageSolar}
                        className="features18-placeholder-image thq-img-ratio-16-9"
                    />
                </div>
            </div>
        </div>
    )
}

FirstFeature.defaultProps = {
    feature1ImageAlt: 'Solar Panels Installation',
    feature1Description: undefined,
    feature1ImageSrc:
        'https://images.unsplash.com/photo-1668097613569-3405bb63262b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTcyNTg3M3w&ixlib=rb-4.0.3&q=80&w=1400',
    feature1Description12: undefined,
    rootClassName: '',
    action1: undefined,
}

FirstFeature.propTypes = {
    feature1ImageAlt: PropTypes.string,
    feature1Description: PropTypes.element,
    feature1ImageSrc: PropTypes.string,
    feature1Description12: PropTypes.element,
    rootClassName: PropTypes.string,
    action1: PropTypes.element,
}

export default FirstFeature;
