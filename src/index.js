import "./styles.css";
import Home from "./home/home.js";
import Services from "./services/services.js";
import About from "./about/about.js";

function Load() {
    const container = document.querySelector('.container');
    container.textContent = "";
    Home();

    const nav = document.querySelector('nav');

    nav.addEventListener('click', (e)=> {
        nav.querySelectorAll('button').forEach(btn => 
            btn.classList.remove('active')
        );

        e.target.classList.add('active');

        if (!e.target.matches('button[data-page]')) return;

        const page = e.target.dataset.page;

        switch(page) {
            case 'home':
                clearContent();
                Home();
                break;
            case 'services':
                clearContent();
                Services();
                break;
            case 'about':
                clearContent()
                About()
                break;
            default:
                clearContent();
                container.textContent = "404 Error! Page not found."
        }
    });

    function clearContent() {
        container.textContent = "";
    }
}

Load();