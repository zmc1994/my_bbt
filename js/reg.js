define(function(require,exports,module){
    var reg = require('../view/reg.js');
    var Index = {
        init: function(){
            $('#reg').html( reg );
            //用户名验证
            $('.login-right #form_register .form_username').blur(function(){
                var $val = $(this).val();
                if(!(/^(1[^012][0-9]{9})$/.test($val)) && $val!=""){
                  $('.login-right #form_register .user').show();
                  $(this).focus();
            }else{
                $('.login-right #form_register .user').hide();
            }
            })
            //密码验证
            $('.login-right #form_register .form_password').blur(function(){
                var $val = $(this).val();
                if(!($val.length>=6 && $val.length<=16) && $val!=""){
                      $('.login-right #form_register .password').show();
                      $(this).focus();
                }else{
                    $('.login-right #form_register .password').hide();
                }
            })
            // 验证码图片地址数组
            var arrUrl = ["url('../images/captcha1.png')","url('../images/captcha2.png')","url('../images/captcha3.png')","url('../images/captcha4.png')","url('../images/captcha5.png')","url('../images/captcha6.png')","url('../images/captcha7.png')","url('../images/captcha8.png')","url('../images/captcha9.png')","url('../images/captcha10.png')"];
              //定义一个全局变量来传递随机数
             var a = 0;
               //动态验证码验证
            $('.login-right #form_register .yanzhengma .form_valid').blur(function(){
                var arryCount = ['fdxmh','62dfa','knccr','k666p','dw265','rwm2r','g55b4','2mx5h','4y3p6','7cawa'];
                var currCode = arryCount[a];
                var $val = $(this).val();
                if(!($val==currCode) && $val!=""){
                      $('.login-right #form_register .valid').show();
                      $(this).focus();
                }else{
                    $('.login-right #form_register .valid').hide();
                }
            })
           //点击生成动态验证码
            $('.yanzhengma img').click(function Mathradom(){
                var num = Math.floor(Math.random()*10);
                // $('.yanzhengma div').css('background-image');
                $('.yanzhengma div').css('background-image',arrUrl[num]);
                a = num;
            });



            $('.huoqu-box .btn').click(function(){
                $(this).css({"background-color":"#8B8989"})
                    var i = 30;
                    $('.huoqu-box .btn').attr('disabled',true);
                    var str = "";
                    for(var k =0;k<6;k++){
                        var randomCode = Math.floor(Math.random()*10);
                        str+=randomCode;
                    }
                    $('.huoqu-box .code').val(str);
                    alert("获取验证码成功")
                 var timer = setInterval(function(){
                    if(i>=0){
                        $('.huoqu-box .btn').val(i+"s后重新获取");
                           i--;
                    }else{
                        $('.huoqu-box .btn').css({"background-color":"#2b71d2"});
                        $('.huoqu-box .btn').val('获取验证码');
                        clearInterval(timer);
                        $('.huoqu-box .btn').removeAttr('disabled');
                    }
                },1000)
            })

             $('.login-right form a.reg-button').click(function(){
                    console.log('aa')
                    if($('.login-right #form_register .form_username').val() && $('.login-right #form_register .form_password').val() && $('.login-right #form_register .yanzhengma .form_valid').val()&& $('.huoqu-box .code').val() && $('.login-right #form_register .checkbox').is(':checked')==true){
                        alert('注册成功');
                        $('a.reg-button').attr({"href":"login.html"});
                    }else{
                        $('.login-right #form_register .form').show();
                        $('.login-right #form_register input').focus(function(){
                              $('.login-right #form_register .form').hide();
                        })

                    };
                 })

           //登录页面表单验证
            $('.signIn #form_register .reg-button').click(function(){
                var $val1 = $('.signIn #form_register .form_username').val();
                var $val2 = $('.signIn #form_register .form_password').val();
            
                if(($val1=="" && $val2=="") ||　$val1==""){
                    $('#form_register .passworderror').hide();
                      $('#form_register .usererror').show();
                }else{
                    if($val2==""){
                        $('#form_register .usererror').hide();
                        $('#form_register .passworderror').show();
                    }else{
                        $('#form_register .usererror').hide();
                        $('#form_register .passworderror').hide();
                        alert("登陆成功");
                    }
                }
            })

            $('.reg-iconslogin').click(function(){
                $('.login-right').css({"top":"-530px","opacity":"0"});
                $('.login-right').removeClass('signIn-animation');
                $('.signIn').addClass('login-animation');
            })
            $('.reg-iconssiginIn').click(function(){
                $('.signIn').css({"top":"-495px","opacity":"0"});
                $('.signIn').removeClass('login-animation');
                $('.login-right').addClass('signIn-animation');
            })
        }
    }
    module.exports = Index;
})