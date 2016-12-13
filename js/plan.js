define(function(require, exports, module) {
    var plan = require('../view/plan.js');
    var plan2 = require('../view/plan2.js');
    var Index = {
        init: function() {
            this.render();
        },
        render: function() {
            $('#test2').html(plan);
            var that = this;
            $.ajax({
                url: '../json/plan.json',
                type: "get",
                success: function(res) {
                    that.res = res;
                    $('.table').html(plan2({ obj: res[0] }));
                    that.events();
                }
            })
        },
        events: function() {
            var that = this;
            $('li.noBrather').eq(1).addClass('active').siblings('.noBrather').removeClass('active');
            $('.plan-footer .top span').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                $('.plan-footer .pager .box .step').eq(0).addClass('change').siblings('.step').removeClass('change');
                var Index = $(this).index();
                $('.table').html(plan2({ obj: that.res[Index] }));
            });
            $('.plan-footer .pager .box .step').click(function() {
                $(this).addClass('change').siblings('.step').removeClass('change');
            });
        }
    }
    module.exports = Index;
});
