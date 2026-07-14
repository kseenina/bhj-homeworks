const rotators = document.querySelectorAll('.rotator');
rotators.forEach((rotator) => {
    const rotator__cases = Array.from(document.querySelectorAll('.rotator__case'));
    let current__case = 0;
    setInterval(() => {
        rotator__cases[current__case].classList.remove('rotator__case_active');
        current__case++;
        if (current__case > rotator__cases.length - 1) {
            current__case = 0;
        };
        rotator__cases[current__case].classList.add('rotator__case_active');
    }, 1000);
});