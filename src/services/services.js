import burger from "./images/burger.jpg";
import chickenWings from "./images/chicken wings.jpg";
import friedChicken from "./images/fried chicken.jpg";
import friedFish from "./images/fried fish.jpg";
import fries from "./images/fries.jpg";
import roastBeef from "./images/roast beef.jpg";
import roastChicken from "./images/roast chicken.jpg";
import doubleBed from "./images/doublebed.jpg";
import hotelRoom1 from "./images/hotel room.jpg";
import hotelRoom2 from "./images/hotel room 2.jpg";
import hotelRoom3 from "./images/hotel room 3.jpg";
import swimming from "./images/hotel swimming.jpg";
import massage from "./images/massage.jpg";
import gym from "./images/gym.jpg";


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

const rooms = [
    {
        name: "Double Bed",
        price: 3000,
        image: doubleBed,
    },
    {
        name: "Single Bed",
        price: 2500,
        image: hotelRoom1,
    },
    {
        name: "Single Bed",
        price: 3000,
        image: hotelRoom2,
    },
    {
        name: "Single Bed, Sea View",
        price: 3500,
        image: hotelRoom3,
    },
];

const healthFitness = [
    {
        name: "Swimming Pool",
        price: 500,
        image: swimming, 
    },
    {
        name: "Massage Parlour",
        price: 1500,
        image: massage,
    },
    {
        name: "Indoor Gym",
        price: 1000,
        image: gym,
    },
];

function services() {
const container = document.querySelector('#content');

const restaurantContainer = document.createElement('div');
restaurantContainer.classList.add('container', 'restaurantContainer');
const mealsTitle = document.createElement('h1');
mealsTitle.textContent = "Our Meals";
restaurantContainer.appendChild(mealsTitle);

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

const accomodationContainer = document.createElement('div');
accomodationContainer.classList.add('container', 'accomodationContainer');
const accomodationTitle = document.createElement('h1');
accomodationTitle.textContent = "Our Rooms";
accomodationContainer.appendChild(accomodationTitle);

const roomsContainer = document.createElement('div');
roomsContainer.classList.add('rooms');
rooms.forEach(room => {
    const roomCard = document.createElement('div');
    roomCard.classList.add('card', 'roomCard');

    const img = document.createElement('img');
    img.src = room.image;
    img.alt = room.name;

    const roomName = document.createElement('h3');
    roomName.textContent = room.name;

    const roomPrice = document.createElement('p');
    roomPrice.textContent = `Ksh ${room.price}`;

    roomCard.append(img, roomName, roomPrice);
    roomsContainer.appendChild(roomCard);
});
accomodationContainer.appendChild(roomsContainer);

const healthFitnessContainer = document.createElement('div');
healthFitnessContainer.classList.add('container', 'healthFitnessContainer');
const healthFitnessTitle = document.createElement('h1');
healthFitnessTitle.textContent = "Health & Fitness";
healthFitnessContainer.appendChild(healthFitnessTitle);

const utilities = document.createElement('div');
utilities.classList.add('utilities');

healthFitness.forEach(utility => {
    const utilityCard = document.createElement('div');
    utilityCard.classList.add('card', 'utilityCard');

    const img = document.createElement('img');
    img.src = utility.image;
    img.alt = utility.name;

    const utilityName = document.createElement('h3');
    utilityName.textContent = utility.name;

    const utilityPrice = document.createElement('p');
    utilityPrice.textContent = `Ksh ${utility.price}`;

    utilityCard.append(img, utilityName,utilityPrice);
    utilities.appendChild(utilityCard);
});
healthFitnessContainer.appendChild(utilities);

container.appendChild(restaurantContainer);
container.appendChild(accomodationContainer);
container.appendChild(healthFitnessContainer);
}

export default services;