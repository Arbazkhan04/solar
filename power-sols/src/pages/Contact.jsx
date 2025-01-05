import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingPageHeader from "./LandingPageHeader";
import LandingPageFooter from "./LandingPageFooter";

const ContactPage = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/product");
  };

  const handleLearnMoreClick = () => {
    navigate("/learn");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* NAVBAR */}
      <LandingPageHeader />

      {/* HERO SECTION */}
      <section className="text-center py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Power Your Home with Clean Energy
          </h1>
          <p className="text-gray-600 mb-6">
            Discover sustainable energy solutions for your home and start saving
            on your energy bills.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleOrderNowClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              ORDER NOW
            </button>
            <button
              onClick={handleLearnMoreClick}
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-16 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              At Absolute Energy, we’re passionate about providing homes and
              businesses in Victoria with the opportunity to generate and store
              their own renewable energy and ensure stable backup power when the
              grid is down.
            </h2>
            <p className="mb-4">
              Whether you’re considering solar panels, battery storage, or EV
              chargers, our expert team is here to guide you every step of the
              way. Our simple online product selection and installation tool
              makes it quick and easy to land a solar, battery and EV charging
              solution. We also provide the option of customized installations
              and equipment for residential and commercial properties.
            </p>
            <button
              onClick={handleOrderNowClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors mb-6"
            >
              ORDER NOW
            </button>
            <p className="mb-4">
              Or, if you have specialist requirements contact us to discuss your
              project and receive a personalized quote. You can reach us via
              phone, email, or by filling out the contact form below. We look
              forward to hearing from you!
            </p>
          </div>
          {/* Right Column (Image) */}
          <div>
            <img
              src="/solar-panel-image.jpg"
              alt="Solar Panels"
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 pb-16 text-gray-800">
        <hr className="border-gray-300 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Fill out the form below and we’ll get back to you shortly.</h3>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-6">Have a question or need more information?</p>
            <ul className="space-y-2 mb-8">
              <li>
                <span className="font-semibold">Email address</span>
              </li>
              <li>
                <span className="font-semibold">Phone number</span>
              </li>
              <li>
                <span className="font-semibold">Based in Bayside, Melbourne VIC</span>
              </li>
            </ul>
          </div>
          {/* Right Column: Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-1 font-medium"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
              ></textarea>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-10 px-4 md:py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
          <p className="text-gray-700 mb-6">
            I had solar panels installed by this company and I couldn&apos;t be
            happier with the results. My energy bills have significantly
            decreased and I feel good knowing I&apos;m reducing my carbon
            footprint.
          </p>
          {/* Author */}
          <div className="flex flex-col items-center space-y-1">
            <img
              src="/avatar-sarah.jpg"
              alt="Sarah Johnson"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="font-semibold">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Homeowner</div>
            {/* If you want a brand icon like TeleportHQ's logo, place it here */}
            <img
              src="/teleporthq-logo.png"
              alt="teleport hq"
              className="h-6 w-auto mt-2"
            />
          </div>
        </div>
      </section>


        {/* FOOTER */}
        <LandingPageFooter />
    </div>
  );
};

export default ContactPage;
