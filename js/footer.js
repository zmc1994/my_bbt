define(function(require,exports,module){
	require('../less/footer.css');
	var _footer = require('../view/footer');
	var Index = {
		init:function(){
			$('#bbt-g-footer').html( _footer());
		}
	}
	module.exports = Index;
});