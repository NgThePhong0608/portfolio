import React, { useState, useEffect, useCallback } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        setIsMounted(true);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Handle escape key for accessibility
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
                document.body.style.overflow = "auto";
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        // Prevent body scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <header
            role="banner"
            className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
                scrollPosition > 10 ? "py-2" : "py-4"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a
                            href="#home"
                            className={`text-xl font-bold text-indigo-600 transform transition-all duration-300 ${
                                isMounted
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                            }`}
                        >
                            Portfolio
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            Skills
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            Experience
                        </a>
                        <a
                            href="#professional-projects"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className={`text-gray-500 hover:text-gray-600 transition-all duration-300 ${
                                isMounted
                                    ? "scale-100 opacity-100"
                                    : "scale-50 opacity-0"
                            }`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                                        isMenuOpen
                                            ? "rotate-45 top-3"
                                            : "rotate-0 top-1"
                                    }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                                        isMenuOpen
                                            ? "opacity-0 top-3"
                                            : "opacity-100 top-3"
                                    }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                                        isMenuOpen
                                            ? "-rotate-45 top-3"
                                            : "rotate-0 top-5"
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation with Animation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? "max-h-96 opacity-100 border-t border-gray-200 mt-4 pt-4"
                            : "max-h-0 opacity-0 border-none mt-0 pt-0"
                    }`}
                >
                    <nav className="flex flex-col space-y-0">
                        {[
                            "Home",
                            "About",
                            "Skills",
                            "Experience",
                            "Projects",
                            "Contact",
                        ].map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`text-gray-700 hover:text-indigo-600 font-medium py-3 transform transition-all duration-300 delay-${
                                    index * 100
                                } border-b border-gray-100 ${
                                    isMenuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-4 opacity-0"
                                }`}
                                onClick={handleLinkClick}
                                style={{
                                    transitionDelay: isMenuOpen
                                        ? `${index * 50}ms`
                                        : "0ms",
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);
