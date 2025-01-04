import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LearnPage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/product"); // Adjust the path to your product/order page
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo%202-1400w.png"
              alt="Absolute Energy Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl tracking-wide">ABSOLUTE ENERGY</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              HOME
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-600 transition-colors">
              FAQ
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-orange-600 transition-colors">
              LEARN
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              CONTACT
            </Link>
          </nav>
          {/* Order Now Button */}
          <button
            onClick={handleOrderNow}
            className="hidden md:inline-block bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            ORDER NOW
          </button>
          {/* Mobile Menu Placeholder (if needed) */}
          <div className="md:hidden">
            {/* Implement a hamburger menu if you want mobile nav */}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-10 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <img
            src="/logo%202-1400w.png"
            alt="Absolute Energy"
            className="mx-auto h-16 mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">LEARN</h1>
          {/* Optional subheading */}
          <p className="text-gray-600 italic mb-6">page needs formatting **</p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            LEARN: Sustainable Home Energy Solutions
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Save money and reduce your carbon footprint with our solar panels,
            battery storage, and EV charger installation services.
          </p>
          <button
            onClick={handleOrderNow}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors"
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
          <p className="mb-4">
            Several support programs are available to solar installations in Victoria:
            <br />• rebates through the Solar Homes Program, 
            <br />• credits in the form of STCs (Small Scale Technology Certificates) 
            that are issued by the Clean Energy Regulator and applied as a credit 
            towards the cost of your installation (this credit is included in the 
            quoted price we provide you).
          </p>
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
      <section className="bg-gray-900 text-white py-8 px-4 text-center">
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
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Footer Logo/Name */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img
              src="/logo%202-1400w.png"
              alt="Footer Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg tracking-wide">ABSOLUTE ENERGY</span>
          </div>
          {/* Footer Nav */}
          <nav className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-gray-700">
            <Link to="/" className="hover:underline mb-2 sm:mb-0">
              HOME
            </Link>
            <Link to="/learn" className="hover:underline mb-2 sm:mb-0">
              LEARN
            </Link>
            <Link to="/faq" className="hover:underline mb-2 sm:mb-0">
              FAQ
            </Link>
            <Link to="/product" className="hover:underline mb-2 sm:mb-0">
              ORDER NOW
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="max-w-6xl mx-auto pb-6 px-4 flex flex-col-reverse md:flex-row items-center justify-between text-gray-500 text-sm">
          <span className="mt-2 md:mt-0">© 2024 ABSOLUTE ENERGY</span>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link to="/cookies" className="hover:underline">
              Cookies Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnPage;
