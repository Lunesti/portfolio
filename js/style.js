// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
        $('.header').animate({ height: "100px" });
        $('.header').stop().animate({ height: "100px" });
        $('nav').animate({
            height: "100px"
        });

    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
        $('.header').stop().animate({ height: "100px" });
        $('.header').animate({ height: "150px" });

    }
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);

        $('#go-down').click(function() { // When arrow is clicked
            $('html, body').animate({
                scrollTop: $("#profil").offset().top
            }, 1500);
        });
    });

    // A $( document ).ready() block.


    // Fade in the arrow
    if ($('#go-down').scrollTop() >= 1) {
        $(this).fadeOut(200);
    }


});