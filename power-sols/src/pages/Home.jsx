import React from "react";
import { useNavigate } from "react-router-dom";
import LandingPageHeader from "../components/LandingPageHeader&Footer/LandingPageHeader/LandingPageHeader";
import HeroBanner from "../components/HomePageComponents/HeroBanner/HeroBanner";
import WhatWeDo from "../components/HomePageComponents/WhatWeDo/WhatWeDo";
import HowWeDoIt from "../components/HomePageComponents/HowWeDoIt/HowWeDoIt";
import IntersectingCard from "../components/HomePageComponents/IntersectingCard/IntersectingCard";
import Testimonial from "../components/HomePageComponents/Testimonial/Testimonial";
import LandingPageFooter from "../components/LandingPageHeader&Footer/LandingPageFooter/LandingPageFooter";


const HOME = () => {

  return (
    <div className="flex flex-col min-h-screen w-full bg-white overflow-x-clip">
      {/* Use the LandingPageHeader component */}
      <LandingPageHeader />

      {/* HERO SECTION */}
      <HeroBanner />

      {/* WHAT WE DO */}
      <WhatWeDo />

      {/* HOW WE DO IT */}
      <HowWeDoIt />

      {/* INTERSECTING CARD */}
      <IntersectingCard />

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* FOOTER */}
      <LandingPageFooter />

    </div>
  );
};

export default HOME;
