define(function(require, exports, module) {
    require('banner/bannercss.css');
    var _htmlFn = require('banner/slide');

    var SlideImg = function(option) {
        option = option || {};
        $.extend(true, this.default, option);
        this.imgs = this.default.imgs;
        this.gap = this.default.gap;
        this.wraper = this.default.wraper;
        this.wraper.append(_htmlFn({ imgs: this.imgs }));
        this.hovers = this.default.hovers;
        this.init();
    }
    SlideImg.prototype.default = {
        imgs: [],
        gap: 2500,
        wraper: $('body'),
        hovers:false
    }
    SlideImg.prototype.init = function() {
        var me = this;
        var $imgs = $('.showImg a', me.wraper);
        var $pointer = $('.showImg .slidePointer span', me.wraper);
        var $directive = $('.showImg span.pointer');
        var curIndex = me.imgs.length-1;
        var inter = setInterval(function() {
            runLoop();
        }, me.gap);
        function runLoop(){
            curIndex++;
            if (curIndex == $imgs.length) {
                curIndex = 0;
            }
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('a').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
        }
        $pointer.on('mouseenter', function(e) {
            clearInterval(inter);
            var _index = $pointer.index($(e.target));
            curIndex = _index;
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('a').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
        }).on('mouseleave',function(){
            inter = setInterval(function() {
                runLoop();
            }, me.gap);
        });
        $directive.on('click', function(e) {
            clearInterval(inter);
            if(  $directive.index($(e.target)) == 1 ){
                runLoop();
            }else{
                curIndex--;
                if (curIndex == -1 ) {
                    curIndex = $imgs.length - 1;
                }
                $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('a').fadeOut();
                $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
            }
            inter = setInterval(function() {
                runLoop();
            }, me.gap);
        });
        if( me.hovers == true ){
            $imgs.on('mouseenter',function(){
                clearInterval(inter);
            }).on('mouseleave',function(){
                inter = setInterval(function() {
                    runLoop();
                }, me.gap);
            })
        }

   }
   module.exports = SlideImg;
})
