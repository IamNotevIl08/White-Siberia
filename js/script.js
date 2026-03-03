const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu() {
  burgerBtn.classList.add("is-open");
  mobileNav.classList.add("is-open");
  overlay.classList.add("is-open");
  burgerBtn.setAttribute("aria-expanded", "true");
  mobileNav.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  burgerBtn.classList.remove("is-open");
  mobileNav.classList.remove("is-open");
  overlay.classList.remove("is-open");
  burgerBtn.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.contains("is-open") ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);
mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});