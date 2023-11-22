const showProfileBtn = document.querySelector(".btn-show-profile");
const profile = document.querySelector(".profile");

function profileInit() {
  showProfileBtn.addEventListener("click", () => {
    profile.classList.toggle("profile-showing");
  });
}
