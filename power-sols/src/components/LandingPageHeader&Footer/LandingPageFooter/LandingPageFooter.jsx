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
      <Link to="/">
        <img
          alt={props.imageAlt3}
          src={logo1400w}
          className="footer4-image"
        />
      </Link>
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
              <Fragment>
                <span className="footer4-text21">FAQ</span>
              </Fragment>
            </Link>

            <Link to="/contact" className="thq-body-small">
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text19">CONTACT US</span>
                </Fragment>
              )}
            </Link>

            <Link to="/order" className="footer4-navlink4 thq-body-small">
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text17">ORDER NOW</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits font-montserrat">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small font-noto">© 2024 ABSOLUTE ENERGY</span>
            </div>
            <div className="footer4-footer-links ">
              <span className="footer4-text11 thq-body-small ">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text14 font-noto">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small ">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18 font-noto">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text15 font-noto">Cookies Policy</span>
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
