import React, { useEffect } from "react";

const ProfessionalProjects = () => {
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

    const projects = [
        {
            id: 1,
            title: "CRM Star",
            company: "Kaopiz Software Co., Ltd",
            period: "Sep 2023 - Mar 2024",
            role: "Web Developer",
            teamSize: "6 members",
            description:
                "A comprehensive ERP system with modules for center management like school, kindergarten, etc.",
            responsibilities: [
                "Contributed to the development of the company’s educational management product, utilizing technologies like Laravel, Vue.js, MySQL, and others.",
                "Implemented features like user authentication, database management, and MVC architecture.",
                "Successfully completed assigned tasks within deadlines, demonstrating a strong work ethic and commitment to learning.",
            ],
            techStack: {
                frontend: ["Blade", "Vue.js", "Bootstrap", "jQuery"],
                backend: ["Laravel"],
                database: ["MySQL"],
                devops: ["AWS", "Docker", "Kubernetes", "Jenkins"],
                tools: ["Git", "Jira", "Bitbucket", "Figma"],
            },
        },
        {
            id: 2,
            title: "E-learning Platform",
            company: "Amela Technology JSC",
            period: "Apr 2024 - Present",
            role: "Web Developer",
            teamSize: "5 members",
            description:
                "A platform for online learning, offering a range of courses and resources for students.",
            responsibilities: [
                "Participated in the full lifecycle development of an online learning system from its initial stages.",
                "Implemented user-facing features including verification, face authentication, notification management, and lesson access.",
                "Developed backend functionalities for course management, user authentication, and payment processing.",
                "Contributed to the design and implementation of RESTful APIs for seamless integration with frontend components.",
            ],
            techStack: {
                frontend: ["Blade", "Bootstrap", "jQuery"],
                backend: ["Laravel"],
                database: ["MySQL"],
                devops: ["AWS", "Gitlab CI/CD"],
                tools: ["Git", "Backlog", "Gitlab", "Figma"],
            },
        },
        {
            id: 3,
            title: "Website Booking Online Course",
            company: "Amela Technology JSC",
            period: "Apr 2024 - Present",
            role: "Web Developer",
            teamSize: "7 members",
            description:
                "A platform for booking online courses, offering a range of courses and resources for students.",
            responsibilities: [
                "Maintained and developed features for the online course booking website based on client feedback",
                "Implemented functionality for exporting invoices and receipts in PDF format.",
                "Modified and improved complex user interfaces dealing with large datasets for better usability.",
                "Conducted maintenance and optimization of the system through both code refactoring and database query tuning.",
                "Performed the release of new features and updates to the production environment for client.",
            ],
            techStack: {
                frontend: ["Blade", "Bootstrap", "jQuery"],
                backend: ["Laravel"],
                database: ["PostgreSQL"],
                devops: ["AWS", "Gitlab CI/CD"],
                tools: ["Git", "Backlog", "Gitlab"],
            },
        },
        {
            id: 4,
            title: "Law Consultant Website",
            company: "Amela Technology JSC",
            period: "Oct 2024 - Dec 2024",
            role: "Web Developer",
            teamSize: "12 members",
            description:
                "A platform for consulting law integrated with chatbot AI for answering questions, offering a range of services for clients.",
            responsibilities: [
                "Developed APIs to facilitate data transfer to an AI model for learning purposes.",
                "Enabled the AI chatbot to provide responses based on data curated and provided by the website administrators.",
                "Implemented the functionality for users to chat with the AI.",
                "Focused on building robust and efficient API endpoints for seamless AI integration.",
                "Contributed to the development of an interactive AI-powered consultation feature for the website.",
            ],
            techStack: {
                frontend: ["Vue.js", "Bootstrap", "jQuery"],
                backend: ["Laravel", "Flask"],
                database: ["MySQL", "Neo4j"],
                devops: ["AWS", "Gitlab CI/CD"],
                tools: ["Git", "Backlog", "Gitlab", "Figma"],
            },
        },
    ];

    return (
        <section
            id="professional-projects"
            className="py-16 md:py-24 bg-white relative overflow-hidden"
        >
            <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 reveal fade-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Professional{" "}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A showcase of significant projects I've contributed to
                        during my professional career.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all reveal fade-bottom glass"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-indigo-600 font-medium">
                                            {project.company}
                                        </p>
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {project.period}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                        <span className="font-medium">
                                            Role:
                                        </span>
                                        <span>{project.role}</span>
                                        <span className="font-medium">
                                            Team Size:
                                        </span>
                                        <span>{project.teamSize}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                        Responsibilities:
                                    </h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        {project.responsibilities.map(
                                            (responsibility, idx) => (
                                                <li key={idx}>
                                                    {responsibility}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    {Object.entries(project.techStack).map(
                                        ([category, technologies]) => (
                                            <div key={category}>
                                                <h4 className="text-sm font-semibold text-gray-700 mb-1 capitalize">
                                                    {category}:
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {technologies.map(
                                                        (tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalProjects;
