/* Enovo Theme Scripts */

(function ($) {
    "use strict";




    /*=========================================================================
        Sticky Header
    =========================================================================*/
    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }

        });
    });

    /*=========================================================================
        Mobile Menu
    =========================================================================*/


    /*=========================================================================
        ScreenShot Carousel
    =========================================================================*/

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    var testiSelector = $('#testimonial_carousel');
    testiSelector.owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 500,
        margin: 20,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });

    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });


})(jQuery);