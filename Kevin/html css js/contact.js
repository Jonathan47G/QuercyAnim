const contactFormContainer = document.getElementById('contact-form-container');
const contactFormToggleBtn = document.getElementById('contact-form-toggle-btn');

contactFormToggleBtn.addEventListener('click', () => {
  contactFormContainer.classList.toggle('opened');
});