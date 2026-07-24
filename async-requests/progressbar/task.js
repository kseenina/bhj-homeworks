const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send(formData);
});