import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HeroBanner.css'
import { useNavigate } from 'react-router-dom'


const HeroBanner = (props) => {
    const navigate = useNavigate();
    return (
        <div className="hero7-header23 thq-section-padding xs:mb-20 sm:mb-10 md:mb-8 lg:mb-0">
            <div className="hero7-max-width thq-section-max-width">
                <div className="hero7-content">
                    <h1 className="hero7-text1 thq-heading-1">
                        {props.heading1 ?? (
                            <Fragment>
                                <span className="hero7-text6">
                                    Power Your Home with Clean Energy
                                </span>
                            </Fragment>
                        )}
                    </h1>
                    <p className="hero7-text2 thq-body-large">
                        {props.content1 ?? (
                            <Fragment>
                                <span className="hero7-text7">
                                    Discover sustainable energy solutions for your home and start
                                    saving on your energy bills.
                                </span>
                            </Fragment>
                        )}
                    </p>
                    <div className="hero7-actions">
                        <div className="hero7-container1">
                            <button onClick={() => navigate('/order')} className="thq-button-filled hero7-button1">
                                <span className="hero7-text3 thq-body-small">
                                    {props.action1 ?? (
                                        <Fragment>
                                            <span className="hero7-text5">ORDER NOW</span>
                                        </Fragment>
                                    )}
                                </span>
                            </button>
                        </div>
                        <div className="hero7-container2">
                            <button className="thq-button-outline hero7-button2">
                                <Link to="/learn" className="hero7-text4 thq-body-small">
                                    {props.action2 ?? (
                                        <Fragment>
                                            <span className="hero7-text8">LEARN MORE</span>
                                        </Fragment>
                                    )}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroBanner.defaultProps = {
    action1: undefined,
    heading1: undefined,
    content1: undefined,
    action2: undefined,
}

HeroBanner.propTypes = {
    action1: PropTypes.element,
    heading1: PropTypes.element,
    content1: PropTypes.element,
    action2: PropTypes.element,
}

export default HeroBanner;
