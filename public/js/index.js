/*$(document).bind('scroll', function (e) {
    $('section').each(function () {
        if (
            $(this).offset().top < window.pageYOffset + 10
            //begins before top
            && $(this).offset().top + $(this).height() > window.pageYOffset + 10
            //but ends in visible area
            //+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});*/