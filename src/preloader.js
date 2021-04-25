window.onload = () => {
    let preloader = document.querySelector('#p_prldr');
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.zIndex = -5;
        document.querySelector('.start').style.display = 'block';
    }, 1000);

};
