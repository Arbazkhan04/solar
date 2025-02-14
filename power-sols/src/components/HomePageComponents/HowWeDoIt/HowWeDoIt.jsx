import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './HowWeDoIt.css'
import { useNavigate } from 'react-router-dom'
const HowWeDoIt = (props) => {
  const navigate = useNavigate()
  return (
    <div
      className={`steps21-container1 thq-section-padding min-h-[60vh] relative ${props.rootClassName} `}
    >
      <h2 className="steps21-text10 thq-heading-2">HOW WE DO IT</h2>
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container2 thq-grid-2">
          <div className="steps21-section-header">
            <p className="thq-body-large">
              Discover the power of our straight forward system
            </p>
            <div className="steps21-actions">
              <button onClick={() => navigate('/order')} className="thq-button-animated thq-button-filled steps21-button">
                <span className="thq-body-small">ORDER NOW</span>
              </button>
            </div>
          </div>
          <div className="steps21-container3 xs:mb-72 ssm:mb-36 msm:mb-0 lsm:mb-0 md:mb-36 lg:mb-0 ">
            <div className="steps21-container4 thq-card sticky top-20 z-0">
              <h2 className="steps21-text13 thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps21-text37 xs:text-2xl sm:text-3xl">SELECTION</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps21-text31">
                      Configure your system in our tool under &apos;Order
                      Now&apos;. Select the options that suit your needs.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text15 thq-heading-3 xs:text-2xl sm:text-3xl">01</label>
            </div>
            <div className="steps21-container5 thq-card sticky top-20 z-10">
              <h2 className="steps21-text16 thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps21-text35 xs:text-2xl sm:text-3xl">
                      DEPOSIT &amp; SCHEDULE
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps21-text28">
                      Select your installation date using our easy to use online
                      scheduling tool and pay your deposit to secure your installation
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text18 thq-heading-3 xs:text-2xl sm:text-3xl">02</label>
            </div>
            <div className="steps21-container6 thq-card sticky top-20 z-20">
              <h2 className="steps21-text19 thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps21-text34 xs:text-2xl sm:text-3xl">DESIGN CONFIRMATION</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps21-text29">
                      We’ll send you the proposed layout and conduct a site visit if
                      necessary. Once you’re happy with the layout we can proceed to installation
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text21 thq-heading-3 xs:text-2xl sm:text-3xl">03</label>
            </div>
            <div className="steps21-container7 thq-card sticky top-20 z-30">
              <h2 className="steps21-text22 thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps21-text36 xs:text-2xl sm:text-3xl">INSTALLATION</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps21-text33">
                      Professional installation of selected products by
                      certified technicians to ensure optimal performance.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text24 thq-heading-3 xs:text-2xl sm:text-3xl">04</label>
            </div>
            <div className="steps21-container8 thq-card sticky top-20 z-40">
              <h2 className="steps21-text25 thq-heading-2">
                {props.step3Title1 ?? (
                  <Fragment>
                    <span className="steps21-text32 xs:text-2xl sm:text-3xl">ENJOY THE SAVINGS</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text26 thq-body-small">
                {props.step3Description1 ?? (
                  <Fragment>
                    <span className="steps21-text30">
                      Start enjoying the benefits of clean energy and savings on
                      your electricity bills.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text27 thq-heading-3 xs:text-2xl sm:text-3xl">05</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HowWeDoIt.defaultProps = {
  step2Description: undefined,
  step3Description: undefined,
  step3Description1: undefined,
  step1Description: undefined,
  step3Title1: undefined,
  step4Description: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step4Title: undefined,
  rootClassName: '',
  step1Title: undefined,
}

HowWeDoIt.propTypes = {
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Description1: PropTypes.element,
  step1Description: PropTypes.element,
  step3Title1: PropTypes.element,
  step4Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step4Title: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Title: PropTypes.element,
}

export default HowWeDoIt;
