const hasTooltips = document.querySelectorAll('.has-tooltip');
hasTooltips.forEach((hasTooltip) => {
    const tooltip = document.createElement('div');
    tooltip.textContent = hasTooltip.getAttribute('title');
    tooltip.classList.add('tooltip');
    tooltip.style.position = 'absolute';
    const rect = hasTooltip.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    hasTooltip.insertAdjacentElement('afterend', tooltip);
    hasTooltip.addEventListener('click', (event) => {
        event.preventDefault();
        const oldTooltip = document.querySelector('.tooltip_active');
        if (oldTooltip) {
            oldTooltip.classList.remove('tooltip_active');
        }
        tooltip.classList.add('tooltip_active');
    });
});

