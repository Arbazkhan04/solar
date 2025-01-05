import React from "react";
import logo200h from "../assets/logo 2-200h.png";

const LandingPageFooter = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-300">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img src={logo200h} alt="Absolute Energy Logo" className="h-10" />
                </div>

                {/* Navigation Links */}
                <nav className="flex justify-center space-x-6 text-sm text-gray-600 mb-4">
                    <a href="/" className="hover:text-orange-600 transition-colors">
                        HOME
                    </a>
                    <a href="/learn" className="hover:text-orange-600 transition-colors">
                        LEARN
                    </a>
                    <a href="/faq" className="hover:text-orange-600 transition-colors">
                        FAQ
                    </a>
                    <a href="/order" className="hover:text-orange-600 transition-colors">
                        ORDER NOW
                    </a>
                    <a href="/contact" className="hover:text-orange-600 transition-colors">
                        Contact Us
                    </a>
                </nav>

                {/* Divider */}
                <hr className="border-gray-300 mb-4" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    {/* Copyright */}
                    <p>© 2024 ABSOLUTE ENERGY</p>

                    {/* Policies */}
                    <nav className="flex space-x-4 mt-2 md:mt-0">
                        <a
                            href="/privacy-policy"
                            className="hover:text-orange-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="hover:text-orange-600 transition-colors"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href="/cookies"
                            className="hover:text-orange-600 transition-colors"
                        >
                            Cookies Policy
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default LandingPageFooter;
