import logo from "./images/logo.png"
import restaurantPic from "./images/restaurant.jpg";
import accomodationPic from "./images/hotel room.jpg";
import swimmingPic from "./images/hotel swimming.jpg";
import userPic from "./images/user.jpg"

function Home() {
    const container = document.querySelector("#content");
    container.classList.add('container');
    container.textContent = "";

    const hero = document.createElement('div');
    hero.classList.add("hero");

    const text = document.createElement('div');

    const textTitle = document.createElement('h2');
    textTitle.textContent = "Your Home of Comfort, Flavor & Relaxation.";

    const textParagraph = document.createElement('p');
    textParagraph.textContent = "From delicious meals and cozy rooms to refreshing swims and energizing gym sessions, we make every stay unforgettable."
    
    text.appendChild(textTitle);
    text.appendChild(textParagraph)

    const media = document.createElement('div');
    const heroImg = document.createElement('img');
    heroImg.src = logo;
    heroImg.alt = "Logo"
    media.appendChild(heroImg);

    hero.appendChild(text)
    hero.append(media);

    const servicesContainer = document.createElement('div');
    servicesContainer.classList.add('container', 'servicesContainer')
    
    const servicesTitle = document.createElement('h1');
    servicesTitle.classList.add('sticky');
    servicesTitle.textContent = "Our Services";

    const services = document.createElement('div');
    services.classList.add('services');

    const restaurant = document.createElement('div');
    restaurant.classList.add('card');
    const restaurantText = document.createElement('h2');
    restaurantText.textContent = "Restaurant";
    const restaurantImg = document.createElement('img');
    restaurantImg.src = restaurantPic;
    restaurantImg.alt = "Restaurant";
    restaurant.appendChild(restaurantText);
    restaurant.appendChild(restaurantImg)

    const accomodation = document.createElement('div');
    accomodation.classList.add('card');
    const accomodationText = document.createElement('h2');
    accomodationText.textContent = "Accomodation";
    const accomodationImg = document.createElement('img');
    accomodationImg.src = accomodationPic;
    accomodationImg.alt = "Accomodation";
    accomodation.appendChild(accomodationText);
    accomodation.appendChild(accomodationImg);

    const healthFitness = document.createElement('div');
    healthFitness.classList.add('card');
    const healthFitnessText = document.createElement('h2');
    healthFitnessText.textContent = "Health & Fitness";
    const healthFitnessImg = document.createElement('img');
    healthFitnessImg.src = swimmingPic;
    healthFitnessImg.alt = "Health and Fitness";
    healthFitness.appendChild(healthFitnessText);
    healthFitness.appendChild(healthFitnessImg);

    
    services.appendChild(restaurant);
    services.appendChild(accomodation);
    services.appendChild(healthFitness);

    servicesContainer.appendChild(servicesTitle);
    servicesContainer.appendChild(services);

    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('container', 'reviewsContainer')
    const reviewTitle = document.createElement('h1');
    reviewTitle.classList.add('sticky');
    reviewTitle.textContent = "What Our Customers Say";
    reviewsContainer.appendChild(reviewTitle);
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    for (let i = 0; i<4; i++) {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('reviewCard', 'card');

        const cardImage = document.createElement('img');
        cardImage.src = userPic;
        cardImage.alt = "Review";

        const cardReview = document.createElement('p');
        cardReview.textContent = `"This is the best hotel south of the Sahara!"`

        const cardName = document.createElement('p');
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

export default Home;
