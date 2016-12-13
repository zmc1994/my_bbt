define(function(require,exports,module){
	var _invertment = require('../view/investment.js');
	var Index = {
		init:function(){
			var datas = null;
			var detail = null;
			this.getData(datas,detail);
		},
		getData:function(datas,detail){
			var me = this;
			$.ajax({
				type:'GET',
				url:'json/investmentTotal.json',
				dataType:'json',
				success:function(data){
					datas = data;
					pageOn(datas,detail)
				}
			});
			$.ajax({
				type:'GET',
				url:'json/investmentDetail.json',
				dataType:'json',
				success:function(res){
					detail = res;
					pageOn(datas,detail)
				}
			});
			function pageOn(datas,detail){
				if( datas && detail ){
					$('#test').html( _invertment({
						a:datas.list1,
						b:datas.list2,
						c:datas.list3,
						list:detail
					}) );
					me.event();
					me.filter();
				}
			}
		},
		event:function(){
			var val = $('.detail-center .li2 .one');
			for(var i = 0; i < val.length; i++ ){
				if(val.eq(i).html() == '1个月'){
					$('.hotbag').eq(i).hide();
					$('.hotbag1').eq(i).hide();
				}
			}
			$('li.noBrather').eq(1).addClass('active').siblings('.noBrather').removeClass('active');
		},
		filter:function(){
			var $pay = $('.paybtn');
			var $btn1=$('.total-right .right1 li');
			var $btn2=$('.total-right .right2 li');
			var $btn3=$('.total-right .right3 li');
			var $detail = $('.investment-detail');
			var $percent = $('.detail-center .li1 .p1');
			var $month = $('.detail-center .li2 .one');
			$btn1.eq(0).addClass('active');
			$btn2.eq(0).addClass('active');
			$btn3.eq(0).addClass('active');
			$btn1.on('click',function(e){
				$(this).addClass('active').siblings().removeClass('active');
				for( var i = 0; i < $pay.length; i++ ){
					if( $pay.eq(i).html() == $(this).html() ){
						$detail.eq(i).css({"display":"block"});
					}else if($(this).html() == '全部'){
						$detail.eq(i).css({"display":"block"});
					}else{
						$detail.eq(i).css({"display":"none"});
					}
				}
			});
			$btn2.on('click',function(e){
				$(this).addClass('active').siblings().removeClass('active');
				for( var j = 0; j < $percent.length; j++ ){
					if( $percent.eq(j).html() == $(this).html() ){
						$detail.eq(j).css({"display":"block"});
					}else if($(this).html() == '全部'){
						$detail.eq(j).css({"display":"block"});
					}else{
						$detail.eq(j).css({"display":"none"});
					}
				}
			});
			$btn3.on('click',function(e){
				$(this).addClass('active').siblings().removeClass('active');
				for( var f = 0; f < $month.length; f++ ){
					if( $month.eq(f).html() == $(this).html() ){
						$detail.eq(f).css({"display":"block"});
					}else if($(this).html() == '全部'){
						$detail.eq(f).css({"display":"block"});
					}else{
						$detail.eq(f).css({"display":"none"});
					}
				}
			});

		}
	}
    module.exports = Index;
});