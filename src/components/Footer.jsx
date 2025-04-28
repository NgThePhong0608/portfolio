import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 mobile-no-overflow">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-8 md:mb-0 w-full md:w-auto text-left">
                        <a href="#" className="text-2xl font-bold text-white">
                            Portfolio
                        </a>
                        <p className="mt-2 text-gray-400 max-w-md">
                            A passionate web developer focused on creating
                            beautiful and functional websites and applications.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full md:w-auto gap-8 justify-start">
                        <div className="w-full sm:w-auto">
                            <h3 className="text-lg font-semibold mb-3 text-left">
                                Quick Links
                            </h3>
                            <ul className="space-y-2 text-left">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#experience"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto mt-6 sm:mt-0">
                            <h3 className="text-lg font-semibold mb-3 text-left">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4 justify-start">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 transition-all p-2 pl-0"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 transition-all p-2"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 transition-all p-2"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 transition-all p-2"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm7.1-3.7a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-left">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
