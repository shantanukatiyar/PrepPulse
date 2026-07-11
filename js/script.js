// =============================
// PrepPulse - Landing Page JS
// =============================

// Sticky Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(9, 9, 11, 0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.background = "rgba(9, 9, 11, 0.75)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Animated Progress Bar
const progress = document.querySelector(".progress-fill");

window.addEventListener("load", () => {
    if (!progress) return;

    progress.style.width = "0%";

    setTimeout(() => {
        progress.style.transition = "width 1.5s ease";
        progress.style.width = "82%";
    }, 300);
});

// Dashboard Floating Animation
const dashboard = document.querySelector(".dashboard-card");

if (dashboard) {
    let position = 0;
    let direction = 1;

    setInterval(() => {
        position += 0.25 * direction;

        dashboard.style.transform = `translateY(${position}px)`;

        if (position >= 8) direction = -1;
        if (position <= 0) direction = 1;
    }, 30);
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".feature-card, .about, .cta"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);
});