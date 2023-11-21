const prevBtn = document.querySelector(".menu-prev-btn");
const nextBtn = document.querySelector(".menu-next-btn");

const menuCardWidth = 320;

function sliderInit() {
  nextBtn.addEventListener(
    "click",
    () => (menuList.scrollLeft += menuCardWidth)
  );

  prevBtn.addEventListener(
    "click",
    () => (menuList.scrollLeft -= menuCardWidth)
  );
}
