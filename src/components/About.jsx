import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        reveals.forEach((reveal) => observer.observe(reveal));

        return () => {
            reveals.forEach((reveal) => observer.unobserve(reveal));
        };
    }, []);

    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Who Am I
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get to know me better and discover what drives me in my
                        professional journey.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                        <div className="prose prose-lg mx-auto">
                            <p className="text-gray-700 mb-6">
                                I am a passionate and dedicated professional
                                with a strong foundation in web development and
                                a keen interest in creating innovative
                                solutions. My journey in technology has been
                                driven by a continuous desire to learn and adapt
                                to new challenges.
                            </p>

                            <p className="text-gray-700 mb-6">
                                With a background in both frontend and backend
                                development, I bring a comprehensive approach to
                                problem-solving. I believe in writing clean,
                                maintainable code and following best practices
                                to deliver high-quality solutions.
                            </p>

                            <p className="text-gray-700 mb-6">
                                Beyond coding, I am committed to personal growth
                                and professional development. I actively engage
                                in the tech community, participate in
                                hackathons, and contribute to open-source
                                projects to expand my knowledge and skills.
                            </p>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    My Approach
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-indigo-500 mr-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Focus on user experience and
                                            accessibility
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-500 mr-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Embrace continuous learning and
                                            improvement
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-500 mr-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Collaborate effectively with teams
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-500 mr-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Maintain high standards of code
                                            quality
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Career Path
                                </h3>
                                <div className="bg-indigo-50 rounded-lg p-6">
                                    <p className="text-gray-700 mb-4">
                                        I am currently focused on learning from
                                        experienced senior developers and
                                        expanding my technical expertise. My
                                        goal is to:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Gain deeper understanding of
                                                software architecture and design
                                                patterns
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Develop strong mentorship and
                                                leadership skills
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Master advanced technical
                                                concepts and best practices
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-500 mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Progress to middle and senior
                                                developer roles in the coming
                                                years
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <a
                                    href="/cv.pdf"
                                    download="Nguyen_The_Phong_CV.pdf"
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                    Download My CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
