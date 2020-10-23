$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});



$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
});



$(function () {
    $("#ppl-reivew-btm").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});







document.querySelectorAll('.accordion--button').forEach(button => {
    button.addEventListener('click', ()=> {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('accordion--button--active');
        
        if(button.classList.contains('accordion--button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else{
            accordionContent.style.maxHeight = 0;
        }
    })
})



document.querySelectorAll('.accordion--button-1').forEach(button => {
    button.addEventListener('click', ()=> {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('accordion--button-1--active');
        
        if(button.classList.contains('accordion--button-1--active')){
            accordionContent.style.maxHeight = 0;
        }
        else{
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';;
        }
    })
})









$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");


            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/applab/logo%20menu.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});




$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});



$(function () {

    // Show mobile nav
    $("#mobile-menu-btn").click(function () {
        $("#mobile-menu").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-menu a").click(function () {
        $("#mobile-menu").css("height", "0%");
    });

});




$(function () {
    new WOW().init();
});

