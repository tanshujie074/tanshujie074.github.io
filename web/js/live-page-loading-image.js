document.querySelectorAll('.lazy-bg').forEach(el => {
    const bg = el.getAttribute('data-bg');
    if (bg) {
        el.style.backgroundImage = `url(${bg})`;
    }
});