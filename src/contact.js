function createContactPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const nameField = document.createElement('div');
    nameField.classList.add('form-field');

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name: ';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;

    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);

    const emailField = document.createElement('div');
    emailField.classList.add('form-field');

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email: ';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    emailField.appendChild(emailLabel);
    emailField.appendChild(emailInput);

    const messageField = document.createElement('div');
    messageField.classList.add('form-field');

    const messageLabel = document.createElement('label');
    messageLabel.for = 'message';
    messageLabel.textContent = 'Message: ';

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.required = true;

    messageField.appendChild(messageLabel);
    messageField.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';

    contactForm.appendChild(nameField);
    contactForm.appendChild(emailField);
    contactForm.appendChild(messageField);
    contactForm.appendChild(submitButton);

    content.appendChild(headline);
    content.appendChild(contactForm);

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`Thankyou, ${nameInput.value}! Your message has been sent.`);
        contactForm.reset();
    });
}

export default createContactPage;