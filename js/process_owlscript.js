$(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            700: {items: 2},
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 25
            },
            1400: {
                items: 4,
                nav: true,
                loop: false,
                margin: 50
            }
        }
    });
});