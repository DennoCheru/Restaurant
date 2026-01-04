import burger from "./images/burger.jpg";
import chickenWings from "./images/chicken wings.jpg";
import friedChicken from "./images/fried chicken.jpg";
import friedFish from "./images/fried fish.jpg";
import fries from "./images/fries.jpg";
import roastBeef from "./images/roast beef.jpg";
import roastChicken from "./images/roast chicken.jpg";

const meals = [
    {
        name: "Burger",
        price: 650,
        image: burger,
    },
    {
        name: "Chicken Wings",
        price: 750,
        image: chickenWings,
    },
    {
        name: "Fried Chicken",
        price: 900,
        image: friedChicken,
    },
    {
        name: "Roast Chicken",
        price: 1200,
        image: roastChicken,
    },
    {
        name: "Fried Fish",
        price: 800,
        image: friedFish,
    },
    {
        name: "Fries",
        price: 300,
        image: fries,
    },
    {
        name: "Roast Beef",
        price: 1100,
        image: roastBeef,
    },
];

function services() {
const container = document.querySelector('#content');

let restaurantContainer = document.createElement('div');
restaurantContainer.classList.add('container', 'restaurantContainer');
const title = document.createElement('h1');
title.textContent = "Our Meals";
restaurantContainer.appendChild(title);

const mealsContainer = document.createElement('div');
mealsContainer.classList.add('meals');
meals.forEach(meal => {
    const card = document.createElement('div');
    card.classList.add('card', 'mealCard');

    const img = document.createElement('img');
    img.src = meal.image;
    img.alt = meal.name;

    const mealName = document.createElement('h3');
    mealName.textContent = meal.name;

    const mealPrice = document.createElement('p');
    mealPrice.textContent = `Ksh ${meal.price}`;

    card.append(img,mealName,mealPrice)
    mealsContainer.appendChild(card)
});
restaurantContainer.appendChild(mealsContainer);

container.appendChild(restaurantContainer);
}

export default services;