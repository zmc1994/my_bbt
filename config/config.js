define(function(require,exports,module){
    var footer = require('../js/footer'),
        header = require('../js/header');
    require('../less/globle.css');
    require('../less/header.css');
    var Index = {
        init:function(){
            require('../less/index.css');
            var index = require('../js/index.js');
            console.log('hello my bbt');
            index.init();
            footer.init();
            header.init();
        },
        investment:function(){
            require('../less/investment.css');
            var investment = require('../js/investment.js');
            investment.init();
            footer.init();
            header.init();
        },
        zreoSave:function(){
            require('../less/zreoSave.css');
            var zreoSave = require('../js/zreoSave.js');
            zreoSave.init();
            footer.init();
            header.init();
        },
        xszy:function(){
            require('../less/xszy.css');
            var xszy = require('../js/xszy.js');
            xszy.init();
            footer.init();
            header.init();
        },
        plan:function(){
            require('../less/plan.css');
            var plan = require('../js/plan.js');
            plan.init();
            footer.init();
            header.init();
        },
        security:function(){
            require('../less/security.css');
            var security = require('../js/security.js');
            security.init();
            footer.init();
            header.init();
        },
        login:function(){
            var _login = require('../js/login.js');
            _login.init();
        },
        reg:function(){
            var _reg = require('../js/reg.js');
            _reg.init();
        }
    }
    module.exports = Index;
})
