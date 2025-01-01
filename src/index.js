import './style.css';
import createHomePage from "./home.js";
import createContactPage from './contact.js';

function clearContent() {
    const content = document.getElementById('content');
    content.textContent = '';
}

function setActiveButton(buttonId) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

function init() {
    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        createHomePage();
        setActiveButton('homeBtn');
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        createMenuPage();
        setActiveButton('menuBtn');
    });

    document.getElementById('contactBtn').addEventListener('click', () => {
        clearContent();
        createContactPage();
        setActiveButton('contactBtn');
    });

    setActiveButton('homeBtn');
    createHomePage();
}

init();