let dead = +document.getElementById('dead').textContent;
let lost = +document.getElementById('lost').textContent;
for (let i = 1; i <= 9; i++) {
    let hole_id = 'hole' + i;
    let hole = document.getElementById(hole_id);
    hole.onclick = () => {
        if (hole.classList.contains( 'hole_has-mole' )) {
            dead++;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                alert('Победа! Вы убили всех кротов!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;
            }
        }
        else {
            lost++;
            document.getElementById('lost').textContent = lost;
             if (lost === 5) {
                alert('Поражение! Вы промахнулись 5 раз и кроты сожрали весь урожай!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;
            }
        }
    }
}