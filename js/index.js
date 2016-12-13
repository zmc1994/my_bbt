define(function(require, exports, module) {
    var _index = require('../view/index.js'),
        SlideImg = require('banner/banner.js');
    $('li.noBrather').eq(0).addClass('active').siblings('.noBrather').removeClass('active');
    var Index = {
        init: function() {
            var bannerInfo = null;
            var indexNav = null;
            var annaunce = null;
            this.getData(bannerInfo,indexNav,annaunce);
        },
        event: function() {
            var me = this;
            $.ajax({
                Method: 'POST',
                url: 'json/banner.json',
                dataType: 'json',
                success: function(res) {
                    new SlideImg({
                        wraper: $('#runloop'),
                        imgs: res,
                        gap: 2000,
                        hovers: false
                    });
                }
            });
        },
        getData:function(bannerInfo,indexNav,annaunce){
            var me = this;
            $.ajax({
                type:'GET',
                url:'json/bannerInfo.json',
                dataType:'json',
                success:function(res){
                    bannerInfo = res;
                    pageOn(bannerInfo,indexNav,annaunce);
                }
            });
            $.ajax({
                type:'GET',
                url:'json/indexNav.json',
                dataType:'json',
                success:function(res){
                    indexNav = res;
                    pageOn(bannerInfo,indexNav,annaunce);
                }
            });
            $.ajax({
                Method:'POST',
                url:'json/indexAnnounce.json',
                dataType:'json',
                success: function(res){
                    annaunce = res;
                    pageOn(bannerInfo,indexNav,annaunce);
                }
            });
            var _timer = setInterval(function(){
                if( $(window).scrollTop() >= 40 ){
                    $.ajax({
                        type:'GET',
                        url:'json/indexDetail.json',
                        dataType:'json',
                        success:function(res){
                            me.content(res);
                        }
                    });
                    clearInterval( _timer );
                }
            },1);
            function pageOn(bannerInfo,indexNav,annaunce){
                if( bannerInfo && indexNav && annaunce ){
                    $('#bbt-p-index').html( _index({
                        bannerInfo:bannerInfo,
                        indexNav:indexNav,
                        annaunce:annaunce
                    }));
                    me.event();
                }
            }
        },
        content:function(res){
            var me = this;
            var _indexDetail = require('../view/indexDetail.js'),
                _adNews = require('../view/indexAdNews.js'),
                _cooper = require('../view/indexCooper.js');
            $('#indexDetail').html( _indexDetail({
                list1:res.list1,
                list2:res.list2,
                list3:res.list3
            }) );
            $('#adNews').html( _adNews );
            $('#cooper').html( _cooper );
            me.event1();
        },
        event: function() {
            var me = this,
                count = 0,
                $annaunce = $('div.annaunce'),
                length = $('a',$annaunce).length;
            $.ajax({
                Method: 'POST',
                url: 'json/banner.json',
                dataType: 'json',
                success: function(res) {
                    new SlideImg({
                        wraper: $('#runloop'),
                        imgs: res,
                        gap: 2000,
                        hovers: false
                    });
                }
            });
            $('div.rotateItem').on('mouseenter',function(){
                $(this).children().removeClass('active2').addClass('active1');
            }).on('mouseleave',function(){
                $(this).children().removeClass('active1').addClass('active2');
            })
            setInterval(function(){
                count++;
                count == length ? count = 0 : '';
                $annaunce.animate({"marginTop":-42*count+'px'});
            },3000);
        },
        event1:function(){
            var $detail = $('#indexDetail'),
                $left = $('.list3 .left',$detail),
                $middle = $('.list3 .middle',$detail),
                $right = $('.list3 .right',$detail),
                $title = $('.indexAdNews-right .title .left span'),
                $main = $('.indexAdNews-right .main div'),
                $users = $('ul#userInfo'),
                $num = $('#num'),
                $totateItem = $('img.img2',$left),
                $lis1 = $('.lis1',$detail),
                $imgs1 = $('div.img img.imgs1',$lis1),
                $imgs2 = $('div.img img.imgs2',$lis1),
                innerTime = null,
                innerTime2 = null;
                $title.on('click',function(e){
                    $(this).addClass('active').siblings().removeClass('active');
                    $main.eq($(this).index()).show().siblings().hide();
                });
                $left.on('mouseenter',function(){
                    var count = 0;
                    innerTime = setInterval(function(){
                        count ++;
                        count == 10 ? clearInterval(innerTime) : '';
                        $num.html( count+'%' );
                    },500);
                    $totateItem.addClass('active');
                }).on('mouseleave',function(){
                    clearInterval( innerTime );
                    $totateItem.removeClass('active');
                    $num.html( '0%' );
                });
                $lis1.on('mouseenter',function(){
                    var count = 0;
                    innerTime2 = setInterval(function(){
                        count++;
                        if( count < 4 ){
                            $imgs2.eq(count).addClass('active').siblings().removeClass('active');
                        }else{
                            clearInterval(innerTime2);
                            $imgs1.eq(1).addClass('active').siblings().removeClass('active');
                            $imgs2.eq(4).addClass('active').siblings().removeClass('active');
                        }
                    },500);
                }).on('mouseleave',function(){
                    clearInterval(innerTime2);
                    $imgs2.eq(0).addClass('active').siblings().removeClass('active');
                    $imgs1.eq(0).addClass('active').siblings().removeClass('active');
                });



           


        }
        
    }

    module.exports = Index;
})
