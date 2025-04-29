import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

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
                typingSpeed = 50; // Faster deletion
            } else {
                typedElement.textContent = currentString.substring(
                    0,
                    currentCharIndex + 1
                );
                currentCharIndex++;
                typingSpeed = 150; // Slower typing
            }

            if (!isDeleting && currentCharIndex === currentString.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of word
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentStringIndex = (currentStringIndex + 1) % strings.length;
                typingSpeed = 500; // Pause before typing next word
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
