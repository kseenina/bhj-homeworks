document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdown__list = document.querySelector('.dropdown__list');
    const dropdown__links = Array.from(document.querySelectorAll('.dropdown__link'));
    const dropdown__value = document.querySelector('.dropdown__value');

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