import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Testimonial.css'
import testimonial1 from '../../../assets/testimonial-1.jpeg'
import testimonial2 from '../../../assets/testimonial-2.jpeg'
import testimonial3 from '../../../assets/testimonial-3.jpeg'
import testimonial4 from '../../../assets/testimonial-4.jpeg'

const Testimonial = (props) => {
    return (
        <div className="thq-section-padding">
            <div className="testimonial17-max-width thq-section-max-width">
                <div className="testimonial17-container10">
                    <h2 className="thq-heading-2">
                        {props.heading1 ?? (
                            <Fragment>
                                <span className="testimonial17-text28">Testimonials</span>
                            </Fragment>
                        )}
                    </h2>
                    <span className="testimonial17-text11 thq-body-small">
                        {props.content1 ?? (
                            <Fragment>
                                <span className="testimonial17-text37">
                                    Read what our customers have to say about their experience
                                    with our home energy solutions.
                                </span>
                            </Fragment>
                        )}
                    </span>
                </div>
                <div className="thq-grid-2">
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div
                                data-animated="true"
                                className="thq-card testimonial17-card1"
                            >
                                <div className="testimonial17-container12">
                                    <img
                                        alt={props.author1Alt}
                                        src={testimonial1}
                                        className="testimonial17-image1"
                                    />
                                    <div className="testimonial17-container13">
                                        <strong className="thq-body-large">
                                            {props.author1Name ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text36">John Doe</span>
                                                </Fragment>
                                            )}
                                        </strong>
                                        <span className="thq-body-small">
                                            {props.author1Position ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text25">
                                                        Homeowner
                                                    </span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial17-text14 thq-body-small">
                                    {props.review1 ?? (
                                        <Fragment>
                                            <span className="testimonial17-text35">
                                                I installed solar panels from this company, and I
                                                couldn&apos;t be happier with the results. My energy
                                                bills have significantly decreased, and I feel good
                                                about reducing my carbon footprint.
                                            </span>
                                        </Fragment>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div
                                data-animated="true"
                                className="thq-card testimonial17-card2"
                            >
                                <div className="testimonial17-container14">
                                    <img
                                        alt={props.author2Alt}
                                        src={testimonial2}
                                        className="testimonial17-image2"
                                    />
                                    <div className="testimonial17-container15">
                                        <strong className="thq-body-large">
                                            {props.author2Name ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text33">
                                                        Jane Smith
                                                    </span>
                                                </Fragment>
                                            )}
                                        </strong>
                                        <span className="thq-body-small">
                                            {props.author2Position ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text34">
                                                        Environmental Advocate
                                                    </span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial17-text17 thq-body-small">
                                    {props.review2 ?? (
                                        <Fragment>
                                            <span className="testimonial17-text32">
                                                The battery system I purchased has been a game-changer
                                                for me. It&apos;s reliable, efficient, and has given me
                                                peace of mind during power outages.
                                            </span>
                                        </Fragment>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div
                                data-animated="true"
                                className="thq-card testimonial17-card3"
                            >
                                <div className="testimonial17-container16">
                                    <img
                                        alt={props.author3Alt}
                                        src={testimonial3}
                                        className="testimonial17-image3"
                                    />
                                    <div className="testimonial17-container17">
                                        <strong className="thq-body-large">
                                            {props.author3Name ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text30">
                                                        David Johnson
                                                    </span>
                                                </Fragment>
                                            )}
                                        </strong>
                                        <span className="thq-body-small">
                                            {props.author3Position ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text31">
                                                        Electric Vehicle Owner
                                                    </span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial17-text20 thq-body-small">
                                    {props.review3 ?? (
                                        <Fragment>
                                            <span className="testimonial17-text26">
                                                I got an EV charger installed at my home, and it has
                                                made charging my electric car so convenient. The
                                                installation was quick, and the charger works
                                                flawlessly.
                                            </span>
                                        </Fragment>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div
                                data-animated="true"
                                className="thq-card testimonial17-card4"
                            >
                                <div className="testimonial17-container18">
                                    <img
                                        alt={props.author4Alt}
                                        src={testimonial4}
                                        className="testimonial17-image4"
                                    />
                                    <div className="testimonial17-container19">
                                        <strong className="thq-body-large">
                                            {props.author4Name ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text24">
                                                        Sarah Lee
                                                    </span>
                                                </Fragment>
                                            )}
                                        </strong>
                                        <span className="thq-body-small">
                                            {props.author4Position ?? (
                                                <Fragment>
                                                    <span className="testimonial17-text27">
                                                        Renewable Energy Enthusiast
                                                    </span>
                                                </Fragment>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial17-text23 thq-body-small">
                                    {props.review4 ?? (
                                        <Fragment>
                                            <span className="testimonial17-text29">
                                                I highly recommend this company for all your home energy
                                                needs. Their products are top-notch, and their customer
                                                service is exceptional.
                                            </span>
                                        </Fragment>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Testimonial.defaultProps = {
    author3Src:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
    author4Name: undefined,
    author4Alt: 'Sarah Lee - Renewable Energy Enthusiast',
    author1Alt: 'John Doe - Homeowner',
    author1Position: undefined,
    review3: undefined,
    author4Position: undefined,
    heading1: undefined,
    review4: undefined,
    author3Alt: 'David Johnson - Electric Vehicle Owner',
    author2Alt: 'Jane Smith - Environmental Advocate',
    author3Name: undefined,
    author3Position: undefined,
    review2: undefined,
    author4Src:
        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
    author2Name: undefined,
    author2Src:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
    author2Position: undefined,
    review1: undefined,
    author1Name: undefined,
    author1Src:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
    content1: undefined,
}

Testimonial.propTypes = {
    author3Src: PropTypes.string,
    author4Name: PropTypes.element,
    author4Alt: PropTypes.string,
    author1Alt: PropTypes.string,
    author1Position: PropTypes.element,
    review3: PropTypes.element,
    author4Position: PropTypes.element,
    heading1: PropTypes.element,
    review4: PropTypes.element,
    author3Alt: PropTypes.string,
    author2Alt: PropTypes.string,
    author3Name: PropTypes.element,
    author3Position: PropTypes.element,
    review2: PropTypes.element,
    author4Src: PropTypes.string,
    author2Name: PropTypes.element,
    author2Src: PropTypes.string,
    author2Position: PropTypes.element,
    review1: PropTypes.element,
    author1Name: PropTypes.element,
    author1Src: PropTypes.string,
    content1: PropTypes.element,
}

export default Testimonial;
