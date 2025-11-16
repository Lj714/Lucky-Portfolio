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
