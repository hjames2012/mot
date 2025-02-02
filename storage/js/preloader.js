document.addEventListener('DOMContentLoaded', handlePreloader);
window.addEventListener('load', handlePreloader);

function handlePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 7000);
    }
}
