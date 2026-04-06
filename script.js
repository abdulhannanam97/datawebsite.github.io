// ==========================
// DARK MODE
// ==========================
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // Save preference
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}

// LOAD SAVED THEME (runs ASAP)
(function () {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
        document.body.classList.add("dark");
    }
})();


// ==========================
// SCROLL ANIMATION (IMPROVED)
// ==========================
const elements = document.querySelectorAll('.section, .feature-card');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < triggerBottom) {
            el.classList.add('show');
        } else {
            // Optional: remove animation when scrolling up
            el.classList.remove('show');
        }
    });
}

// Run once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    showOnScroll();
});

// Scroll listener
window.addEventListener('scroll', showOnScroll);


// ==========================
// BONUS: ACTIVE NAV LINK
// ==========================
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.fontWeight = "bold";
        link.style.borderBottom = "2px solid white";
    }
});