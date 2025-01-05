import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo200h from "../assets/logo 2-200h.png";

const LandingPageHeader = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate("/product");
    };

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-12 px-4 md:px-0">
                {/* Left Section: Logo and Nav Links */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={logo200h} alt="Absolute Energy Logo" className="h-14 w-auto" />
                    </div>
                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center space-x-8">
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
                </div>
                {/* Right Section: Order Now button */}
                <button
                    onClick={handleOrderNowClick}
                    className="relative group overflow-hidden bg-orange-500 text-white font-semibold px-6 py-1 rounded-full border-2 border-orange-500 transition-all duration-300"
                >
                    {/* Sliding Background */}
                    <span className="absolute inset-[-1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

                    {/* Button Text */}
                    <span className="relative">ORDER NOW</span>
                </button>
            </div>
        </header>
    );
};

export default LandingPageHeader;
