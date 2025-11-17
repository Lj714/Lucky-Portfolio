// Log to confirm JavaScript is working
console.log("Hello from Lucky's portfolio!");

// Automatically set the current year in the footer
const footer = document.querySelector("footer p");
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Lucky Aigbefoh`;
}

// Simple scroll animation for sections
const animatedSections = document.querySelectorAll(".section-animate");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));
} else {
  // Fallback if IntersectionObserver is not supported
  animatedSections.forEach((section) => section.classList.add("visible"));
}

// Dark mode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  rootElement.setAttribute("data-theme", "dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = rootElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      rootElement.removeAttribute("data-theme");
      themeToggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      rootElement.setAttribute("data-theme", "dark");
      themeToggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });
}
