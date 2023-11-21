const coffeesData = [
      {
        "id": 1,
        "name": "Affogato",
        "description": "Affogato is a type of mix less coffee drink and ice cream. The hot espresso slightly melts the ice cream and the corresponding ice cream cools down the beverage.",
        "image": "static/assets/products/affogato.jpg",
        "price": 5.50
      },
      {
        "id": 2,
        "name": "Americano",
        "description": "Americano are common coffee drinks. It's an espresso with hot water poured over it and had a smoother, less concentrated flavour than espresso.",
        "image": "static/assets/products/americano.jpg",
        "price": 3.00
      },
      { 
        "id": 3,
        "name": "Black Coffee",
        "description": "Black coffee is arguably the most common type of coffee drink out there. It poured over using French press espresso and real black beans that serve no add-ins",
        "image": "static/assets/products/blackCoffee.jpg",
        "price": 3.20
      },
      {
        "id": 4,
        "name": "Cafe au Lait",
        "description": "Cafe au lait is a coffee beverage that is made with dark roast coffee and steamed milk. The milk is generally warmed up and frothed before it is added to the coffee.",
        "image": "static/assets/products/cafeAuLait.jpg",
        "price": 5.70
      },
      {
        "id": 5,
        "name": "Cappucino",
        "description": "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. This combination will make your day fabolous.",
        "image": "static/assets/products/cappucino.jpg",
        "price": 5.90
      },
      {
        "id": 6,
        "name": "Caramel Macchiato",
        "description": "Caramel Macchiato is mixed espresso with a splash of milk. Also added some pure caramel sugar and freshly some foamed milk instead of steamed milk.",
        "image": "static/assets/products/caramelMacchiato.jpg",
        "price": 5.00
      },
      {
        "id": 7,
        "name": "Coffe Cup",
        "description": "Instant coffe in a cup that will make you easy to bring it. The instant coffee has any variants, like milk coffee, brown sugar coffe, and pure black coffee.",
        "image": "static/assets/products/coffeCup.jpg",
        "price": 2.80
      },
      {
        "id": 8,
        "name": "Cold Brew",
        "description": "Cold brew coffee is is a coffee with a smooth concentrate that can be diluted with water or milk. Its make from coarsely ground coffee in cool or room temperature water. ",
        "image": "static/assets/products/coldBrew.jpg",
        "price": 6.50
      },
      {
        "id": 9,
        "name": "Cortado",
        "description": "Cortado is a type of coffe that consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity. Its more milky and soft than black coffee.",
        "image": "static/assets/products/cortado.jpg",
        "price": 5.40
      },
      {
        "id": 10,
        "name": "Espresso",
        "description": "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This much stronger than any types.",
        "image": "static/assets/products/espressoCoffee.jpg",
        "price": 4.00
      },
      {
        "id": 11,
        "name": "Flat White",
        "description": "Flat white is type of coffee drink that made from espresso and steamed milk. When those are mixed, they create a delicious combination that smooth and creamy",
        "image": "static/assets/products/flatWhite.jpg",
        "price": 4.30
      },
      {
        "id": 12,
        "name": "Frappe",
        "description": "Frappe is delicious iced beverage that has been blended until a foamy texture. This types of coffee comes with whipped cream and tasty toppings that usually served cold.",
        "image": "static/assets/products/frappe.jpg",
        "price": 5.90
      },
      {
        "id": 13,
        "name": "Irish Coffee",
        "description": "Irish Coffee is hot beverage that made from coffee, whiskey, and cream. That usually served with a spoonful sugar to balance out the drinks's bitterness.",
        "image": "static/assets/products/irishCoffee.jpg",
        "price": 6.00
      },
      {
        "id": 14,
        "name": "Latte",
        "description": "Latte is an espresso with steamed milk and a dollop of milk foam on top. It contains less foam, making it smoother and gentler for those with sensitive palettes.",
        "image": "static/assets/products/latte.jpg",
        "price": 4.90
      },
      {
        "id": 15,
        "name": "Macchiato",
        "description": "Macchiato is mixed between an hot espresso with a spot of milk. It will add a dollop of foamed milk rather than just steamed milk, and usually will served hot.",
        "image": "static/assets/products/macchiato.jpg",
        "price": 4.50
      },
      {
        "id": 16,
        "name": "Milk Coffee",
        "description": "Milk Coffee is basic based espresso and milk powder. It will make your day more happy, especially when we add ice, sugar syrup, and whipped-cream",
        "image": "static/assets/products/milkCoffee.jpg",
        "price": 3.90
      },
      {
        "id": 17,
        "name": "Mix Latte",
        "description": "Mix Latte is an espresso with steamed milk and a dollop of milk foam on top. It mixed based espresso and milk coffee, and poured on foam on the top.",
        "image": "static/assets/products/mixLatte.jpg",
        "price": 4.80
      },
      {
        "id": 18,
        "name": "Mocha",
        "description": "Mochas are espresso based drinks made with chocolate and whipped cream, instead of foam. This is make a balance ratio of cappucinos and latte.",
        "image": "static/assets/products/mocha.jpg",
        "price": 4.40
      },
      {
        "id": 19,
        "name": "Mocchaccino",
        "description": "Mocchaccinos are espresso based drinks made with chocolate, whipped cream, and foamed milk. This is make a balance ratio of cappucino, latte, and macchiato.",
        "image": "static/assets/products/flatWhite.jpg",
        "price": 5.40
      },
      {
        "id": 20,
        "name": "Red Eye",
        "description": "Red Eye is an unique and rich flavour types of coffe. It's basic drip coffee with espresso added and has high concentration of caffeine.",
        "image": "static/assets/products/frappe.jpg",
        "price": 5.00
      },
      {
        "id": 21,
        "name": "Ristretto",
        "description": "Ristretto is made from espresso roast that used for full shots, but less hot water added. The result is more concentrated serving with a sweeter, richer flavor.",
        "image": "static/assets/products/ristretto.jpg",
        "price": 5.50
      }  
    ];

const topPick = document.querySelector(".top-pick");
const runnerUpPickOne = document.querySelector(".picks-runner-ups .picks-item:first-of-type");
const runnerUpPickTwo = document.querySelector(".picks-runner-ups .picks-item:last-of-type");
const menuList = document.querySelector(".menu-list");

function updateTopPicks(pickHTML, coffeeData) {
  pickHTML.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url('${coffeeData.image}')`;
  pickHTML.style.backgroundPosition = `center`;
  pickHTML.querySelector(".picks-item-title").textContent = coffeeData.name;
  pickHTML.querySelector(".picks-item-desc").textContent = coffeeData.description;
  pickHTML.querySelector(".picks-item-price").textContent = `$${coffeeData.price}`;
  pickHTML.querySelector(".btn-order").setAttribute("data-menu-id", coffeeData.id);
}

function cardMenuBgString(url) {
  return `background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${url}')`;
}

function loadMenu() {
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
          <span class="menu-card-price">$${coffeesData[i].price}</span>
        </figcaption>
        <button data-menu-id="${coffeesData[i].id}" class="btn btn-submit btn-order">Add To Orders</button>
      </figure>
    `;

    menuList.append(menuListItem);
  }
}