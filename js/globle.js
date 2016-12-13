define(function(require, exports, module) {
    var Index = {
        init: function() {
            setInterval(function() {
                if ($(document).scrollTop() >= 30) {
                    $('#header').removeClass('rel').addClass('fix');
                    $('#topHeader').addClass('active');
                    $('ul.manageMoney').addClass('active');
                } else {
                    $('#header').removeClass('fix').addClass('rel');
                    $('#topHeader').removeClass('active');
                    $('ul.manageMoney').removeClass('active');
                }
            }, 1);
            $('ul.manageMoney').stop(true, false).slideUp(1);
            $('li.drags').on('mouseenter', function() {
                $('em', $(this)).html('&#xe694;');
                $('ul.manageMoney').stop(true, false).slideDown(600);
            }).on('mouseleave', function() {
                $('em', $(this)).html('&#xe652;');
                $('ul.manageMoney').stop(true, false).slideUp(600);
            });

            var $endToTop = $('.toTop');
            $(window).scroll(function() {
                if ($(window).scrollTop() > 100) {
                    $endToTop.show();
                } else {
                    $endToTop.hide();
                }
            });
            $endToTop.on('click', function() {
                if ($('html').scrollTop()) {
                    $('html').animate({ scrollTop: 0 }, 1000);
                } else {
                    $('body').animate({ scrollTop: 0 }, 1000);
                }
            });
        }
    }
    module.exports = Index.init();
})
