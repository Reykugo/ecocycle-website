function scrollNav() {
    $('.nav div').click(function () {
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();

