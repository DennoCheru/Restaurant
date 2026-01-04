function About() {
const container = document.querySelector('#content');

const locationContainer = document.createElement('div');
const locationTitle = document.createElement('h3');
locationTitle.textContent = "Find Us here";
const locationText = document.createElement('p');
locationText.textContent = `
"10th Street, 101 Avenue,
Kericho, Kenya.
`
locationContainer.appendChild(locationTitle);
locationContainer.appendChild(locationText)

container.appendChild(locationContainer)
}

export default About;