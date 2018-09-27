$(document).ready(function () {


$('.clients-carousel').owlCarousel({
    loop:true,
    margin:80,
    responsiveClass:true,
    nav: false,
    responsive:{
        0:{
            items:2,
            margin:30
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

  $('.js-news-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots: false,
    margin:25,
    nav: true,
    responsive:{
        0:{
            items:1,
            dots: true,
            nav: false
        },
        700:{
            items:2,
            dots: true,
            nav: false
        },
        1000:{
            items:3
        }
    }
});

$('.comments-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots: false,
    nav: true,
    items:1,
    responsive:{
        0:{
            dots: true,
            nav: false
        },
        700:{
            dots: true,
            nav: false
        }
    }
});


$('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
    $('.navbar-collapse').toggleClass('open-navbar');
    $('.page-block').toggleClass('opacity');
    $('.logo-mobile-name').toggleClass('opacity');
    $('.logo-mobile-name').toggleClass('d-none');
    $('.logo-mobile').toggleClass('d-block');
    $('.logo-desktop-dark').toggleClass('d-none');
    $('html').toggleClass('overflow');
});

});



$(document).scroll(function () {
    var offsetTopBody = $('#header').offset().top;
    if (offsetTopBody > 1) {
        $('#header').addClass('fixed');
    }
    else {
        $('#header').removeClass('fixed');
    }
});

$(function(){

     var $window = $(window);      //Window object

     var scrollTime = 0.4;         //Scroll time
     var scrollDistance = 250;     //Distance. Use smaller value for shorter scroll and greater value for longer scroll

     $window.on("mousewheel DOMMouseScroll", function(event){

         event.preventDefault();

         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
         var scrollTop = $window.scrollTop();
         var finalScroll = scrollTop - parseInt(delta*scrollDistance);

         TweenMax.to($window, scrollTime, {
             scrollTo : { y: finalScroll, autoKill:true },
             ease: Power1.easeOut,   //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
             autoKill: true,
             overwrite: 50
         });

     });

 });


$('a.anchor[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(window).on('scroll resize', function() {
    var SectionMainTop  = $(".js-offset-top").offset().top;
    var scroll = $(window).scrollTop();
    var docHeight = $(document).height();
    var scrollPercent = (scroll) / (docHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);
    if(scroll >= SectionMainTop){

        $('.js-animation-parallax').css('background-position', '50% -'+scrollPercentRounded*5+'px');

    }
});
$(window).trigger('scroll');