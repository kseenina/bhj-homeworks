let timer = +document.getElementById('timer').textContent;
const id = setInterval(() => {
    if (timer === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(id);
    }
    else{
        timer--;
        document.getElementById('timer').textContent = timer;
    }
}, 1000);