let clicker__counter = +document.getElementById('clicker__counter').textContent;
let click__even = true;
document.getElementById('cookie').onclick = () => {
    clicker__counter++;
    document.getElementById('clicker__counter').textContent = clicker__counter;
    if (click__even === true) {
        document.getElementById('cookie').width = '300';
        click__even = false;
    }
    else {
        document.getElementById('cookie').width = '200';
        click__even = true;
    }
}