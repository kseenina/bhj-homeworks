const editor = document.getElementById('editor');
const savedText = localStorage.getItem('savedText');
editor.value = savedText ? savedText : '';
editor.addEventListener('input', () => {
    localStorage.setItem('savedText', editor.value);
});
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
});