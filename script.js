// This runs when the page loads
console.log("Hello from Lucky's portfolio!");

// Automatically set the current year in the footer
const footer = document.querySelector("footer p");
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Lucky Aigbefoh`;
}
