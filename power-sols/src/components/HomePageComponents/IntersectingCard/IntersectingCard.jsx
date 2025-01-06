import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './IntersectingCard.css'

const IntersectingCard = (props) => {
  return (
    <div className="thq-section-padding cta26-container1">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="cta26-text1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text6">
                        Ready to Simplify Your Home Energy Needs?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="cta26-text2 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Explore our range of products and services to start
                        saving energy and money today.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="cta26-button thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text4">ORDER NOW</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

IntersectingCard.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
}

IntersectingCard.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default IntersectingCard;
