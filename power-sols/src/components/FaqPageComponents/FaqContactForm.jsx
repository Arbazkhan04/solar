import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './FaqContactForm.css'
import { useState } from 'react'
import axios from 'axios'

const FaqContactForm = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // 2. Handler to update state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // 3. Basic form validation
  const validate = () => {
    let tempErrors = {}

    // Name Validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required'
    }

    // Phone Validation (example - at least 8 characters)
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (formData.phone.trim().length < 10) {
      tempErrors.phone = 'Phone number must be at least 10 characters'
    }

    // Email Validation
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else {
      // Basic email pattern check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(formData.email.trim())) {
        tempErrors.email = 'Please enter a valid email address'
      }
    }

    // Message Validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  // 4. Handler to process form on submit
  const handleSubmit =  async (e) => {
    console.log('Form submitted')
    console.log('Form data:', formData)
    e.preventDefault()
    if (!validate()) {
      alert('Form validation failed')
      return;
    }

    // Process the form data (e.g. send to server, etc.)
    try {
       const res = await axios.post('http://localhost:8081/api/contact/contact', formData)
        console.log('Response:', res)
        alert('Form submitted successfully')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form')
    }
  }

  
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
