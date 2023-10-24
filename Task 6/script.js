const formSections = document.querySelectorAll('.form-section');

formSections.forEach(section => {
    const inputElement = section.querySelector('input, textarea');

    inputElement.addEventListener('focus', () => {
        section.classList.add('active');
    });

    inputElement.addEventListener('blur', () => {
        section.classList.remove('active');
    });
});
