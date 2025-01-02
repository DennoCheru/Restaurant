import pancakes from './images/pancakes.jpg';
import bananaBread from './images/banana-bread.jpg';
import nyamaChoma from './images/nyama.jpg';
import beef from './images/roast-beef.jpg';

function createMenuPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const meals = [
        {
            name: 'Pancakes',
            image: pancakes,
            description: 'Fluffy pancakes served with maple syrup and butter.',
            price: '$9.99'
        },
        {
            name: 'Banana Bread',
            image: bananaBread,
            description: 'Homemade banana bread served with whipped cream.',
            price: '$7.99'
        },
        {
            name: 'Nyama Choma',
            image: nyamaChoma,
            description: 'Grilled beef served with kachumbari and ugali.',
            price: '$15.99'
        },
        {
            name: 'Roast Beef',
            image: beef,
            description: 'Roast beef served with mashed potatoes and gravy.',
            price: '$19.99'
        }
    ];

    meals.forEach(meal => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const image = document.createElement('img');
        image.src = meal.image;
        image.alt = meal.name;

        const mealName = document.createElement('h2');
        mealName.textContent = meal.name;

        const description = document.createElement('p');
        description.textContent = meal.description;

        const price = document.createElement('p');
        price.textContent = meal.price;

        card.appendChild(image);
        card.appendChild(mealName);
        card.appendChild(description);
        card.appendChild(price);

        menuItems.appendChild(card);
    });

    content.appendChild(headline);
    content.appendChild(menuItems);
}

export default createMenuPage;