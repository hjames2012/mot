function showPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'flex';
        preloader.classList.remove('fade-out');
    }
}

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 7000);
    }
}

// Show preloader when starting to load
window.addEventListener('beforeunload', showPreloader);

// Hide preloader when everything is loaded
window.addEventListener('load', hidePreloader);
