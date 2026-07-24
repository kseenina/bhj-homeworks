const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.responseText);
    const title = document.getElementById('poll__title');
    title.textContent = data.data.title;
    const pollId = data.id;
    const answers = document.getElementById('poll__answers');
    const dataAnswers = data.data.answers;
    dataAnswers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            const voteXhr = new XMLHttpRequest();
            voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', true);
            voteXhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            voteXhr.addEventListener('load', () => {
                const results = JSON.parse(voteXhr.responseText);
                answers.innerHTML = '';
                results.stat.forEach(result => {
                    const pollAnswerResult = document.createElement('div');
                    pollAnswerResult.classList.add('poll__answer');
                    pollAnswerResult.textContent = `${result.answer}: ${result.votes}`;
                    answers.append(pollAnswerResult);
                });
            });
            voteXhr.send(`vote=${pollId}&answer=${index}`);
        });
        answers.append(btn);
    });
});
xhr.send();