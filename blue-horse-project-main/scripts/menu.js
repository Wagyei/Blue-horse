$(document).ready(function() {
    $('#menu-button-1').on('click', function() {
        $('.menu-image').addClass('hidden');
        $('#image1').removeClass('hidden');

    });

    $('#menu-button-2').on('click', function() {
        $('.menu-image').addClass('hidden');
        $('#image2').removeClass('hidden');
    });

    $('#menu-button-3').on('click', function() {
        $('.menu-image').addClass('hidden');
        $('#image3').removeClass('hidden');
    });

    // remove fixed container for previous menus when using smaller devices
    $(window).resize(function() {
        if ($(document).width() < 1000) {
            $('.fixed-size-container').removeClass('fixed-size-container');
        }
    });
});
