const book__content = document.querySelector('.book__content');

const fontSizeButtons = document.querySelectorAll('.font-size');
fontSizeButtons.forEach((fontSizeButton) => {
    fontSizeButton.addEventListener('click', (event) => {
        event.preventDefault();
        fontSizeButtons.forEach((fontSizeButton) => {
            fontSizeButton.classList.remove('font-size_active');
        });
        fontSizeButton.classList.add('font-size_active');
        const size = fontSizeButton.dataset.size;
        if (size === 'small') {
            book__content.classList.remove('book_fs-big');
            book__content.classList.add('book_fs-small');
        }
        else if (size === 'big') {
            book__content.classList.remove('book_fs-small');
            book__content.classList.add('book_fs-big');
        }
        else {
            book__content.classList.remove('book_fs-small');
            book__content.classList.remove('book_fs-big');
        }
    });
});

const book__control_color = document.querySelector('.book__control_color');
const textColorButtons = book__control_color.querySelectorAll('.color');
textColorButtons.forEach((textColorButton) => {
    textColorButton.addEventListener('click', (event) => {
        event.preventDefault();
        textColorButtons.forEach((textColorButton) => {
            textColorButton.classList.remove('color_active');
        });
        textColorButton.classList.add('color_active');
        const color = textColorButton.dataset.textColor;
        if (color === 'whitesmoke') {
            book__content.classList.remove('book_color-black');
            book__content.classList.remove('book_color-gray');
            book__content.classList.add('book_color-whitesmoke');
        }
        else if (color === 'gray') {
            book__content.classList.remove('book_color-black');
            book__content.classList.remove('book_color-whitesmoke');
            book__content.classList.add('book_color-gray');
        }
        else if (color === 'black') {
            book__content.classList.remove('book_color-whitesmoke');
            book__content.classList.remove('book_color-gray');
            book__content.classList.add('book_color-black');
        }
    });
});

const book__control_background = document.querySelector('.book__control_background');
const bgColorButtons = book__control_background.querySelectorAll('.color');
bgColorButtons.forEach((bgColorButton) => {
    bgColorButton.addEventListener('click', (event) => {
        event.preventDefault();
        bgColorButtons.forEach((bgColorButton) => {
            bgColorButton.classList.remove('color_active');
        });
        bgColorButton.classList.add('color_active');
        const bgColor = bgColorButton.dataset.bgColor;
        if (bgColor === 'white') {
            book__content.classList.remove('book_bg-black');
            book__content.classList.remove('book_bg-gray');
            book__content.classList.add('book_bg-white');
        }
        else if (bgColor === 'gray') {
            book__content.classList.remove('book_bg-black');
            book__content.classList.remove('book_bg-white');
            book__content.classList.add('book_bg-gray');
        }
        else if (bgColor === 'black') {
            book__content.classList.remove('book_bg-white');
            book__content.classList.remove('book_bg-gray');
            book__content.classList.add('book_bg-black');
        }
    });
});