new WOW().init();

jQuery(document).ready(function() {
    jQuery('.map-canvas').addClass('scrolloff');
    jQuery('.my-map').on('click', function() {
        jQuery('.map-canvas').removeClass('scrolloff');
    });
    jQuery('.map-canvas').mouseleave(function() {
        jQuery('.map-canvas').addClass('scrolloff');
    });
});