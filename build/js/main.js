$(document).ready(function () {
    //SLIDER PRIMARY
    $('.slider-i1').owlCarousel({
        items: 1,
        loop: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true

    })
    $('.slider-i4').owlCarousel({
        items: 4,
        margin:10,
        loop: true,
        dots:false,
        //autoplay: true,
        //autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }

    })
    $('.slider-i3').owlCarousel({
        items: 3,
        margin:15,
        loop: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:2,
                dots:true,
            },
            1000:{
                items:3,
                margin:15,
            }
        }

    })
    

    //MEGA-MENU
    $('.static-menu li a.mega-menu').click(function (e) {
        e.preventDefault();
        $('.static-menu li .sub-menu').toggleClass('show');
    });
    //== tabs-menu 
    $('.tabs-item li').click(function (e) {
        e.preventDefault();
        var local = $(this).index();
        $('.content-inner .content-item').removeClass('show-mega');
        $('.content-inner .content-item:nth-child(' + (local + 1) + ')').addClass('show-mega');
    });
    // RESET ACTION
    $('main').click(function (e) { 
        $('.static-menu li .sub-menu').removeClass('show');
    });
});