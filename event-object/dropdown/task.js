document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdown__list = dropdown.querySelector('.dropdown__list');
    const dropdown__links = Array.from(dropdown.querySelectorAll('.dropdown__link'));
    const dropdown__value = dropdown.querySelector('.dropdown__value');

    dropdown.addEventListener('click', () => {
        dropdown__list.classList.toggle('dropdown__list_active');
    });

    dropdown__links.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            dropdown__value.textContent = event.currentTarget.textContent;
        });
    });
});