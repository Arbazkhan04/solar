import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './HowWeDoIt.css'
import { useNavigate } from 'react-router-dom'
const HowWeDoIt = (props) => {
  const navigate = useNavigate()
  return (
    <div
      className={`steps21-container1 thq-section-padding ${props.rootClassName} `}
    >
      <h2 className="steps21-text10 thq-heading-2">HOW WE DO IT</h2>
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container2 thq-grid-2">
          <div className="steps21-section-header">
            <p className="thq-body-large">
              Discover the power of our straight forward system
            </p>
            <div className="steps21-actions">
              <button onClick={() =>  navigate('/order')} className="thq-button-animated thq-button-filled steps21-button">
                <span className="thq-body-small">ORDER NOW</span>
              </button>
            </div>
          </div>
          <div className="steps21-container3">
            <div className="steps21-container4 thq-card">
              <h2 className="steps21-text13 thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps21-text37">SELECTION</span>
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
              <label className="steps21-text15 thq-heading-3">01</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2 className="steps21-text16 thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps21-text35">
                      DEPOSIT &amp; SCHEDULE
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps21-text28">
                      Our professional team will handle the installation of
                      solar panels, batteries, and EV chargers at your
                      convenience, ensuring a seamless setup process.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text18 thq-heading-3">02</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2 className="steps21-text19 thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps21-text34">DESIGN CONFIRMATION</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps21-text29">
                      Once installed, we will activate your solar panels,
                      batteries, and EV chargers to start harnessing clean
                      energy for your home.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text21 thq-heading-3">03</label>
            </div>
            <div className="steps21-container7 thq-card">
              <h2 className="steps21-text22 thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps21-text36">INSTALLATION</span>
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
              <label className="steps21-text24 thq-heading-3">04</label>
            </div>
            <div className="steps21-container8 thq-card">
              <h2 className="steps21-text25 thq-heading-2">
                {props.step3Title1 ?? (
                  <Fragment>
                    <span className="steps21-text32">ENJOY THE SAVINGS</span>
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
              <label className="steps21-text27 thq-heading-3">05</label>
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
