import React, { useEffect } from "react";

const Certificates = () => {
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

    const certificates = [
        {
            id: 1,
            name: "TOEIC",
            score: "825",
            level: "Advanced",
            date: "2023",
            description: "Test of English for International Communication",
            organization: "ETS (Educational Testing Service)",
            skills: [
                "Listening Comprehension",
                "Reading Comprehension",
                "Business English",
                "Professional Communication",
            ],
        },
        {
            id: 2,
            name: "APTIS",
            score: "B2",
            level: "Upper Intermediate",
            date: "2024",
            description: "British Council English Language Assessment",
            organization: "British Council",
            skills: [
                "Speaking",
                "Writing",
                "Reading",
                "Listening",
                "Grammar & Vocabulary",
            ],
        },
    ];

    return (
        <section
            id="certificates"
            className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
        >
            <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 reveal fade-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Professional certifications demonstrating my English
                        language proficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all reveal fade-bottom glass"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                            {cert.name}
                                        </h3>
                                        <p className="text-indigo-600 font-medium">
                                            {cert.organization}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-indigo-600">
                                            {cert.score}
                                        </span>
                                        <p className="text-sm text-gray-500">
                                            {cert.level}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {cert.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                        Skills Assessed:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-sm text-gray-500">
                                    Obtained: {cert.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
