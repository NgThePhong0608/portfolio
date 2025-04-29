import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalProjects from "./components/ProfessionalProjects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Toaster position="top-center" />
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <ProfessionalProjects />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
