import React, { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
        // Activate reveal animations
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
        revealElements(); // Initial check

        return () => window.removeEventListener("scroll", revealElements);
    }, []);

    const experiences = [
        {
            company: "Tech Innovations Inc.",
            title: "Senior Full Stack Developer",
            period: "Jan 2022 - Present",
            description:
                "Leading development of enterprise-level applications using Laravel and Vue.js. Implemented CI/CD pipelines that reduced deployment time by 40%. Mentored junior developers and conducted code reviews to maintain high code quality standards.",
            technologies: ["Laravel", "Vue.js", "AWS", "Docker", "MySQL"],
            achievements: [
                "Redesigned the authentication system using Laravel Sanctum, improving security and reducing login issues by 90%",
                "Implemented real-time notifications using Laravel WebSockets, increasing user engagement by 35%",
                "Optimized database queries that improved application performance by 60%",
            ],
        },
        {
            company: "WebSolutions Co.",
            title: "Backend Developer",
            period: "Mar 2020 - Dec 2021",
            description:
                "Developed and maintained RESTful APIs using Laravel for multiple client applications. Worked closely with frontend developers to ensure seamless integration. Implemented comprehensive testing strategies that improved code reliability.",
            technologies: ["PHP", "Laravel", "MySQL", "Redis", "Git"],
            achievements: [
                "Developed a customized CMS that reduced content update time by 75%",
                "Implemented Redis caching that improved API response times by 65%",
                "Created an automated testing suite that caught 40% more bugs before production",
            ],
        },
        {
            company: "Digital Creations",
            title: "Web Developer",
            period: "Jun 2018 - Feb 2020",
            description:
                "Developed responsive websites and e-commerce solutions for clients across various industries. Collaborated with designers to implement pixel-perfect UIs. Maintained and updated existing client websites.",
            technologies: ["PHP", "JavaScript", "Bootstrap", "jQuery", "MySQL"],
            achievements: [
                "Migrated 15+ legacy websites to modern tech stacks, improving maintenance efficiency by 50%",
                "Optimized e-commerce checkout process that increased conversion rates by 25%",
                "Implemented responsive designs that improved mobile traffic by 40%",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-16 md:py-24 bg-white relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 reveal fade-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Professional{" "}
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        My journey through the tech industry, showcasing roles
                        where I've delivered impactful solutions and grown as a
                        developer.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 z-0"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative z-10 mb-12 reveal ${
                                index % 2 === 0 ? "fade-right" : "fade-left"
                            }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                {/* Left side content (for even indexes) */}
                                {index % 2 === 0 ? (
                                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all glass">
                                            <div className="flex flex-col md:items-end">
                                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                                                    {exp.period}
                                                </span>
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                                    {exp.title}
                                                </h3>
                                                <h4 className="text-lg font-medium text-indigo-600 mb-3">
                                                    {exp.company}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                {exp.description}
                                            </p>
                                            <div className="mb-4">
                                                <h5 className="font-medium text-gray-700 mb-2">
                                                    Key Achievements:
                                                </h5>
                                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                    {exp.achievements.map(
                                                        (achievement, i) => (
                                                            <li key={i}>
                                                                {achievement}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-2 md:justify-end">
                                                {exp.technologies.map(
                                                    (tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:block w-1/2"></div>
                                )}

                                {/* Timeline node */}
                                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                {/* Right side content (for odd indexes) */}
                                {index % 2 !== 0 ? (
                                    <div className="w-full md:w-1/2 md:pl-12">
                                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all glass">
                                            <div className="flex flex-col">
                                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2 w-fit">
                                                    {exp.period}
                                                </span>
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                                    {exp.title}
                                                </h3>
                                                <h4 className="text-lg font-medium text-indigo-600 mb-3">
                                                    {exp.company}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                {exp.description}
                                            </p>
                                            <div className="mb-4">
                                                <h5 className="font-medium text-gray-700 mb-2">
                                                    Key Achievements:
                                                </h5>
                                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                    {exp.achievements.map(
                                                        (achievement, i) => (
                                                            <li key={i}>
                                                                {achievement}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {exp.technologies.map(
                                                    (tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden md:block w-1/2"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center reveal fade-bottom">
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        I bring a wealth of hands-on experience and a passion
                        for clean, efficient code to every project I undertake.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
                    >
                        Let's Work Together
                        <svg
                            className="w-5 h-5 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
