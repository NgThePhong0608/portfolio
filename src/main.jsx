import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Script to handle the typing animation in the hero section
document.addEventListener("DOMContentLoaded", () => {
    const typedElement = document.querySelector(".typed");
    const stringsElement = document.querySelector("#typed-strings");

    if (typedElement && stringsElement) {
        const strings = stringsElement.getAttribute("data-strings").split(",");
        let currentStringIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
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
                // Pause at the end of a string
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                // Move to the next string
                currentStringIndex = (currentStringIndex + 1) % strings.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        // Start the typing animation
        setTimeout(type, 1000);
    }

    // Script to handle reveal animations on scroll
    const reveals = document.querySelectorAll(".reveal");
    function revealElements() {
        reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    // Initial check
    revealElements();
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
