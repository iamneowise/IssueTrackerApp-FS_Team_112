$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 3000;
    function hidePreloader() {
        var preloader = $('#loader-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});


document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s-signup')
}
);