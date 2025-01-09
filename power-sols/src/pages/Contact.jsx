import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingPageHeader from "../components/LandingPageHeader&Footer/LandingPageHeader/LandingPageHeader";
import LandingPageFooter from "../components/LandingPageHeader&Footer/LandingPageFooter/LandingPageFooter";
import HeroBanner from "../components/ContactPageComponents/HeroBanner/HeroBanner";
import FirstFeature from "../components/ContactPageComponents/FirstFeature/FirstFeature";
import ContactForm from "../components/ContactPageComponents/ContactForm/ContactForm";
import ContactTestimonial from "../components/ContactPageComponents/ContactTestimonial/ContactTestimonial";
import ContentBelowBanner from "../components/ContactPageComponents/ContentBelowBanner/ContentBelowBanner";

const ContactPage = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* NAVBAR */}
      <LandingPageHeader />

      {/* HERO SECTION */}
      <HeroBanner />

      {/* CONTENT BELOW BANNER */}
      {/* <ContentBelowBanner /> */}

      {/* first feature */}
      <FirstFeature />

      {/* CONTACT FORM SECTION */}
      <ContactForm />

      {/* FOOTER */}
      <LandingPageFooter />

      {/* TESTIMONIAL SECTION */}
      <ContactTestimonial />
      
    </div>
  );
};

export default ContactPage;
