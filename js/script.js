const mobileNav = document.querySelector(".mobile-navbar");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  hamburgerMenu.classList.toggle("bi-list");
  hamburgerMenu.classList.toggle("bi-x");
});
