const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle?.addEventListener("click", () => {
  const isVisible = primaryNav?.hasAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", String(!isVisible));
  primaryNav?.toggleAttribute("data-visible");
  primaryHeader?.toggleAttribute("data-overlay");
});
