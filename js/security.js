define(function(require,exports,module){
	var security = require('../view/security.js');
	var Index = {
		init:function(){
			var me = this;
			$('#test1').html( security );
			$(function(){
                me.event();
            });
		},
		event:function(){
			$('li.noBrather').eq(2).addClass('active').siblings('.noBrather').removeClass('active');
		}
	}
    module.exports = Index;
})