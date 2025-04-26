var preloader = function () {
    $("#preloader").fadeOut(600);
};
$(window).on('load', function () {
    preloader();
});


//Show hide menu search mobie
$("#btn-smenu").click(function () {
    $("#m-main-menu").addClass("active");
});
$("#btn-hmenu").click(function () {
    $("#m-main-menu").removeClass("active");
});

$("#btn-ssearch").click(function () {
    $("#m-search").toggleClass("active");
});

//Resize banner home
var hoverMenuTimeOut;
$("#nav-main>ul>li>a:not(.no-sub)").hover(function () {
    if (!$("#nav-main>ul>li>.has-sub:visible").length) {
        var target = $(this);
        hoverMenuTimeOut = setTimeout(function () {
            $(target).next(".has-sub").stop().fadeIn(900);
            $('.overlay-ct-main').stop().show(0);
        }, 200);
    } else {
        $("#nav-main>ul>li>.has-sub:visible").stop().hide(0);
        $(this).next(".has-sub").stop().show(0);
    }
}, function () {
    clearTimeout(hoverMenuTimeOut);
});
$("#h-main>.container").mouseleave(function () {
    $('.overlay-ct-main').stop().hide(0);
    $("#nav-main>ul>li>.has-sub").stop().fadeOut(0);
});


//Pop support
new WOW().init();

$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('#h-main').addClass('headerFixel');
    } else {
        $('#h-main').removeClass('headerFixel');
    }
});

//login - resgister popop
$(document).ready(function () {
    $('.pop-up-form').magnificPopup({
        type: 'inline',
        preloader: true,
        callbacks: {
            elementParse: function (item) {
                $('#m-main-menu.active').removeClass('active');
            }
        }
    });
});

$('.register-sucssec').click(function () {
    $('.title-tab-log-res a').removeClass('active');
    $('.title-tab-log-res a:last-child').addClass('active');
    $('.tabs-log-res').removeClass('active');
    $('#tabs-log-res-2').addClass('active');
    $('#pop-log-res').height('580px');

});

$('.title-tab-log-res a:nth-child(1)').click(function () {
    $('#pop-log-res').height('270px');
});
$('.title-tab-log-res a:nth-child(2)').click(function () {
    $('#pop-log-res').height('580px');
});


$('.title-tab-log-res a:first-child').addClass('active');
$('.tabs-log-res:nth-child(2)').addClass('active');

$(".title-tab-log-res a").click(function (event) {
    event.preventDefault();
    var val = $(this).attr("rel");
    $('.title-tab-log-res a').removeClass('active');
    $(this).closest('a').addClass('active');
    $(".tabs-log-res").removeClass('active');
    $("#tabs-log-res-" + val).addClass('active');
});

var windowsize = $(window).width();
$(window).resize(function () {
    var windowsize = $(window).width();
});
if (windowsize > 767) {
    $('.title-tab-log-res a:nth-child(1)').click(function () {
        $('#pop-log-res').height('270px');
    });
    $('.title-tab-log-res a:nth-child(2)').click(function () {
        $('#pop-log-res').height('580px');
    });
}
if (windowsize < 767) {
    $('.title-tab-log-res a:nth-child(1)').click(function () {
        $('#pop-log-res').height('370px');
    });
    $('.title-tab-log-res a:nth-child(2)').click(function () {
        $('#pop-log-res').height('680px');
    });
}



//Menu mobie
$(document).ready(function () {
    $('#m-menu li.has-sub>.a-open-down').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();

        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();

        }
    });

});

//owl slide home
$(document).ready(function () {
    $("#bn-main").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        autoPlay: 5000,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"],
        pagination: true,
    });
});

$(document).ready(function () {
    $(".banner-home-mobie").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        autoPlay: 5000,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"],
        pagination: true,
    });
});


//owl slide location
$(document).ready(function () {
    $(".banner-location").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        autoPlay: 5000,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"],
        pagination: true,
    });

    $(document).ajaxComplete(function () {
        $(".banner-location").trigger('owl.play', 3000);
    });
});

$(document).ready(function () {
    $(".slide-news").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        autoPlay: 5000,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"],
        pagination: true,
    });
});

$(document).ready(function () {
    var magnificPopupInterval;

    $('.banner-location').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }, callbacks: {
            open: function () {
                var content = $('.mfp-content');
                var arrowleft = $('.mfp-arrow-left');
                var arrowright = $('.mfp-arrow-right');
                $(arrowleft).css({ "left": $(content).offset().left });
                $(arrowright).css({ "right": $(content).offset().left });
                $(window).resize(function () {
                    $(arrowleft).css({ "left": $(content).offset().left });
                    $(arrowright).css({ "right": $(content).offset().left });
                });
                clearInterval(magnificPopupInterval);
                magnificPopupInterval=setInterval(function () {
                    $.magnificPopup.instance.next();
                }, 4000);
            },
            change: function () {
                if (this.isOpen) {
                    this.wrap.addClass('mfp-open');
                }
            }
        }
    });
    $(document).ajaxComplete(function () {
        if ($('.banner-location').length) {
            $('.banner-location').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                callbacks: {
                    open: function () {
                        var content = $('.mfp-content');
                        var arrowleft = $('.mfp-arrow-left');
                        var arrowright = $('.mfp-arrow-right');
                        $(arrowleft).css({ "left": $(content).offset().left });
                        $(arrowright).css({ "right": $(content).offset().left });
                        $(window).resize(function () {
                            $(arrowleft).css({ "left": $(content).offset().left });
                            $(arrowright).css({ "right": $(content).offset().left });
                        });
                        clearInterval(magnificPopupInterval);
                        magnificPopupInterval = setInterval(function () {
                            $.magnificPopup.instance.next();
                        }, 4000);
                    },
                    change: function () {
                        if (this.isOpen) {
                            this.wrap.addClass('mfp-open');
                        }
                    }
                }
            });
        }
    });
});

//owl slide product
$(".product-slide").owlCarousel({
    items: 5,
    itemsCustom: false,
    itemsDesktop: [1105, 5],
    itemsDesktopSmall: [1024, 4],
    itemsTablet: [768, 3],
    itemsTabletSmall: false,
    itemsMobile: [479, 2],
    navigation: true,
    autoPlay: 7000,
    stopOnHover: true,
    pagination: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    lazyLoad: true,
    transitionStyle: false,
    navigationText: ["<i class='fa fa-angle-left'></i>",
     "<i class='fa fa-angle-right'></i>"],
});
//owl slide news home
$(".slide-news-home").owlCarousel({
    items: 3,
    itemsCustom: false,
    itemsDesktop: [1105, 3],
    itemsDesktopSmall: [1024, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    navigation: true,
    autoPlay: 7000,
    margin: 10,
    stopOnHover: true,
    pagination: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    lazyLoad: true,
    transitionStyle: false,
    navigationText: ["<i class='fa fa-angle-left'></i>",
     "<i class='fa fa-angle-right'></i>"],
});

//Tabs abouts
$('.body-ct-tabs-news:first-child').addClass('active');
$('.title-news-home a:first-child').addClass('active');
$(".title-news-home a").click(function (event) {
    event.preventDefault();
    var val = $(this).attr("rel");
    $('.title-news-home a').removeClass('active');
    $(this).closest('a').addClass('active');
    $(".body-ct-tabs-news").removeClass('active');
    $("#body-ct-tabs-news-" + val).addClass('active');

});

//View-gallery Product

$('.colection-img-slide .item-slide:first-child').addClass('active');
$('.list-item-thub li:first-child').addClass('active');


//Select Langguage button
$("#select-lang button").click(function () {
    $("#select-lang").toggleClass("active");
});
$("#select-lang").hover(function () {
    $("body").unbind("click");
}, function () {
    $("body").click(function () {
        $("#select-lang").removeClass("active");
    });
});
$("#select-lang li:first-child").hover(function () {
    $("#select-lang").addClass("hover");
}, function () {
    $("#select-lang").removeClass("hover");
});

//Select language
$("#select-lang ul li a").click(function (e) {
    e.preventDefault();
    var dataLang = $(this).attr("data-lang"); //Tra ve data lang khi click chon
    var dataLangCurrent = $("#select-lang button").attr("data-lang");
    if (dataLang !== dataLangCurrent) {
        var linkImg = $(this).children("img").attr("src");
        var nameLang = $(this).text();
        $("#select-lang").removeClass("active");
        $("#select-lang button").attr("data-lang", dataLang).children("img").attr("src", linkImg).next("span").text(nameLang);
    }
});

//I-check

//Find Product
$(document).ready(function () {
    $(".body-fint").niceScroll({
        touchbehavior: true,
        cursorcolor: "#ec1f24",
        cursoropacitymax: 1,
        cursorwidth: 3,
        cursorborder: "0px",
        cursorborderradius: "0px",
        background: "#f8f8f8",
        autohidemode: false
    });
    $(".list-location").niceScroll({
        touchbehavior: true,
        cursorcolor: "#ec1f24",
        cursoropacitymax: 1,
        cursorwidth: 3,
        cursorborder: "0px",
        cursorborderradius: "0px",
        background: "#f8f8f8",
        autohidemode: false
    });
    $('.title-find').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    $('.button-find-mb').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

});

//lazy load


//Scroll Top
(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(200);
        } else {
            $('#scrollTop').fadeOut(200);
        }
        if ($(this).scrollTop() >= 200) {
            $('.video-bn-home').css({ "margin-top": "5%" });
        } else {
            $('.video-bn-home').removeAttr('style');
        }
    });
    $('#scrollTop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

})();

init_table_list_diamond();

//Lazy load
//document.querySelector('.register-sucssec').onclick = function () {
//    swal("Chúc mừng bạn!", "Đăng ký tài khoản Doji thành công!", "success");
//};
/*
document.querySelector('#top-cart-btn').onclick = function () {
    swal("Xin lỗi bạn!", "Chưa có sản phẩm nào trong giỏ hàng", "error");
};
*/
function initElevateZoom() {
    debugger;
    $('.zoomContainer').remove();
    if ($(window).width() >= 768) {
        $(".image-zoom > img").elevateZoom({
            borderSize: 1,
            borderColour: '#d21d2a',
            scrollZoom: true,
            cursor: 'crosshair',
            zoomType: "window",
            zoomWindowWidth: 488,
            zoomWindowHeight: 440,
            containLensZoom: true,
            easing: false,
            zoomWindowOffetx: 38,
            responsive: true,
            zoomWindowFadeIn: 1000,
            easingDuration: 2000,
            lensFadeIn: 1000
        });
        initZoomCaption();
    }
};

function initZoomCaption() {
    if ($('.caption-link').length && $('.caption-link').parent().is(":visible")) {
        $(document).on("mousemove", function (e) {
            var pageX = e.pageX;
            var pageY = e.pageY;
            var captionLink = $('.caption-link');
            var captionTop = $(captionLink).offset().top;
            var captionLeft = $(captionLink).offset().left;
            var captionWidth = $(captionLink).width();
            var captionHeight = $(captionLink).height();
            if (pageX >= captionLeft && pageX <= (captionLeft + captionWidth) && pageY >= captionTop && pageY <= (captionTop + captionHeight)) {
                $('.zoomContainer').hide(0);
            } else {
                $('.zoomContainer').show(0);
            }
        });
    }
}

var resizeWindow = function () {
    var windowsize = $(window).width();
    var a = $(window).height(),
        b = $("#nv-h").height();
    c = $("#h-main").height();
    $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css({
        height: a - (b + c)

    });

    if (windowsize > 1105) {
        if ($('.list-item-thub li:first-child a').hasClass('diamond') === false) {
            //$('.colection-img-slide .item-slide:first-child').addClass('active');
            initElevateZoom();
        }
    }
    if (windowsize > 1025) {

        $('.img-bn-main a').css("background-size", "cover");

    }
    if (windowsize < 1025) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '425px');

    }
    if (windowsize < 768) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '425px');
        $('.img-bn-main a').css("background-size", "auto 160%");
    }
    if (windowsize < 1281) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '525px');

    }
    if (windowsize < 580) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }
    if (windowsize < 640) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }

    if (windowsize < 481) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }
    if (windowsize < 360) {
        $("#bn-main ,#bn-main .item-bn-main .img-bn-main").css('height', '270px');
        $('.img-bn-main a').css("background-size", "auto 130%");
    }
};
function init_table_list_diamond() {
    // Change the selector if needed
    var $table = $('table.table-scroll'),
        $headCells = $table.find('thead tr:first').children(),
        colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function () {
        // Get the thead columns width array
        colWidth = $headCells.map(function () {
            return $(this).width();
        }).get();
        // Set the width of tbody columns
        $table.find('tbody tr:first').children().each(function (i, v) {
            if (i < $table.find('tbody tr:first').children().length - 1) {
                $(v).width(colWidth[i] + 2);
            }
        });
    }).resize(); // Trigger resize handler
}
$(document).ready(function () {
    // var windowsize = $(window).width();
    $(window).resize(function () {
        resizeWindow();
    });
    resizeWindow();
});

$(document).ready(function () {
    if ($('.body-item-thub .list-item-thub')) {
        var totalChild = $('.body-item-thub .list-item-thub').find('li').length;
        if (totalChild > 5) {
            $('.body-item-thub .fa').css({ "display": "block" });
        }
    }
    $('.body-item-thub>.fa').click(function (e) {
        e.stopPropagation();
        var container = $(this).parent();
        var slidePrev = 'slide-prev';
        var slideNext = 'slide-next';
        var slideContent = $(container).children('.list-item-thub');
        var slideCount = $(slideContent).find('li').length;
        var currentTop = parseInt($(slideContent).css('top'), 10);
        var minTop = (5 - slideCount) * 90 - 8;
        var active = $(slideContent).children('li.active');
        if ($(this).hasClass(slideNext)) {
            if (currentTop <= minTop) {
                $(slideContent).css({ "top": -8 });
            } else {
                $(slideContent).css({ "top": currentTop - 90 });
            }
        } else if ($(this).hasClass(slidePrev)) {
            if (currentTop >= -8) {
                $(slideContent).css({ "top": minTop });
            } else {
                $(slideContent).css({ "top": currentTop + 90 });
            }
        }
    });
    initMainSlide();
});

function initMainSlide() {
    if ($('#main-slide')) {
        var container = $('#main-slide');
        var listSlideWrapper = $(container).children('ul');
        resizeSlide();

        $(container).find('.slide-img').each(function () {
            var src = $(this).find('img').attr('src');
            var cssBackground = "url('" + src + "') 50% 50% / cover no-repeat padding-box";
            $(this).children('a').css({ "background": cssBackground });
        });

        $(container).children('ul').lightSlider({
            autoWidth: true,
            loop: true,
            slideMove: 1,
            item: 1,
            mode: 'fade',
            easing: 'linear',
            pause: 4000,
            speed: 1500,
            auto: true,
            onSliderLoad: function () {
                $(listSlideWrapper).removeClass('cS-hidden');
            }
        });
        $(window).resize(function () {
            resizeSlide();
        });
    }

    function resizeSlide() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        if (windowWidth >= 1310) {
            var slideHeight = windowHeight - 38 - 105;
            $(container).find('.slide-img').children('a').height(slideHeight);
        } else if (windowWidth < 736 && windowWidth >= 568) {
            slideHeight = windowHeight - 62;
            $(container).find('.slide-img').children('a').height(slideHeight);
        } else if (windowWidth >= 768 && windowWidth < 1310) {
            $(container).find('.slide-img').children('a').height(470);
        } else if (windowWidth >= 480 && windowWidth < 568) {
            $(container).find('.slide-img').children('a').height(270);
        }
        else if (windowWidth >= 320 && windowWidth < 480) {
            $(container).find('.slide-img').children('a').height(250);
        } else if (windowWidth < 320) {
            $(container).find('.slide-img').children('a').height(250);
        }
    }
}

$("img.lazy").lazyload();
$(document).ready(function() {
    initElevateZoom();
    if ($('.colection-img-slide')) {
        $('.colection-img-slide>.item-slide').addClass('hidden');
        $('.colection-img-slide>.item-slide:first-child').removeClass('hidden');
    }
    $(".list-item-thub li a").click(function(event) {
        event.preventDefault();
        var val = $(this).attr("rel");
        $('.list-item-thub li').removeClass('active');
        $(this).closest('li').addClass('active');
        $(".item-slide").removeClass('active');
        $(".item-slide").addClass('hidden');
        if ($(this).hasClass('diamond') === false) {
            initElevateZoom();
        } else {
            $('.zoomContainer').remove();
        }
        $("#bg-slide-item_" + val).addClass('active');
        $(".item-slide.active").removeClass('hidden');
    });
});