function createHomePage() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Asis Restaurant!';

    const subheading = document.createElement('h2');
    subheading.textContent = 'The best food in town!';

    homeContainer.appendChild(headline);
    homeContainer.appendChild(subheading);

    content.appendChild(homeContainer);
}

export default createHomePage;