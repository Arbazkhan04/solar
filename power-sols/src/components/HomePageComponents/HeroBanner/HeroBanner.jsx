import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.css';
import logo1400w from "../../../assets/logo 2-1400w.png";
import OrangeSeparator from "../../../assets/orange-separator.jpeg";
import { useNavigate } from 'react-router-dom';

const HeroBanner = (props) => {
    const navigate = useNavigate();
    return (
        <div className={`hero17-header78  ${props.rootClassName}`}>
            <div className="hero17-column  thq-section-max-width thq-section-padding xs:p-2 sm:p-[80px]">
                <img
                    alt={props.imageAlt9}
                    src={logo1400w}
                    className="hero17-image1"
                />
                <div className="hero17-content1">
                    <h1 className="hero17-text1 thq-heading-1">
                        {props.heading1 ?? (
                            <Fragment>
                                <span className="hero17-text4">
                                    Simplifying Your Future Energy Needs
                                </span>
                            </Fragment>
                        )}
                    </h1>
                    <p className="hero17-text2 thq-body-large">
                        {props.content1 ?? (
                            <Fragment>
                                <span className="hero17-text5">
                                    Order solar panels, batteries, and EV chargers with ease to
                                    power your home sustainably.
                                </span>
                            </Fragment>
                        )}
                    </p>
                </div>
                <div className="hero17-actions ">
                    <button onClick={() => navigate('/order')} className="thq-button-filled hero17-button">
                        <span className="thq-body-small">
                            {props.action1 ?? (
                                <Fragment>
                                    <span className="hero17-text6 ">ORDER NOW</span>
                                </Fragment>
                            )}
                        </span>
                    </button>
                </div>
            </div>
            <img
                alt={props.imageAlt10}
                src={OrangeSeparator}
                className="hero17-image2"
            />
        </div>
    );
};

HeroBanner.defaultProps = {
    imageSrc9: '/logo%202-1400w.png',
    heading1: undefined,
    imageAlt9: 'image',
    content1: undefined,
    action1: undefined,
    rootClassName: '',
    imageAlt10: 'image',
    imageSrc10:
        'https://images.unsplash.com/photo-1519849968456-c4918b53e694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTc4ODUxOXw&ixlib=rb-4.0.3&q=80&w=1500',
};

HeroBanner.propTypes = {
    imageSrc9: PropTypes.string,
    heading1: PropTypes.element,
    imageAlt9: PropTypes.string,
    content1: PropTypes.element,
    action1: PropTypes.element,
    rootClassName: PropTypes.string,
    imageAlt10: PropTypes.string,
    imageSrc10: PropTypes.string,
};

export default HeroBanner;
