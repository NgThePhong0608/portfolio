import React, { useState, useEffect } from "react";

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [isMobile, setIsMobile] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", revealElements);
        window.addEventListener("resize", checkMobile);

        revealElements(); // Initial check
        checkMobile(); // Initial check

        // Handle body scroll lock when modal is open
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("scroll", revealElements);
            window.removeEventListener("resize", checkMobile);
            document.body.style.overflow = "auto"; // Ensure scroll is enabled when component unmounts
        };
    }, [modalOpen]);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300); // Clear selected project after animation
    };

    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            category: "web",
            image: "/assets/image/projects/ecommerce-1.jpg",
            description:
                "A fully responsive e-commerce platform with product catalog, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/ecommerce-1.jpg",
                    caption: "Home page with featured products",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/ecommerce-2.jpg",
                    caption: "Product listing page with filters",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/ecommerce-3.jpg",
                    caption: "Shopping cart with payment options",
                },
            ],
        },
        {
            id: 2,
            title: "Task Management App",
            category: "app",
            image: "/assets/image/projects/task-1.jpg",
            description:
                "A productivity app for managing tasks, setting deadlines, and tracking progress.",
            technologies: ["React", "Redux", "Firebase"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/task-1.jpg",
                    caption: "Dashboard with task overview",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/task-2.jpg",
                    caption: "Task creation interface",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/task-3.jpg",
                    caption: "Task management workflow",
                },
            ],
        },
        {
            id: 3,
            title: "Movie Database",
            category: "web",
            image: "/assets/image/projects/movie-1.jpg",
            description:
                "A web application that fetches and displays movie information from a public API.",
            technologies: ["React", "API Integration", "Tailwind CSS"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/movie-1.jpg",
                    caption: "Movie search interface",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/movie-2.jpg",
                    caption: "Movie details page with cast information",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/movie-3.jpg",
                    caption: "User watchlist feature",
                },
            ],
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "design",
            image: "/assets/image/projects/portfolio-1.jpg",
            description:
                "A modern and responsive portfolio website showcasing projects and skills.",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/portfolio-1.jpg",
                    caption: "Home page with animation effects",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/portfolio-2.jpg",
                    caption: "Project showcase page",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/portfolio-3.jpg",
                    caption: "Contact and about sections",
                },
            ],
        },
        {
            id: 5,
            title: "Weather Dashboard",
            category: "app",
            image: "/assets/image/projects/weather-1.jpg",
            description:
                "A dashboard that displays current weather and forecasts for multiple locations.",
            technologies: ["JavaScript", "Weather API", "Chart.js"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/weather-1.jpg",
                    caption: "Weather dashboard main view",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/weather-2.jpg",
                    caption: "Weekly forecast with data visualization",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/weather-3.jpg",
                    caption: "Location selection interface",
                },
            ],
        },
        {
            id: 6,
            title: "Restaurant Website",
            category: "design",
            image: "/assets/image/projects/restaurant-1.jpg",
            description:
                "A responsive website for a restaurant with menu, reservation, and contact sections.",
            technologies: ["HTML", "CSS", "JavaScript"],
            codeLink: "#",
            demoMedia: [
                {
                    type: "image",
                    url: "/assets/image/projects/restaurant-1.jpg",
                    caption: "Restaurant home page with hero section",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/restaurant-2.jpg",
                    caption: "Menu page with food categories",
                },
                {
                    type: "image",
                    url: "/assets/image/projects/restaurant-3.jpg",
                    caption: "Reservation system interface",
                },
            ],
        },
    ];

    const filters = [
        { value: "all", label: "All" },
        { value: "web", label: "Web Development" },
        { value: "app", label: "App Development" },
        { value: "design", label: "UI/UX Design" },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section
            id="projects"
            className="py-16 md:py-24 bg-white relative overflow-hidden mobile-no-overflow"
        >
            {/* Background elements */}
            <div className="absolute top-40 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 reveal fade-bottom">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        My <span className="gradient-text">Personal Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Check out some of my recent projects. Each project is a
                        unique piece of development.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 reveal fade-bottom">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-3 py-2 sm:px-5 sm:py-2.5 rounded-md font-medium text-sm sm:text-base transition-all ${
                                activeFilter === filter.value
                                    ? "bg-indigo-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {isMobile && filter.value !== "all"
                                ? filter.label.split(" ")[0]
                                : filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all project-card glass reveal fade-bottom"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="h-48 sm:h-56 overflow-hidden mobile-img-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 fancy-underline inline-block">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-md text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="px-3 sm:px-4 py-2 bg-indigo-600 text-white font-medium rounded-md text-xs sm:text-sm flex-1 text-center hover:bg-indigo-700 transition-all"
                                    >
                                        View Demo
                                    </button>
                                    <a
                                        href={project.codeLink}
                                        className="px-3 sm:px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md text-xs sm:text-sm flex-1 text-center hover:bg-indigo-50 transition-all"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 reveal fade-bottom">
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all"
                    >
                        Get In Touch
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

            {/* Project Demo Modal */}
            {modalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn pointer-events-none">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-scaleIn shadow-2xl border border-gray-200 pointer-events-auto relative">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-bold text-gray-800">
                                {selectedProject.title} Demo
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-grow">
                            <div className="p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {selectedProject.demoMedia.map(
                                        (media, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col"
                                            >
                                                {media.type === "image" ? (
                                                    <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-40">
                                                        <img
                                                            src={media.url}
                                                            alt={media.caption}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ) : media.type === "video" ? (
                                                    <div className="rounded-lg overflow-hidden shadow-md aspect-video">
                                                        <iframe
                                                            src={media.url}
                                                            title={
                                                                media.caption
                                                            }
                                                            className="w-full h-full"
                                                            allowFullScreen
                                                            loading="lazy"
                                                        ></iframe>
                                                    </div>
                                                ) : null}
                                                <p className="mt-2 text-gray-600 text-sm text-center">
                                                    {media.caption}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t">
                            <button
                                onClick={closeModal}
                                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
