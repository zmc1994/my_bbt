define(function(require, exports, module) {
    var zreoSave = require('../view/zreoSave.js');
    var Index = {
        init: function() {
            var me = this;
            $('#test4').html(zreoSave);
            $.ajax({
                type: "GET",
                url: "../json/zreoSave.json",
                dataType: "json",
                success: function(data) {
                    $("#name1").text(data.list[0].name);
                    $("#value1").text(data.list[0].value);
                    $('#name2').text(data.list[1].name);
                    $('#value2').text(data.list[1].value);
                    $('#name3').text(data.list[2].name);
                    $('#value3').text(data.list[2].value);
                    $('#name4').text(data.list[3].name);
                    $('#value4').text(data.list[3].value);
                }
            });

            $.ajax({
                type: "GET",
                url: "../json/records.json",
                dataType: "json",
                success: function(data) {
                    $('#money').text(data.money);
                    $('#people').text(data.people);
                    $('#info').text(data.info)
                    me.event();

                }
            });
            var $li = $('.nav li');
            $li.on('mouseenter',function(){
                var index = $(this).index();
                $('.nav div.news').eq(index).addClass('active').siblings().
                removeClass('active');
                $('.nav ul li').eq(index).addClass('active').siblings()
                .removeClass('active');     
            });

        },
        event:function(){
            $('li.noBrather').eq(1).addClass('active').siblings('.noBrather').removeClass('active');
        }
    }

    module.exports = Index;
});
