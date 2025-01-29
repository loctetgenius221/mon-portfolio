// Sélection des éléments
const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".nav");

// Gestion du clic sur le menu burger
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Fermer le menu quand on clique à l'extérieur
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// Fermer le menu après clic sur un lien
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Effet de scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});
