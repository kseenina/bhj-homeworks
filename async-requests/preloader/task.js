const items = document.getElementById('items');

function createValuteItem(valute) {
    const item = document.createElement('div');
    item.classList.add('item');
    items.append(item);
    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent = valute.CharCode;
    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent = valute.Value;
    const currency = document.createElement('div');
    currency.classList.add('item__currency');
    currency.textContent = 'руб.';
    item.append(code, value, currency);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.responseText);
    const valutes = data.response.Valute;
    Object.values(valutes).forEach(valute => {
        createValuteItem(valute);
    });
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
});
xhr.send();