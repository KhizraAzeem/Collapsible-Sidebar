// script.js
const menuBtn = document.querySelector(".menu-btn");

// Toggle sidebar
menuBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("collapsed");
  e.currentTarget.classList.toggle("fa-chevron-right");
  e.currentTarget.classList.toggle("fa-chevron-left");
});

// For mobile
menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-open");
});




