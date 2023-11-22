const menuBtn = document.querySelector(".navbar-menu-toggle");
const navbarContent = document.querySelector(".navbar-content");

function navbarInit() {
  menuBtn.addEventListener("click", () => {
    navbarContent.classList.toggle("navbar-open");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarContent.classList.remove("navbar-open");
    }
  });
}
