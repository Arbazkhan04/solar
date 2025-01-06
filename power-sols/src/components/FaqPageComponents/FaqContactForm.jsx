import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './FaqContactForm.css'

const FaqContactForm = (props) => {
  return (
    <div
      className={`contact-form4-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form4-max-width">
        <div className="contact-form4-content1 thq-flex-column">
          <div className="contact-form4-section-title thq-card">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form4-text15">
                    <span className="contact-form4-text16">
                      Have more questions or need more information?
                    </span>
                    <br className="contact-form4-text17"></br>
                    <br></br>
                    <span>
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form4-content2"></div>
          </div>
          <form className="thq-card">
            <div className="contact-form4-input1">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-4-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-input2">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                Phone number
              </label>
              <input
                type="text"
                id="contact-form-4-name"
                placeholder="Phone number"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-input3">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-4-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-container">
              <label
                htmlFor="contact-form-4-message"
                className="thq-body-small"
              >
                Question
              </label>
              <textarea
                id="contact-form-4-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <button
              type="submit"
              className="contact-form4-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form4-text20">SEND</span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

FaqContactForm.defaultProps = {
  content2: undefined,
  rootClassName: '',
  action: undefined,
}

FaqContactForm.propTypes = {
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
  action: PropTypes.element,
}

export default FaqContactForm;
