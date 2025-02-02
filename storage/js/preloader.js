window.onbeforeunload = function() {
    sessionStorage.setItem('loading', 'true');
}

if (sessionStorage.getItem('loading')) {
    const preloader = document.querySelector('.preloader');
    preloader.classList.remove('fade-out');
    
    window.addEventListener('load', () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
            sessionStorage.removeItem('loading');
        }, 7000);
    });
}
