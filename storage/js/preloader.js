window.onbeforeunload = function() {
    sessionStorage.setItem('loading', 'true');
}

if (sessionStorage.getItem('loading')) {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.display = 'none';
            sessionStorage.removeItem('loading');
        }, 7000);
    });
}
