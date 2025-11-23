const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Lucky Aigbefoh`;
}

const animatedSections = document.querySelectorAll(".section-animate");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach(section => sectionObserver.observe(section));
} else {
  animatedSections.forEach(section => section.classList.add("visible"));
}

const themeToggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      themeToggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      themeToggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });
}

function highlightContact() {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return;

  contactSection.classList.remove("section-highlight");
  void contactSection.offsetWidth;
  contactSection.classList.add("section-highlight");

  setTimeout(() => {
    contactSection.classList.remove("section-highlight");
  }, 1400);
}

if (window.location.hash === "#contact") {
  window.addEventListener("load", highlightContact);
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#contact") highlightContact();
});

const contactButtons = document.querySelectorAll(
  'a[href="#contact"], #contact-cta'
);

contactButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setTimeout(highlightContact, 120);
  });
});
