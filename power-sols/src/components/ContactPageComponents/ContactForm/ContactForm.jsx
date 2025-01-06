import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import './ContactForm.css'



const ContactForm = (props) => {
  return (
    <div className="contact-form2-contact5 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row contact-form2-max-width">
        <div className="thq-flex-column contact-form2-content">
          <div className="contact-form2-section-title">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form2-text25">
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form2-text20">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form2-text17">
                    <span>Have a question or need more information?</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="contact-form2-contact-info thq-flex-column">
            <div className="contact-form2-row1 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form2-text21">Email address</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form2-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form2-text22">Phone number</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form2-row3 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="thq-body-small">
                {props.adress ?? (
                  <Fragment>
                    <span className="contact-form2-text24">
                      Based in Bayside, Melbourne VIC
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form2-form">
          <div className="contact-form2-input1">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              className="contact-form2-text-input1 thq-input"
            />
          </div>
          <div className="contact-form2-input2">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Phone Number
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              enctype="Phone Number"
              placeholder="Phone Number"
              className="contact-form2-text-input2 thq-input"
            />
          </div>
          <div className="contact-form2-input3">
            <label htmlFor="contact-form-2-email" className="thq-body-small">
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              placeholder="Email"
              className="contact-form2-text-input3 thq-input"
            />
          </div>
          <div className="contact-form2-input4">
            <label htmlFor="contact-form-2-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              className="contact-form2-textarea thq-input"
            ></textarea>
          </div>
          <div className="contact-form2-checkbox"></div>
          <button type="submit" className="thq-button-filled">
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form2-text23">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm.defaultProps = {
  content1: undefined,
  heading1: undefined,
  email: undefined,
  phone: undefined,
  action: undefined,
  adress: undefined,
  content2: undefined,
}

ContactForm.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  email: PropTypes.element,
  phone: PropTypes.element,
  action: PropTypes.element,
  adress: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactForm;
