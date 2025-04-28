import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="py-16 md:py-24 bg-white mobile-no-overflow"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get to know more about me, my background, and what I do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Who am I?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            I'm a passionate web developer with a strong focus
                            on creating intuitive and performant user
                            experiences. With several years of experience in
                            front-end and back-end development, I enjoy bringing
                            ideas to life in the digital world.
                        </p>
                        <p className="text-gray-600 mb-4">
                            My journey began with a degree in Computer Science,
                            and since then, I've worked with various
                            technologies and frameworks to build responsive and
                            accessible web applications.
                        </p>
                        <p className="text-gray-600 mb-8">
                            When I'm not coding, you can find me exploring new
                            technologies, contributing to open source, or
                            enjoying outdoor activities like hiking and
                            photography.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-mobile">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Name:
                                </h4>
                                <p className="text-gray-600">
                                    Nguyen The Phong
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Email:
                                </h4>
                                <p className="text-gray-600 mobile-truncate">
                                    <a
                                        href="mailto:phong.nt06082001@gmail.com"
                                        className="hover:text-indigo-600 transition-colors"
                                    >
                                        phong.nt06082001@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Location:
                                </h4>
                                <p className="text-gray-600">Hanoi, Vietnam</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">
                                    Availability:
                                </h4>
                                <p className="text-gray-600">Full-time</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 sm:flex-nowrap mobile-btn-stack">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all text-center"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all text-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-500 rounded-lg absolute -top-4 -left-4 z-0"></div>
                            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg relative z-10 border-4 border-white shadow-xl">
                                <img
                                    src="https://via.placeholder.com/400x400"
                                    alt="About me"
                                    className="w-full h-full object-cover"
                                    // Replace with your own image
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
