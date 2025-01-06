import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './HeroBanner.css'

const HeroBanner = (props) => {
    return (
        <div className={`hero1711-header78 ${props.rootClassName} `}>
            <div className="hero1711-container1">
                <div className="hero1711-content1"></div>
                <div className="hero1711-column thq-section-max-width thq-section-padding">
                    <img
                        alt={props.imageAlt9}
                        src={props.imageSrc9}
                        className="hero1711-image"
                    />
                    <div className="hero1711-content2">
                        <h1 className="hero1711-text1 thq-heading-1">
                            {props.heading1 ?? (
                                <Fragment>
                                    <span className="hero1711-text2">LEARN</span>
                                </Fragment>
                            )}
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero1711-container3">
                    <Script
                        html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
                    ></Script>
                </div>
            </div>
        </div>
    )
}

HeroBanner.defaultProps = {
    heading1: undefined,
    imageSrc9: '/logo%202-200h.png',
    rootClassName: '',
    imageAlt9: 'image',
}

HeroBanner.propTypes = {
    heading1: PropTypes.element,
    imageSrc9: PropTypes.string,
    rootClassName: PropTypes.string,
    imageAlt9: PropTypes.string,
}

export default HeroBanner;
