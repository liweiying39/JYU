/**
 * Created by 英子 on 2016/7/4.
 */
$(function(){
    /*分屏*/
    $(function(){
        $('.main').fullpage({
            sectionsColor: ['#A6E76C', '#4BBFC3', '#7BAABE', 'rgba(255, 141, 0, 0.51)','#4BBFC3','#1bbc9b'],
            'navigation': true,
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5','section6'],
            menu:".navbar-nav",
            verticalCentered:false,
        });
    });
    /*注册*/
    $('#sing-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            user: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '用户名不得为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 8,
                        message: '用户名不得小于2位大于8位'
                    }

                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不得为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱'
                    }
                }
            },

            password: {
                validators: {
                    notEmpty: {
                        message: '密码不得为空'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '密码不得为空'
                    },
                    identical: {
                        field: 'password',
                        message: '密码不一致'
                    }
                }
            },
            tel: {
                validators: {
                    notEmpty: {
                        message: '请输入11位数字的电话号码'
                    },
                    stringLength: {
                        length:11,
                        message: '用户名不得小于2位大于8位'
                    },
                    regexp: {
                        regexp: /[0-9]{11}/,
                        message: '请输入11位数字的电话号码'
                    }
                }
            }

        }
    });
/*登陆*/
    $('#log-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            login_user: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '用户名不得为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 8,
                        message: '用户名不得小于2位大于8位'
                    }

                }
            },
            login_password: {
                validators: {
                    notEmpty: {
                        message: '密码不得为空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '密码不一致'
                    }
                }
            },
        }
    });

    $("#btn-sub").click(function(){
        var flag ;   //判断验证是否通过
        var _this  = $(this)
        if($("#sing-form small:visible").length == 0){
            flag = true;
            $(".login_wait").show();
            $("btn-sub").css('disable','true');
            $.post('',{
                name: $("#user").val(),
                password: $("#Password1").val(),
                confirmPassword:$("#confirmPassword").val(),
                email:$("#email").val(),
                tel:$("#tel").val(),
                sex:$("#sex").val(),
                code:$("#code").val()
            },function(data){
                if(true) {      //注册成功
                    $(".login_wait").hide();
                    $('.login_succ').show();
                    $('#sing-form').fadeOut();
                }
            })

        }else{
            return false;
        }
    })

    /*判断用户名是否重复*/
    $('#user').blur(function(){
        if($(this).val() != ''){
            $.post('',{
                name: $(this).val()
            },function(data){
                if(false) {    //失败时
                    $('#user').next().show();
                }
            })
        }
    });

    /*判断邮箱是否重复*/
    $('#email').blur(function(){
        if($(this).val() != ''){
            $.post('',{
                email: $(this).val()
            },function(data){
                if(false) {    //失败时
                    $('#email').next().show();
                }
            })
        }
    });

    /*判断电话号码是否重复*/
    $('#tel').blur(function(){
        if($(this).val() != ''){
            $.post('',{
                tel: $(this).val()
            },function(data){
                if(false) {    //失败时
                    $('#tel').next().show();
                }
            })
        }
    });

    /*ajax登录*/
    $("#btn-log").click(function(){
        var flag ;   //判断验证是否通过
        var _this  = $(this)
        if($("#sing-form small:visible").length == 0){
            flag = true;
            $(".sign-wait").show();
            $("btn-sub").css('disable','true');
            $.ajax({
                url:'',
                method:'post',
                data:{
                    //$("#login_user").val(),
                    //$('#login_password').val(),
                    //$('#login_code').val()
                },
                success:function(){
                    $("#log-out").hide();
                    $('#nav-per').show();
                },
                error:function(){
                    $(".sign-wait").hide();
                    $('.sign-error').show();
                    $('#log-form').fadeOut();
                }
            })
        }else{
            return false;
        }
    })


})