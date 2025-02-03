window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.remove();
    }, 2000);
});
