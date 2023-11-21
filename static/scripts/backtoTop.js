const backToTopBtn = document.querySelector(".btn-to-top");
const totalHeight = document.querySelector("body").scrollHeight;
let isOn = false;

window.onscroll = function() {backToTopchecker()};

function backToTopchecker() {
  if ((window.scrollY / totalHeight) * 100 > 5) {
    if (!isOn) {
      isOn = true;

      backToTopBtn.classList.remove("btn-to-top-off");
    }
  } else {
    isOn = false;
    backToTopBtn.classList.add("btn-to-top-off");
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}