import React, { useEffect } from "react";

const Skills = () => {
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

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            skills: [
                { name: "PHP", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Java", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
            ],
        },
        {
            title: "Backend Frameworks",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            skills: [
                { name: "Laravel", level: "Advanced" },
                { name: "ExpressJS", level: "Intermediate" },
                { name: "Spring", level: "Intermediate" },
                { name: "Flask", level: "Intermediate" },
            ],
        },
        {
            title: "Frontend",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            skills: [
                { name: "Vue", level: "Advanced" },
                { name: "React", level: "Advanced" },
                { name: "Bootstrap", level: "Advanced" },
                { name: "Tailwind CSS", level: "Advanced" },
                { name: "Element UI", level: "Intermediate" },
                { name: "Ant Design", level: "Intermediate" },
            ],
        },
        {
            title: "AI & Automation",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M13 2.5a1.5 1.5 0 013 0v11a1.5 1.5 0 01-3 0v-11zm-1 .724a3.494 3.494 0 00-2 3.276v2a3.5 3.5 0 100 7v2a3.5 3.5 0 003.5 3.5h1a.5.5 0 000-1h-1a2.5 2.5 0 01-2.5-2.5v-2h.5a.5.5 0 000-1H10v-1h3.5a.5.5 0 000-1H10v-1h3.5a.5.5 0 000-1H10v-2a2.5 2.5 0 012.5-2.5h1a.5.5 0 000-1h-1c-.175 0-.343.03-.5.086z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            skills: [
                { name: "AI-Assisted Development", level: "Advanced" },
                { name: "Workflow Automation", level: "Advanced" },
                { name: "GPT Integration", level: "Advanced" },
                { name: "Productivity Enhancement", level: "Advanced" },
                { name: "AI-Powered Code Refactoring", level: "Intermediate" },
                { name: "Automated Testing", level: "Intermediate" },
            ],
        },
        {
            title: "ML Architectures",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
            ),
            skills: [
                { name: "CNN", level: "Intermediate" },
                { name: "YOLO", level: "Intermediate" },
                { name: "BERT", level: "Intermediate" },
                { name: "LSTM", level: "Intermediate" },
                { name: "RAFT", level: "Intermediate" },
                { name: "Transformers", level: "Intermediate" },
            ],
        },
        {
            title: "Databases",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
            ),
            skills: [
                { name: "MySQL", level: "Advanced" },
                { name: "MongoDB", level: "Intermediate" },
                { name: "PostgreSQL", level: "Intermediate" },
            ],
        },
        {
            title: "Tools & DevOps",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4a1 1 0 01-1.414 1.414L13 4.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707L11 2.414A1 1 0 0112 2zm.707 10.293a1 1 0 00-1.414 1.414l.707.707-.707.707a1 1 0 101.414 1.414l.707-.707.707.707a1 1 0 001.414-1.414l-.707-.707.707-.707a1 1 0 00-1.414-1.414l-.707.707-.707-.707z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            skills: [
                { name: "Git", level: "Advanced" },
                { name: "GitHub", level: "Advanced" },
                { name: "Bitbucket", level: "Advanced" },
                { name: "Postman", level: "Advanced" },
                { name: "Docker", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Figma", level: "Intermediate" },
            ],
        },
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case "Beginner":
                return "bg-blue-100 text-blue-800";
            case "Intermediate":
                return "bg-indigo-100 text-indigo-800";
            case "Advanced":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <section
            id="skills"
            className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 reveal fade-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        My{" "}
                        <span className="gradient-text">Technical Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and
                        competencies across various domains, including
                        leveraging AI tools to enhance productivity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all reveal fade-bottom glass"
                            style={{
                                transitionDelay: `${categoryIndex * 0.1}s`,
                            }}
                        >
                            <div className="flex items-center mb-6">
                                <span className="text-indigo-500 text-3xl mr-3">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 fancy-underline">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className={`px-3 py-2 rounded-md ${getLevelColor(
                                            skill.level
                                        )} transition-all hover:scale-105 flex items-center space-x-1 skill-badge`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <span className="font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs px-1.5 py-0.5 bg-white rounded-full">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center reveal fade-bottom">
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        I'm passionate about continuous learning and staying
                        updated with emerging technologies, particularly in
                        machine learning, AI tools, and cloud infrastructure. I
                        leverage AI-powered solutions to enhance development
                        workflows and increase productivity.
                    </p>
                    <a
                        href="#projects"
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
                    >
                        View My Projects
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

export default Skills;
