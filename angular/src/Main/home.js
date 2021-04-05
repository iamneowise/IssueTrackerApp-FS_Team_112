$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 3000;
    function hidePreloader() {
        var preloader = $('#loader-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

