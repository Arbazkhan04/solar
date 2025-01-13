import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.css';
import logo1400w from '../../../assets/logo 2-1400w.png';
import { useNavigate } from 'react-router-dom';

const HeroBanner = (props) => {
    const navigate = useNavigate();
    return (
        <div className={`hero17-header78 ${props.rootClassName}`}>
            <div className="hero17-column">
                <img
                    alt={props.imageAlt9}
                    src={logo1400w}
                    className="hero17-logo"
                />
                <div className="hero17-content">
                    <h1 className="hero17-title">
                        {props.heading1 ?? 'Simplifying Your Future Energy Needs'}
                    </h1>
                    <p className="hero17-subtext">
                        {props.content1 ??
                            'Order solar panels, batteries and EV chargers online, including high quality installation at your home or business.'}
                    </p>
                </div>
                <button
                    onClick={() => navigate('/order')}
                    className="thq-button-filled hero7-text5 w-[60%] md:w-[25%]"
                >
                    {props.action1 ?? 'ORDER NOW'}
                </button>
            </div>
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
};

HeroBanner.propTypes = {
    imageSrc9: PropTypes.string,
    heading1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    imageAlt9: PropTypes.string,
    content1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    action1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    rootClassName: PropTypes.string,
};

export default HeroBanner;
