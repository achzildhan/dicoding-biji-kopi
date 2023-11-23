const homeWrapper = document.querySelector(".home-wrapper");

function parallaxChecker() {
  if (window.scrollY < 900) {
    homeWrapper.style.backgroundPosition = `right ${
      window.scrollY / 2.5
    }px `;
  }
}
