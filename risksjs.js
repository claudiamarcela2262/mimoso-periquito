alert(location.hostname);


$(function() {
    $(document).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('#logo').attr('src', 'https://www.risks.com.co/riskswp_web/wp-content/uploads/2016/06/Header-Light-Logo-2-130x50.png')
        }
        if ($(this).scrollTop() < 1) {
            $('#logo').attr('src', 'https://www.risks.com.co/images/logo_new2.png');
        }
    });
});