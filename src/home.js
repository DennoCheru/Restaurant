function createHomePage() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Asis Restaurant!';

    const subheading = document.createElement('h2');
    subheading.textContent = 'The best food in town!';

    const description = document.createElement('p');
    description.textContent = 'At Asis Restaurant, we serve a fusion of traditional and modern cuisine that will tantalize your taste buds. Our chefs use the freshest ingredients to create unforgettable dishes in a warm and inviting atmosphere.';

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
        <h3>Operating Hours</h3>
        <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
        `;

    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Explore Our Menu';
    ctaButton.classList.add('cta-button');

    homeContainer.appendChild(headline);
    homeContainer.appendChild(subheading);
    homeContainer.appendChild(description);
    homeContainer.appendChild(hours);
    homeContainer.appendChild(ctaButton);
    
    content.appendChild(homeContainer);
}

export default createHomePage;