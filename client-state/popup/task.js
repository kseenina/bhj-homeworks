const popup = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');
if (!document.cookie.includes('popupClosed=true')) {
    popup.classList.add('modal_active');
}
closeBtn.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'popupClosed=true';
});

