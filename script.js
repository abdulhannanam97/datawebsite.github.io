// ==========================
// DARK MODE (FINAL + SAFE)
// ==========================
function toggleDarkMode() {
    const root = document.documentElement;

    root.classList.toggle("dark");

    // Save preference safely
    try {
        localStorage.setItem(
            "darkMode",
            root.classList.contains("dark")
        );
    } catch (e) {
        console.warn("LocalStorage not available:", e);
    }
}


// ==========================
// SCROLL ANIMATION (OPTIMIZED)
// ==========================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section, .feature-card');

    if (!elements.length) return; // prevent unnecessary work

    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();

            if (rect.top < triggerBottom) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    }

    // Run once
    showOnScroll();

    // Use passive listener for better performance
    window.addEventListener('scroll', showOnScroll, { passive: true });
}


// ==========================
// ACTIVE NAV LINK (CLEAN)
// ==========================
function setActiveNav() {
    const navLinks = document.querySelectorAll("nav a");

    // Handle GitHub Pages paths properly
    let currentPage = window.location.pathname.split("/").pop();

    if (!currentPage || currentPage === "") {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
}


// ==========================
// INIT (RUN EVERYTHING SAFELY)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    initScrollAnimations();
    setActiveNav();
});
