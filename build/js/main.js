$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= 575.98) {
            $('.inner-static').addClass('main-scroller');
        } else {
            $('.inner-static').removeClass('main-scroller');
        }
    });
    //SLIDER PRIMARY
    $('.slider-i1').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true

    })
    $('.slider-i4').owlCarousel({
        items: 4,
        margin: 8,
        loop: true,
        //autoplay: true,
        //autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
            },
            600: {
                items: 3,
                nav: false,
                dots: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            }
        }

    })
    $('.slider-i3').owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            600: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
                margin: 15,
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
        //$('.content-item').removeClass('show-mega');
    });
    
    // ADD ATTR
    $('.owl-dot').attr("aria-hidden", "true");
    // SCROLL 
    $(window).scroll(function () { 
     
        var local = $('body,html').scrollTop();
        //console.log(local);
        // SHOW BUTTON MOBILE
        if(local > 1000){
            $('.phone-desktop').addClass('show');
            $('.phone-mobile a').addClass('show');
        }else {
            $('.phone-desktop').removeClass('show');
            $('.phone-mobile a').removeClass('show');
        }
       

        // reset class
        if(local > 100) {
            $('.sub-menu').removeClass('show');
        }
        // SHOW ALL CONTENT
        if(local > 100 ) {
            $('.bl-sale').removeClass('d-none');
            $('.bl-info').removeClass('d-none');
            $('.bl-news').removeClass('d-none');
            $('footer').removeClass('d-none');
        }
       
    });
    $('.static-menu li a.mega-menu').click(function (e) { 
        e.preventDefault();
        if($('.sub-menu').hasClass('show')) {
            $('.content-inner .content-item:first-child').addClass('show-mega');
        } 
        else {
            $('.content-inner .content-item:first-child').removeClass('show-mega');
        }
    }); 
     // BUTTON MENU MOBILE
     $('.btn-mobile').click(function (e) { 
         e.preventDefault();
         $('.btn-mobile').toggleClass('active-mobi');
         $('.menu-mobile').toggleClass('acti_menu');      
     });
});