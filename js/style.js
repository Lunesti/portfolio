// ===== Scroll to Top ==== 

$(window).scroll(function() {

    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
        $('nav').stop().animate({ height: "50px" }); // ici j'ai mis 50px, c'est bien suffisant


    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
        $('nav').stop().animate({ height: "150px" });
        if ($(window).width() <= 768) {
            $('nav').stop().animate({ height: "50px" });
        }

    }

});
// A $( document ).ready() block.


$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);

});