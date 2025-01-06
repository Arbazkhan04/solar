import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './LandingPageHeader.css';
import logo400h from "../../../assets/logo 2-400h.png";

const LandingPageHeader = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/order');
    };

    // Add/remove body class to disable scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('navbar8-menu-open');
        } else {
            document.body.classList.remove('navbar8-menu-open');
        }

        // Cleanup class on unmount
        return () => {
            document.body.classList.remove('navbar8-menu-open');
        };
    }, [menuOpen]);

    return (
        <>
            <header className={`navbar8-container10 ${props.rootClassName}`}>
                <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
                    {/* Desktop Menu */}
                    <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
                        <nav className="navbar8-links1">
                            <img
                                alt={props.imageAlt4}
                                src={logo400h}
                                className="navbar8-image1"
                            />
                            <Link to="/" className="navbar8-link11 thq-body-small thq-link">
                                {props.link1 ?? <span className="navbar8-text16">HOME</span>}
                            </Link>
                            <Link to="/faq" className="navbar8-link21 thq-body-small thq-link">
                                {props.link2 ?? <span className="navbar8-text23">FAQ</span>}
                            </Link>
                            <Link to="/learn" className="navbar8-link31 thq-body-small thq-link">
                                {props.link3 ?? <span className="navbar8-text18">LEARN</span>}
                            </Link>
                            <Link to="/contact" className="navbar8-link41 thq-body-small thq-link">
                                {props.link4 ?? <span className="navbar8-text19">CONTACT</span>}
                            </Link>
                        </nav>
                        <div className="navbar8-buttons1">
                            <button
                                className="navbar8-action11 thq-button-animated thq-button-filled"
                                onClick={handleOrderNowClick}
                            >
                                <span>
                                    {props.action1 ?? <span className="navbar8-text17">ORDER NOW</span>}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Hamburger Menu Button */}
                    {!menuOpen && (
                        <div
                            className="navbar8-burger-menu cursor-pointer"
                            onClick={() => setMenuOpen(true)}
                        >
                            <FaBars size={24} />
                        </div>
                    )}
                </header>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="navbar8-mobile-menu">
                    {/* Hamburger icon for closing in the top left */}
                    <div
                        className="navbar8-mobile-burger cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaBars size={24} />
                    </div>
                    <div className="navbar8-top">
                        <img alt={props.imageAlt4} src={logo400h} className="navbar8-image2" />
                    </div>
                    <nav className="navbar8-links2">
                        <Link
                            to="/"
                            className="navbar8-link12"
                            onClick={() => setMenuOpen(false)}
                        >
                            HOME
                        </Link>
                        <Link
                            to="/faq"
                            className="navbar8-link22"
                            onClick={() => setMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            to="/learn"
                            className="navbar8-link32"
                            onClick={() => setMenuOpen(false)}
                        >
                            LEARN
                        </Link>
                        <Link
                            to="/contact"
                            className="navbar8-link52"
                            onClick={() => setMenuOpen(false)}
                        >
                            CONTACT
                        </Link>
                        <button
                            className="navbar8-action11-mobile  thq-button-filled "
                            onClick={() => {
                                handleOrderNowClick();
                                setMenuOpen(false);
                            }}
                        >
                            ORDER NOW
                        </button>
                    </nav>
                    <div className="navbar8-social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>
            )}
        </>
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
