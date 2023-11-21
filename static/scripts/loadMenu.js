import { coffeesData } from "./scripts.js";

const topPick = document.querySelector(".top-pick");
const runnerUpPickOne = document.querySelector(
  ".picks-runner-ups .picks-item:first-of-type"
);
const runnerUpPickTwo = document.querySelector(
  ".picks-runner-ups .picks-item:last-of-type"
);
const menuList = document.querySelector(".menu-list");

function updateTopPicks(pickHTML, coffeeData) {
  pickHTML.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url('${coffeeData.image}')`;
  pickHTML.style.backgroundPosition = `center`;
  pickHTML.querySelector(".picks-item-title").textContent = coffeeData.name;
  pickHTML.querySelector(".picks-item-desc").textContent =
    coffeeData.description;
  pickHTML.querySelector(
    ".picks-item-price"
  ).textContent = `$${coffeeData.price}`;
  pickHTML
    .querySelector(".btn-order")
    .setAttribute("data-menu-id", coffeeData.id);
}

function cardMenuBgString(url) {
  return `background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${url}')`;
}

export default async function loadMenu() {
  // update data ke pilihan menu teratas
  updateTopPicks(topPick, coffeesData[0]);
  updateTopPicks(runnerUpPickOne, coffeesData[1]);
  updateTopPicks(runnerUpPickTwo, coffeesData[2]);

  // update data ke menu lainnya
  for (let i = 3; i < coffeesData.length; i++) {
    const menuListItem = document.createElement("li");
    menuListItem.classList.add("menu-list-item");
    menuListItem.innerHTML = `
      <figure 
        class="menu-card" 
        style="${cardMenuBgString(coffeesData[i].image)}"
      >
         <figcaption class="menu-card-detail">
          <h3 class="menu-card-title">${coffeesData[i].name}</h3>
          <p class="menu-card-desc">
            ${coffeesData[i].description}
          </p>
          <span class="menu-card-price">${coffeesData[i].price}</span>
        </figcaption>
        <button data-menu-id="${coffeesData[i].id}" class="btn btn-submit btn-order">Add To Orders</button>
      </figure>
    `;

    menuList.append(menuListItem);
  }
}
S