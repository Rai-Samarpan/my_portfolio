// Mobile navigation
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuBtn.textContent = isOpen ? "×" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
    menuBtn.textContent = "☰";
  });
});

// Highlight the section currently in view
const sections = document.querySelectorAll("main section[id]");
function updateActiveLink() {
  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) currentSection = section.id;
  });
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// The contact form posts directly to FormSubmit. Do not prevent the default submit:
// doing so would stop the message from being delivered to the configured inbox.
