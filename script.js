// ==========================
// DARK MODE (FINAL)
// ==========================
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");

    // Save preference
    localStorage.setItem(
        "darkMode",
        document.documentElement.classList.contains("dark")
    );
}


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
            el.classList.remove('show'); // smooth reset
        }
    });
}

// Run when DOM is ready
window.addEventListener('DOMContentLoaded', showOnScroll);
window.addEventListener('scroll', showOnScroll);


// ==========================
// ACTIVE NAV LINK (IMPROVED)
// ==========================
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
