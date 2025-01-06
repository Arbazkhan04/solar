import React from "react";
import { Link } from "react-router-dom";

const FaqContent = () => {
    return (
        <>
            {/* FAQ Content */}
            <section className="max-w-4xl mx-auto px-4 md:px-0 pb-10 text-gray-800 text-left">
                {/* 1. Benefits of installing solar panels */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What are the benefits of installing solar panels and batteries?
                </h3>
                <p className="mb-4">
                    Solar panels allow you to generate your own renewable electricity,
                    reducing energy bills and reliance on the grid. Batteries store excess
                    energy for use during peak times or outages, maximizing
                    self-consumption and providing backup power.
                </p>

                {/* 2. How long do solar panels last */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    How long do solar panels last?
                </h3>
                <p className="mb-4">
                    The Victorian Government offers programs like the Solar Homes
                    Program, which provides rebates for solar panel installations.
                    Eligible households may also receive battery rebates. The Clean
                    Energy Regulator provides credits in the form of STCs (Small Scale
                    Technology Certificates). These credits are already deducted from the
                    total installation cost in the quoted out-of-pocket system prices
                    that we provide.
                </p>

                {/* 3. How do you offer systems that are so cheap */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    How do you offer systems that are so cheap?
                </h3>
                <p className="mb-4">
                    We pre-select the robust and high-performing equipment to offer you a
                    single solution in varying sizes. This enables us to buy top-quality
                    equipment in larger volumes, reducing the price. We believe in
                    accelerating the scale-up of low-cost, renewable energy for Victorian
                    families, so we pass on the savings to you.
                </p>

                {/* 4. What size solar system do I need */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What size solar system do I need?
                </h3>
                <p className="mb-4">
                    The options we offer reflect the most popular sizes for small, medium
                    and large households. If you want to discuss further, please{" "}
                    <Link to="/contact" className="text-orange-600 underline">
                        contact us
                    </Link>.
                </p>

                {/* 5. Roof isn’t ideal */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    Can I still get solar if my roof isn&apos;t ideal?
                </h3>
                <p className="mb-4">
                    Yes. While north-facing roofs are optimal in Australia, east- and
                    west-facing roofs are also effective and can help increase your early
                    morning and late evening energy production.
                </p>

                {/* 6. Already have a solar system installed */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What if I already have a solar system installed?
                </h3>
                <p className="mb-4">
                    We can connect your existing solar system to a battery. Hybrid inverters, which allow the connection of solar and batteries to a single inverter, mean that your existing inverter might not be required anymore. We’ll work with you to ensure a seamless integration with your existing system. You may also want to add more capacity to your existing solar system —{" "}
                    <Link to="/contact" className="text-orange-600 underline">
                        Contact Us
                    </Link>{" "}
                    to discuss.
                </p>

                {/* 7. What is a hybrid inverter? */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What is a hybrid inverter?
                </h3>
                <p className="mb-4">
                    A hybrid inverter is an advanced type of solar inverter that can manage both solar and batteries in one unit. Unlike traditional inverters that only convert DC (direct current) from solar panels into AC (alternating current) electricity for use in your home, hybrid inverters can also direct excess energy into a battery storage system. This allows you to store solar energy for later use, increasing energy independence and ensuring power availability during outages or at night. Hybrid inverters are commonly used in solar power systems combined with battery storage, optimizing energy use and improving overall system efficiency.
                </p>

                {/* 8. Maintenance for solar panels and batteries */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What maintenance is required for solar panels and batteries?
                </h3>
                <p className="mb-4">
                    Solar panels require minimal maintenance—regular cleaning and occasional inspections to ensure optimal performance. Batteries may need software updates which can typically be delivered over the air.
                </p>

                {/* 9. Feed-in tariff (FiT) */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What is the feed-in tariff (FiT), and how does it work?
                </h3>
                <p className="mb-4">
                    The FiT is the rate paid for excess solar electricity exported to the grid. Rates vary between energy retailers in Victoria, so it’s essential to compare plans to maximize your returns.
                </p>

                {/* 10. Export limits */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What are export limits and will I be subject to them?
                </h3>
                <p className="mb-4">
                    Export limits refer to the maximum amount of solar energy that can be exported from a residential solar system back to the grid. These limits are set by the local distribution network operator (DNSP) to maintain the stability and safety of the electricity grid. The export limits depend on your DNSP (see below) and any constraints in your specific location, but are typically:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Single Phase: 10kW inverter limit, 5kW export limit</li>
                    <li>Three Phase: 30kW inverter limit, 15kW export limit</li>
                </ul>
                <p className="mb-4">
                    The best way to maximize benefit from your solar system is to use the energy you generate instead of exporting it to the grid. This can include running appliances during the day, aligning pool pump operating hours to solar production periods, charging your EV during the day, and installing a home battery to capture excess energy for use when the sun isn’t shining.
                </p>

                {/* 11. DNSP */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What is a Distributed Network Service Provider (DNSP), and who is mine?
                </h3>
                <p className="mb-4">
                    The DNSP’s permission will be needed to connect a solar power system to the electricity grid. The distributors in Victoria are:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>CitiPower – Melbourne CBD</li>
                    <li>Powercor – Western Victoria</li>
                    <li>Jemena – Western inner Melbourne</li>
                    <li>AusNet – Eastern Victoria</li>
                    <li>United Energy – South-east Melbourne and the Mornington Peninsula</li>
                </ul>

                {/* 12. Off-grid */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    Can I go completely off-grid?
                </h3>
                <p className="mb-4">
                    While it’s technically possible to go off-grid with a solar and battery system, it requires significant investment in large battery storage and possibly backup generators. Most users find a grid-connected system with battery storage more practical and cost-effective. Many Victorian homes are disconnecting gas and moving to electric appliances (e.g., induction cooktops and heat pump hot water systems). This is a great way to mitigate additional supply charges associated with maintaining a gas connection, but can increase your electricity consumption, improving the benefit of a high-performing solar and battery system.
                </p>

                {/* 13. Power outage */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What happens during a power outage?
                </h3>
                <p className="mb-4">
                    Without a battery, a standard grid-connected solar system will not supply power during an outage for safety reasons. However, with a battery and appropriate configuration, our system can provide backup power for essential appliances when the grid is down from your solar and battery system.
                </p>

                {/* 14. Max power output from battery */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What is the maximum power output from my battery?
                </h3>
                <p className="mb-4">
                    The maximum power output of a home battery refers to the highest amount of electrical power the battery can deliver at any given moment. It is typically measured in kilowatts (kW) and indicates how much energy the battery can supply to your home or the grid at once. For example, if your battery has a maximum output of 5 kW, it can supply up to 5 kW of power to your home during periods of high demand. It’s important to note that the maximum power output is different from the battery’s total storage capacity. The power output is about the rate at which the battery can supply energy, while the storage capacity refers to the total amount of energy it can store.
                </p>

                {/* 15. Difference between power and storage capacity */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What is the difference between power and storage capacity?
                </h3>
                <p className="mb-4">
                    <strong>Power</strong> (measured in kW) refers to the rate at which energy is used or produced. It is like the flow of water through a pipe—how fast the energy can be delivered. For example, if you are using a high-powered appliance like an air conditioner, your battery needs to supply energy at a higher power output rate to keep up with the demand.
                </p>
                <p className="mb-4">
                    <strong>Storage Capacity</strong> (measured in kilowatt-hours, or kWh) refers to the total amount of energy that the battery can store over time. It is like the total volume of water a tank can hold. For example, a battery with a storage capacity of 10 kWh can supply 10 kW of power for 1 hour, or 1 kW of power for 10 hours.
                </p>

                {/* 16. Benefits of installing an EV charger */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What are the benefits of installing an EV charger at home or business?
                </h3>
                <p className="mb-4">
                    A dedicated EV charger provides faster, safer, and more efficient charging compared to standard power outlets.
                </p>

                {/* 17. Types of EV chargers */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    What types of EV chargers are available?
                </h3>
                <p className="mb-4">
                    <strong>Slow Chargers:</strong> "Granny chargers" use standard outlets, offering a slow charge rate of about 2kW or +10 km/hr, suitable for low mileage use. However, regular powerpoints may not safely handle continuous load, so installing a dedicated EV charger or specific powerpoint is recommended.
                </p>
                <p className="mb-4">
                    <strong>AC Fast Chargers:</strong> AC fast chargers are the most common residential chargers in Australia, providing 7–11kW (+40–70 km/hr) depending on home power capacity. Most vehicles are limited to 7 or 11kW, making a single-phase 7kW charger sufficient for most households.
                </p>
                <p className="mb-4">
                    <strong>DC Fast Chargers:</strong> DC fast chargers are used for rapid recharging, typically found at public locations like highway rest stops, delivering 50–350kW in 20–60 minutes. They require dedicated infrastructure and may necessitate grid upgrades due to high power demands.
                </p>

                {/* 18. How fast can EV charger recharge */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    How fast can an EV charger recharge my car?
                </h3>
                <p className="mb-4">
                    <strong>Standard Powerpoint:</strong> ~30 hours or more for a full charge.
                    <br />
                    <strong>Dedicated charger:</strong> ~4-8 hours for most EVs.
                </p>

                {/* 19. EV as home battery */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    I have an EV - can I use that as a home battery?
                </h3>
                <p className="mb-4">
                    Some EVs include Vehicle to Load (V2L), allowing you to power appliances from your EV while away from home. This does not include powering your house, as the energy and system integration requirements are different. Vehicle to Home (V2H) and Vehicle to Grid (V2G) capability is an emerging technology aimed at enabling EV integration with homes and the grid. It is still in the development phase, and some challenges will need to be resolved, including how to manage EV battery warranty and degradation if the vehicle’s battery is cycled repeatedly while the vehicle is stationary. Changes to household electrical systems may also be required to integrate V2H. Therefore, the most popular solution for EV owners is to install a dedicated home battery.
                </p>

                {/* 20. Charge EV using solar */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    Can I charge my EV using solar panels?
                </h3>
                <p className="mb-4">
                    Yes, EV chargers can be integrated with solar systems to charge your vehicle directly from solar energy, reducing costs and environmental impact. We offer smart chargers that can track your solar output to charge your EV only from the excess solar you produce.
                </p>

                {/* 21. Mobile EV chargers */}
                <h3 className="text-xl font-semibold text-orange-600 mt-6 mb-2">
                    Are mobile EV chargers a good alternative to fixed chargers?
                </h3>
                <p className="mb-4">
                    Yes, mobile chargers can achieve the same result as fixed chargers with the added benefit of being able to take them with you on a road trip. We offer the necessary adaptors to use a mobile charger for high-speed charging at home.
                </p>
            </section></>
    )
}
export default FaqContent;
