function About() {
const container = document.querySelector('#content');

const locationContainer = document.createElement('div');
const locationTitle = document.createElement('h1');
locationTitle.textContent = "Find Us here";
const locationText = document.createElement('p');
locationText.textContent = `
"10th Street, 101 Avenue,
Kericho, Kenya.
`
locationContainer.appendChild(locationTitle);
locationContainer.appendChild(locationText)

const contactUs = document.createElement('div');
const contactTitle = document.createElement('h1');
contactTitle.textContent = "Contact Us";
contactUs.appendChild(contactTitle);

const contactForm = document.createElement('form');
contactForm.classList.add('contactForm')
const fields = [
    {
        name: "nameField",
        inputType: "input",
        type: "text",
        id : "name",
        placeholder: "Your Name here..."
    },
    {
        name: "emailField",
        inputType: "input",
        type: "email",
        id: "email",
        placeholder: "Your Email here",
    },
    {
        name: "messageField",
        inputType: "textarea",
        id: "message",
        placeholder: "Your Message here..."
    },
];

fields.forEach(field => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('formField');

    const element = document.createElement(field.inputType);
    element.id = field.id;
    element.name = field.name;
    element.placeholder = field.placeholder;

    if (field.inputType === "input") {
        element.type = field.type;
    };

    if (field.text) {
        element.textContent = field.text;
    }

    fieldWrapper.appendChild(element);
    contactForm.appendChild(fieldWrapper);
});
const submitBtn = document.createElement('button');
submitBtn.classList.add("submitBtn")
submitBtn.type = "submit";
submitBtn.textContent = "Send Message";
contactForm.appendChild(submitBtn);

contactUs.appendChild(contactForm);

contactForm.appendChild(submitBtn)

container.appendChild(locationContainer);
container.appendChild(contactUs);
}

export default About;