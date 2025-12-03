// Burger menu toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  // close menu when link clicked (optional)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    });
  });
}