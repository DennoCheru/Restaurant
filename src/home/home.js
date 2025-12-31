import "./styles.css"
import logo from "./images/logo.png"

function home() {
    let container = document.querySelector("#content");
    container.textContent = "";

    let header = document.createElement('h1');
    header.textContent = "Home";

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
    media.appendChild(heroImg);

    hero.appendChild(text)
    hero.append(media);

    container.appendChild(header);
    container.appendChild(hero);
}

export default home;
