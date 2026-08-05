import React, { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const revealElements = () => {
            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealElements);
        revealElements();

        // Typing animation
        const typedElement = document.querySelector(".typed");
        const stringsElement = document.querySelector("#typed-strings");
        let typingTimeout;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (typedElement && stringsElement && !reduceMotion) {
            const strings = stringsElement
                .getAttribute("data-strings")
                .split(",");
            let currentStringIndex = 0;
            let currentCharIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;

            const type = () => {
                const currentString = strings[currentStringIndex];

                if (isDeleting) {
                    typedElement.textContent = currentString.substring(
                        0,
                        currentCharIndex - 1
                    );
                    currentCharIndex--;
                    typingSpeed = 50;
                } else {
                    typedElement.textContent = currentString.substring(
                        0,
                        currentCharIndex + 1
                    );
                    currentCharIndex++;
                    typingSpeed = 150;
                }

                if (!isDeleting && currentCharIndex === currentString.length) {
                    isDeleting = true;
                    typingSpeed = 1500;
                } else if (isDeleting && currentCharIndex === 0) {
                    isDeleting = false;
                    currentStringIndex =
                        (currentStringIndex + 1) % strings.length;
                    typingSpeed = 500;
                }

                typingTimeout = setTimeout(type, typingSpeed);
            };

            typingTimeout = setTimeout(type, 1000);
        } else if (typedElement && stringsElement) {
            typedElement.textContent = stringsElement
                .getAttribute("data-strings")
                .split(",")[0];
        }

        return () => {
            window.removeEventListener("scroll", revealElements);
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, []);

    return (
        <section
            id="home"
            className="hero-section relative hero-gradient py-20 md:py-32 overflow-hidden"
        >
            <div className="hero-grid absolute top-0 left-0 w-full h-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="hero-copy mt-10 md:mt-0 md:w-1/2">
                        <p className="hero-eyebrow text-indigo-200 mb-2 reveal fade-bottom">
                            Software developer · Vietnam
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 reveal fade-bottom">
                            Hi, I&apos;m{" "}
                            <span className="name-text">Nguyen The Phong</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-indigo-100 mb-6 reveal fade-bottom">
                            <span className="typed"></span>
                            <span
                                id="typed-strings"
                                className="hidden"
                                data-strings="Web Developer, Creative Developer"
                            ></span>
                        </h2>
                        <p className="hero-description text-indigo-100 mb-8 max-w-lg reveal fade-bottom">
                            I turn complex product ideas into reliable,
                            user-friendly web experiences—with thoughtful
                            interfaces on the frontend and dependable systems
                            behind them.
                        </p>
                        <div className="flex flex-wrap gap-4 reveal fade-bottom">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all glow"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#professional-projects"
                                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-600 transition-all"
                            >
                                View Projects
                            </a>
                        </div>

                        <div className="hero-socials flex mt-8 gap-4 reveal fade-bottom" aria-label="Social links">
                            <a
                                href="https://www.facebook.com/phong.nguyenthe0608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-200 transition-all"
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
                                href="https://www.instagram.com/ngthphong_0608/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-200 transition-all"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm7.1-3.7a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/NgThePhong0608"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-200 transition-all"
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
                                href="https://www.linkedin.com/in/ngthephong0608/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-200 transition-all"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual md:w-1/2 flex justify-center md:justify-end">
                        <div className="hero-portrait w-64 h-[70%] md:w-80 md:h-[70%] rounded-full overflow-hidden border-4 border-indigo-300 shadow-xl">
                            <img
                                src="/assets/image/projects/me.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-20 right-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
                        <div className="absolute bottom-20 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                        <div className="absolute top-40 left-1/3 w-16 h-16 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-12 md:h-16"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>

            {/* Particles */}
            <div className="particles">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1
                                })`,
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
