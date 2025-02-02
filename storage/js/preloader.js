window.onbeforeunload = function() {
    sessionStorage.setItem('loader', 'true');
}

if (sessionStorage.getItem('loader')) {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            sessionStorage.removeItem('loader');
        }, 700);
    });
}