define(function(require, exports, module) {
    var xszy = require('../view/xszy.js');
    $('#xszy').html(xszy);
    var Index = {
        init: function() {
            var me = this;
            
            $(window).scroll(function() {
                if ($(window).scrollTop() > '550') {
                    $('.b2c-listbox').css({ 'top': '0px' });
                }
                if ($(window).scrollTop() > '1000') {
                    $('.b3c-listbox').css({ 'top': '0px' });
                }
                if ($(window).scrollTop() > '1560') {                 
                    $('.touzi2').css({ 'left': '244px' }).prev().css({ 'left': '160px' });
                    $('.touzi3').css({ 'left': '488px' }).prev().css({ 'left': '404px' });
                    $('.touzi4').css({ 'left': '732px' }).prev().css({ 'left': '648px' });
                    $('.touzi5').css({ 'left': '976px' }).prev().css({ 'left': '892px' });
                }
            });
            $.ajax({
                url:"../json/xszy.json",
                type:"get",
                success: function(res) {
                    var xszy2=require('../view/xszy2.js');
                    $("#bbtdashiji").html(xszy2({d:res}));

                }
            })
            $(function(){
                me.event();
            });
        },
        event: function(){
            $('li.noBrather').eq(3).addClass('active').siblings('.noBrather').removeClass('active');
        }
    }
    module.exports = Index;
});
