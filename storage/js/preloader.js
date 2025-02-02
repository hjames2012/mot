document.addEventListener('readystatechange', (event) => {
    const preloader = document.querySelector('.preloader');
    
    if (event.target.readyState === 'interactive') {
        preloader.style.display = 'flex';
        preloader.classList.remove('fade-out');
    }
    
    if (event.target.readyState === 'complete') {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 7000);
    }
});
