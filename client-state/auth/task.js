const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const storedUserId = localStorage.getItem('user_id');
function successLogin(user_id) {
    userIdSpan.textContent = user_id;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}

if (storedUserId) {
    successLogin(storedUserId);
} else {
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const login = signinForm.login.value;
        const password = signinForm.password.value;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({login, password}));
        xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                successLogin(response.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        });
    });
}
