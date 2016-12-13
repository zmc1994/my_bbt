define(function(require,exports,module){
    var _header = require('../view/header.js');
    var Index = {
        init:function(){
            $('#bbt-g-header').html( _header );
            require('../js/globle.js');
        }
    }
    module.exports = Index;
})