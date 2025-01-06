import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './LandingPageFooter.css';
import logo1400w from "../../../assets/logo 2-1400w.png";


const LandingPageFooter = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt3}
        src={logo1400w}
        className="footer4-image"
      />
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <Link to="/" className="footer4-navlink1 thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">HOME</span>
                </Fragment>
              )}
            </Link>
            <Link to="/learn" className="footer4-navlink2 thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text20">LEARN</span>
                </Fragment>
              )}
            </Link>
            <Link to="/faq" className="footer4-navlink3 thq-body-small">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text21">FAQ</span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text17">ORDER NOW</span>
                </Fragment>
              )}
            </a>
            <Link to="/contact" className="thq-body-small">
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text19">Contact Us</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 ABSOLUTE ENERGY</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text14">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text15">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

LandingPageFooter.defaultProps = {
  imageSrc3: '/logo%202-200h.png',
  privacyLink: undefined,
  imageAlt3: 'image',
  rootClassName: '',
  cookiesLink: undefined,
  link1: undefined,
  link4: undefined,
  termsLink: undefined,
  link5: undefined,
  link2: undefined,
  link3: undefined,
}

LandingPageFooter.propTypes = {
  imageSrc3: PropTypes.string,
  privacyLink: PropTypes.element,
  imageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
  cookiesLink: PropTypes.element,
  link1: PropTypes.element,
  link4: PropTypes.element,
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
}

export default LandingPageFooter;
