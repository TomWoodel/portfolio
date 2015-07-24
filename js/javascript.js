// $(window).scroll(
//     {
//         previousTop: 80
//     }, 
//     function () {
//     var currentTop = $(window).scrollTop();
//     if (currentTop < this.previousTop) {
        
//         $(".header").show();
//     } else {
//         $(".header").hide();
//     }
//     this.previousTop = currentTop;
// });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {

    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Scroll to anchor ids

$(function() {

    // Find an A with an href beginning with '#', wait for the user to click on it
    $('a[href^="#"]').on('click', function(e) {

        // Don't go straight to that anchor id
        e.preventDefault();

        // Animate the page scroll
        $('html, body').animate(
            {
                // To the position of the top of the element with that id
                scrollTop: $(this.hash).offset().top,
            },

            // Over this many milliseconds
            2000
        );

    });

});


