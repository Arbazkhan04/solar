import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingPageHeader from "../components/LandingPageHeader&Footer/LandingPageHeader/LandingPageHeader";
import LandingPageFooter from "../components/LandingPageHeader&Footer/LandingPageFooter/LandingPageFooter";
import logo1400w from "../assets/logo 2-1400w.png";
import garage from "../assets/garage.jpeg";
import '../components/HomePageComponents/HeroBanner/HeroBanner.css';


const LearnPage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order"); // Adjust the path to your product/order page
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* NAVBAR */}
      <LandingPageHeader />

      {/* HERO SECTION */}
      <section className="text-center py-10 md:py-16 px-4">
        <div className="mx-auto">
          <img
            src={logo1400w}
            alt="Absolute Energy"
            className="w-[60vw] xl:w-[40vw] object-cover mx-auto mb-6"
          />

          <h2 className="text-2xl md:text-3xl font-semibold">
            LEARN: SUSTAINABLE HOME ENERGY SOLUTIONS
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-4">
            Save money and reduce your carbon footprint with our solar panels,
            battery storage, and EV charger installation services.
          </p>
          <button
            onClick={handleOrderNow}
            className="thq-button-filled hero7-button1 hero7-text5 mt-4 text-white px-6 py-3 rounded font-semibold transition-colors"
          >
            ORDER NOW
          </button>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-6 md:py-10 text-gray-800">
        {/* SOLAR PANELS */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">SOLAR PANELS</h3>
          <p className="mb-4">
            Solar panel installations are the most effective way to reduce electricity bills
            by generating your own power. By converting sunlight into electricity, solar
            systems provide a clean, sustainable, and cost-effective energy source for homes
            and businesses.
          </p>
          <ul className="list-disc list-inside mb-4">
            Several support programs are available to solar installations in Victoria:
            <li> rebates through the Solar Homes Program,</li>
            <li> credits in the form of STCs (Small Scale Technology Certificates)
              that are issued by the Clean Energy Regulator and applied as a credit
              towards the cost of your installation (this credit is included in the
              quoted price we provide you).</li>
          </ul>
          <p className="mb-4">
            When considering solar installation, it’s essential to evaluate your energy
            consumption, roof space, and orientation. Larger households or those with
            more equipment (e.g. pool, electric vehicles) will benefit from larger
            systems. Our online quote and ordering tool includes preconfigured recommended
            system sizes (link to order now page).
          </p>
          <p className="mb-4">
            After you complete your order, we will share the proposed panel layout for
            your roof. North-facing roofs are ideal, but east- or west-facing panels can
            still deliver excellent performance. Our experienced installation teams will
            ensure your system is installed and functioning to your requirement.
          </p>
          <p className="mb-4">
            Solar systems require minimal maintenance, primarily occasional cleaning
            and periodic inspections. Additionally, they provide long-term value with
            warranties often covering 20-25 years of performance. By investing in solar,
            you’re not just reducing costs but also contributing to a sustainable future.
          </p>
        </section>

        {/* HOME & COMMERCIAL BATTERIES */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            HOME & COMMERCIAL BATTERIES
          </h3>
          <p className="mb-4">
            Battery systems complement solar panels by storing excess energy to use later,
            maximising self consumption and further reducing or eliminating your electricity
            bills. Batteries also enhance safety and convenience by providing backup power
            during outages.
          </p>
          <p className="mb-4">
            In Victoria, homeowners may qualify for battery rebates under the Solar Homes
            Program. At Absolute Energy, we reduce costs through direct relationships with
            manufacturers, so a battery system might be more accessible than you thought.
          </p>
          <p className="mb-4">
            We use Lithium Iron Phosphate (LFP) batteries. These batteries are renown for
            their safety, durability and efficiency, with capacities ranging from 5 kWh to
            over 25+ kWh for home systems and custom sizes for commercial systems. We have
            carefully considered battery and inverter selection and design to ensure your
            battery integrates seamlessly with solar and EV chargers including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Ability to connect your existing solar system, or a new system that we install.</li>
            <li>
              Ability to run your home from solar and keep charging the battery when the grid is
              down (you would be surprised how many installers cannot achieve this).
            </li>
            <li>
              Installation of a backup circuit to ensure you can power critical appliances
              when the grid is down.
            </li>
            <li>
              Option for advanced EV chargers that route your excess solar production to
              your car.
            </li>
            <li>
              If you don’t have solar, your battery can still reduce your energy bills and
              provide backup when the grid is down. This means you can charge the battery
              using cheaper electricity rates and use the stored power during peak periods,
              further reducing costs.
            </li>
          </ul>
        </section>

        {/* EV CHARGERS */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">EV CHARGERS</h3>
          <p className="mb-4">
            Electric vehicle (EV) chargers are a convenient and essential addition for EV owners,
            offering faster and more efficient charging than a standard power outlet. Installing
            an EV charger at home or your business provides the flexibility to charge vehicles
            overnight or during off-peak times, helping you save on energy costs.
          </p>
          <p className="mb-4">
            <strong>"Granny Chargers"</strong> use standard outlets and are slow but suitable
            for low mileage use. The charge rate is approximately 2kW or ~10 km/hr. While using
            a regular powerpoint can work for trickle charging, there is a risk that existing
            cables will not be able to safely handle continuous load at the full rated capacity.
            Therefore, it is recommended that EV owners install a dedicated EV charger or at
            minimum, a specific powerpoint.
          </p>
          <p className="mb-4">
            <strong>AC Fast Chargers (recommended):</strong> these are the most common charger
            installed in residential homes in Australia. The maximum charge rate depends on
            your home power is 7 – 11kW or ~40 - 70 km/hr. They can be wall-mounted or a specific
            outlet and tail can be installed and supplied that enables a mobile connector to be
            used at home and taken with the car on road trips. Homes with single phase power can
            achieve 7kW charging power, while homes with 3 phase power can achieve 22kW charging
            power. Regardless of the maximum possible power output from a home, most vehicles are
            limited to 7 or 11kW charge rates, so a single phase 7kW charger is fine for most
            households.
          </p>
        </section>
      </main>

      {/* CTA SECTION */}
      <section
        className="bg-gray-900 text-white py-8 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${garage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to make the switch to saving on your energy bill?
            </h2>
            <button
              onClick={handleOrderNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <LandingPageFooter />

    </div>
  );
};

export default LearnPage;