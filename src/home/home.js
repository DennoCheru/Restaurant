import "./styles.css"

import logo from "./images/logo.png"
import restaurantPic from "./images/restaurant.jpg";
import accomodationPic from "./images/hotel room.jpg";
import swimmingPic from "./images/hotel swimming.jpg";
import userPic from "./images/user.jpg"

function home() {
    let container = document.querySelector("#content");
    container.classList.add('container');
    container.textContent = "";

    let hero = document.createElement('div');
    hero.classList.add("hero");

    let text = document.createElement('div');

    let textTitle = document.createElement('h2');
    textTitle.textContent = "Your Home of Comfort, Flavor & Relaxation.";

    let textParagraph = document.createElement('p');
    textParagraph.textContent = "From delicious meals and cozy rooms to refreshing swims and energizing gym sessions, we make every stay unforgettable."
    
    text.appendChild(textTitle);
    text.appendChild(textParagraph)

    let media = document.createElement('div');
    let heroImg = document.createElement('img');
    heroImg.src = logo;
    heroImg.alt = "Logo"
    media.appendChild(heroImg);

    hero.appendChild(text)
    hero.append(media);

    let servicesContainer = document.createElement('div');
    servicesContainer.classList.add('container', 'servicesContainer')
    
    let servicesTitle = document.createElement('h1');
    servicesTitle.textContent = "Our Services";

    let services = document.createElement('div');
    services.classList.add('services');

    let restaurant = document.createElement('div');
    restaurant.classList.add('card');
    let restaurantText = document.createElement('h2');
    restaurantText.textContent = "Restaurant";
    let restaurantImg = document.createElement('img');
    restaurantImg.src = restaurantPic;
    restaurantImg.alt = "Restaurant";
    restaurant.appendChild(restaurantText);
    restaurant.appendChild(restaurantImg)

    let accomodation = document.createElement('div');
    accomodation.classList.add('card');
    let accomodationText = document.createElement('h2');
    accomodationText.textContent = "Accomodation";
    let accomodationImg = document.createElement('img');
    accomodationImg.src = accomodationPic;
    accomodationImg.alt = "Accomodation";
    accomodation.appendChild(accomodationText);
    accomodation.appendChild(accomodationImg);

    let healthFitness = document.createElement('div');
    healthFitness.classList.add('card');
    let healthFitnessText = document.createElement('h2');
    healthFitnessText.textContent = "Health & Fitness";
    let healthFitnessImg = document.createElement('img');
    healthFitnessImg.src = swimmingPic;
    healthFitnessImg.alt = "Health and Fitness";
    healthFitness.appendChild(healthFitnessText);
    healthFitness.appendChild(healthFitnessImg);

    
    services.appendChild(restaurant);
    services.appendChild(accomodation);
    services.appendChild(healthFitness);

    servicesContainer.appendChild(servicesTitle);
    servicesContainer.appendChild(services);

    let reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('container', 'reviewsContainer')
    let reviewTitle = document.createElement('h1');
    reviewTitle.textContent = "What Our Customers Say";
    reviewsContainer.appendChild(reviewTitle);
    let reviews = document.createElement('div');
    reviews.classList.add('reviews');
    for (let i = 0; i<5; i++) {
        let reviewCard = document.createElement('div');
        reviewCard.classList.add('reviewCard', 'card');

        let cardImage = document.createElement('img');
        cardImage.src = userPic;
        cardImage.alt = "Review";

        let cardReview = document.createElement('p');
        cardReview.textContent = `"This is the best hotel south of the Sahara!"`

        let cardName = document.createElement('p');
        cardName.textContent = "~ John Doe";

        reviewCard.appendChild(cardImage);
        reviewCard.appendChild(cardReview);
        reviewCard.appendChild(cardName);

        reviews.appendChild(reviewCard);
    }
    reviewsContainer.appendChild(reviews);

    container.appendChild(hero);
    container.appendChild(servicesContainer);
    container.appendChild(reviewsContainer);
}

export default home;
