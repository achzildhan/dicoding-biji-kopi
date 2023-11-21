import loadMenu from "./loadMenu.js"

// inisialisasi data burger
export const coffeesData = [];

(async () => {
    const {coffees} = await fetch("static/coffee.json").then((res) => 
    res.json()
    );

    coffeesData.push(...coffees);
    loadMenu();
})
