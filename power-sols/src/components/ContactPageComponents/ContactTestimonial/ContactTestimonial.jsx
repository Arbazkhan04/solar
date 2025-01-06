import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './ContactTestimonial.css'
import ContactPageTestimonial from "../../../assets/ContactPageTestimonial.jpeg";
import logo from "../../../assets/logo-2.jpeg"


const ContactTestimonial = (props) => {
    return (
        <div className="thq-section-padding">
            <div className="testimonial2-max-width thq-section-max-width">
                <div className="testimonial2-stars">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                </div>
                <p className="testimonial2-text1 thq-body-large">
                    {props.review1 ?? (
                        <Fragment>
                            <span className="testimonial2-text4">
                                I had solar panels installed by this company and I couldn&apos;t
                                be happier with the results. My energy bills have significantly
                                decreased and I feel good knowing I&apos;m reducing my carbon
                                footprint.
                            </span>
                        </Fragment>
                    )}
                </p>
                <div className="testimonial2-avatar">
                    <img
                        alt={props.author1Alt}
                        src={ContactPageTestimonial}
                        className="testimonial2-avatar-image thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial2-avatar-content">
                        <span className="testimonial2-text2 thq-body-small">
                            {props.author1Name ?? (
                                <Fragment>
                                    <span className="testimonial2-text6">Sarah Johnson</span>
                                </Fragment>
                            )}
                        </span>
                        <span className="testimonial2-text3 thq-body-small">
                            {props.author1Position ?? (
                                <Fragment>
                                    <span className="testimonial2-text5">Homeowner</span>
                                </Fragment>
                            )}
                        </span>
                    </div>
                    <img
                        alt={props.company1LogoAlt}
                        src={logo}
                        className="object-contain h-20 large-logo"
                    />
                </div>
            </div>
        </div>
    )
}

ContactTestimonial.defaultProps = {
    author1Src:
        'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTcyMTU4OHw&ixlib=rb-4.0.3&q=80&w=1080',
    review1: undefined,
    author1Alt: 'Sarah Johnson',
    author1Position: undefined,
    company1LogoAlt: 'Company Logo',
    company1LogoSrc:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    author1Name: undefined,
}

ContactTestimonial.propTypes = {
    author1Src: PropTypes.string,
    review1: PropTypes.element,
    author1Alt: PropTypes.string,
    author1Position: PropTypes.element,
    company1LogoAlt: PropTypes.string,
    company1LogoSrc: PropTypes.string,
    author1Name: PropTypes.element,
}

export default ContactTestimonial;
