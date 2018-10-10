$(document).ready(function () {
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      if (ns.includes("noPreventDefault")) {
        this.addEventListener("touchstart", handle, {
          passive: false
        });
      } else {
        this.addEventListener("touchstart", handle, {
          passive: true
        });
      }
    }
  };

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
  $('main').click(function () {
    $('.static-menu li .sub-menu').removeClass('show');
    
  });
  
  // ADD ATTR
  $('.owl-dot').attr("aria-hidden", "true");
  // SCROLL 
  $('.static-menu li a.mega-menu').click(function (e) {
    e.preventDefault();
    if ($('.sub-menu').hasClass('show')) {
      $('.content-inner .content-item:first-child').addClass('show-mega');
    } else {
      $('.content-inner .content-item:first-child').removeClass('show-mega');
    }
  });
  // BUTTON MENU MOBILE
  $('.btn-mobile').click(function (e) {
    e.preventDefault();
    $('.btn-mobile').toggleClass('active-mobi');
    $('.menu-mobile').toggleClass('acti_menu');
  });
  //event.preventDefault();
  $(window).scroll(function () {
    var local = $('body,html').scrollTop();
    if (local > 200) {
      $('.phone-desktop').addClass('show');
      $('.phone-mobile a').addClass('show');
      $('.register-desk').addClass('show-regist');
    } else {
      $('.phone-desktop').removeClass('show');
      $('.phone-mobile a').removeClass('show');
      $('.register-desk').removeClass('show-regist');

    }
    // reset class
    if (local > 100) {
      $('.sub-menu').removeClass('show');
      $('.menu-mobile').removeClass('acti_menu');
      $('.btn-mobile').removeClass('active-mobi');
      $('.modal').removeClass('open');
    }
    if ($(window).width() < 700) {
      if (local >= 400) {
        $('.box-control').addClass('fix-control');
      } else {
        $('.box-control').removeClass('fix-control');
      }
    }else {
      if (local >= 500) {
        $('.box-control').addClass('fix-control');
      } else {
        $('.box-control').removeClass('fix-control');
      }
    }   
  });
  // MODAL
  $('.close').on('click', function (e) {
    e.stopPropagation();
    var x = $(this).data("dismiss");
    $('.' + x + '').removeClass('open');
  });
  $("button").on("click", function () {
    var x = $(this).data("target");
    $('' + x + '').toggleClass('open');
  });
  // Click - SCROLL
  $('.box-control ul li a').on("click", function (e) {
    e.preventDefault();
    var x = $(this).data("target");
    var posi = $('' + x + '');
    $('body, html').animate({
      scrollTop: parseInt(posi.offset().top - 155)
    }, 300);
  }); 

});