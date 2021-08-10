// ===== Scroll to Top ==== 
$(window).scroll(function() {
    let height_ = "100px";
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow

        $('nav').animate({
            height: "100px"
        });

    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
        height_ = "150px";

    }
    $('.header').stop().animate({ "height": height_ }, 100);

    // A $( document ).ready() block.

});

$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);

});