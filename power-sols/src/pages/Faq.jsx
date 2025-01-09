import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FaqContactForm from "../components/FaqPageComponents/FaqContactForm";
import FaqContent from "../components/FaqPageComponents/FaqContent";
import LandingPageHeader from "../components/LandingPageHeader&Footer/LandingPageHeader/LandingPageHeader";
import LandingPageFooter from "../components/LandingPageHeader&Footer/LandingPageFooter/LandingPageFooter";
import logo1400w from "../assets/logo 2-1400w.png";
import ContactForm from "../components/ContactPageComponents/ContactForm/ContactForm";

const FAQPage = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/order");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <LandingPageHeader />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow bg-white">

        {/* Page Heading */}
        <section className="text-center py-10 md:py-16 px-4">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src={logo1400w}
              alt="Logo"
              className="w-auto xs:h-30 sm:h-40 object-cover rounded-lg" // Adjusted styles
            />
          </div>
          <div className="max-w-2xl mx-auto mt-10">
            <h1 className="text-xl md:text-2xl font-bold font-montserrat">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <button
              onClick={handleOrderNowClick}
              className="thq-button-filled hero7-button1 hero7-text5 text-white px-6 py-3 rounded font-semibold transition-colors my-8"
            >
              ORDER NOW
            </button>
          </div>
        </section>


        {/* FAQ Content */}
        <FaqContent />

        {/* Contact / Inquiry Form */}
        <ContactForm />

      </main>

      {/* FOOTER */}
      <LandingPageFooter />
    </div>
  );
};

export default FAQPage;