import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import PropTypes from 'prop-types';
import './LandingPageHeader.css';
import logo400h from "../../../assets/logo 2-400h.png";

const LandingPageHeader = (props) => {
    const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);
    const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleOrderNowClick = () => {
        navigate('/product'); // Redirect to ProductPage
    };

    return (
        <header className={`navbar8-container10 ${props.rootClassName} `}>
            <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
                <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
                    <nav className="navbar8-links1">
                        <img
                            alt={props.imageAlt4}
                            src={logo400h}
                            className="navbar8-image1"
                        />
                        <Link to="/" className="navbar8-link11 thq-body-small thq-link">
                            {props.link1 ?? (
                                <Fragment>
                                    <span className="navbar8-text16">HOME</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link
                            to="/faq"
                            className="navbar8-link21 thq-body-small thq-link"
                        >
                            {props.link2 ?? (
                                <Fragment>
                                    <span className="navbar8-text23">FAQ</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link
                            to="/learn"
                            className="navbar8-link31 thq-body-small thq-link"
                        >
                            {props.link3 ?? (
                                <Fragment>
                                    <span className="navbar8-text18">LEARN</span>
                                </Fragment>
                            )}
                        </Link>
                        <Link
                            to="/contact"
                            className="navbar8-link41 thq-body-small thq-link"
                        >
                            {props.link4 ?? (
                                <Fragment>
                                    <span className="navbar8-text19">CONTACT</span>
                                </Fragment>
                            )}
                        </Link>
                    </nav>
                    <div className="navbar8-buttons1">
                        <button
                            className="navbar8-action11 thq-button-animated thq-button-filled"
                            onClick={handleOrderNowClick} // Redirect to ProductPage
                        >
                            <span>
                                {props.action1 ?? (
                                    <Fragment>
                                        <span className="navbar8-text17">ORDER NOW</span>
                                    </Fragment>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </header>
    );
};

LandingPageHeader.defaultProps = {
    link1: undefined,
    link2: undefined,
    link3: undefined,
    link4: undefined,
    action1: undefined,
    rootClassName: '',
};

LandingPageHeader.propTypes = {
    link1: PropTypes.element,
    link2: PropTypes.element,
    link3: PropTypes.element,
    link4: PropTypes.element,
    action1: PropTypes.element,
    rootClassName: PropTypes.string,
};

export default LandingPageHeader;
