$(document).ready(function () {
    $(function () {
        $('._winfbk').hide();
        $(".trans-b .g-input input[name=payment_type]:checked").parents(".g-input ").children("._winfbk").show();
        $(".trans-b .g-input input[name=payment_type]").change(function () {
            $('._winfbk').slideUp();
            $(this).parents(".g-input").children("._winfbk").slideDown();
        });
    });
    $('.box-detail-pay ._inshp .g-input select').click(function () {
        $(this).parents('.box-detail-pay ._inshp .g-input').children('._inshp .g-input ._tgred').toggleClass('active');
    });
});