/**
 * Created by Ӣ�� on 2016/7/4.
 */
$(function(){



    /*��������*/
    $('#per-face').hover(function(){
        $(this).children('.per-list').stop().delay('500').slideDown();
    },function(){
        $(this).children('.per-list').stop().slideUp();
    })
    /*�̶�������*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {

            $(".navbar").addClass("fixed-top-active");
            $('.navbar').css('background-color', 'rgba(166, 231, 108, 0.5)');
        } else {
            $(".navbar").removeClass("fixed-top-active");
            $('.navbar').css('background-color', '#A6E76C');
        }
    })

    $(".input-text").bind('keyup',textCheck);
    $(".cle").bind("click",cel);
    /*��֤���������볤��*/
    function textCheck(){
        var inputNum = $(".input-text");
        inputNum.each(function(i){
            var num = 200 - $(inputNum[i]).val().length;
            if(num > 0){
                $(this).next().find('.col-num').html(num);
            }else{
                $(this).next().find('.col-num').html(num).css('color','red');
               $(this).parents().find('.cle').show();
            }
        })
        //var num = 200- $(".input-text").val().length;
        //var cel = $(".cle");
        //if(num > 0){
        //    $(".col-num").html(num);
        //}else{
        //    $(".col-num").html(num).css('color','red');
        //    cel.css('display','block');
        //}
    }
    /*��β*/
    function cel(){
        $(".input-text").val($(".input-text").val().substring(0,200));
        $(".col-num").html(0);
    }

    /*����jquery����bootstrap��tooltip���*/
    $(function () { $("[data-toggle='tooltip']").tooltip(); });

    /*���������б�*/
    var resDown = false;  /*�ж����������б��Ƿ��Ѿ���*/
    var letDown = false;   /*�ж�����˽���б��Ƿ��Ѿ���*/
    var res = $('.res');
    var letter = $('.letter');
    for(var i = 0 ; i < res.length ; i++){
        $(res[i]).click(function(){
                if(!letDown){
                    if(!resDown ){

                        $(this).parent().find('.down-warp').slideDown(500);
                        resDown = true;

                    }else{
                        $(this).parent().find('.down-warp').slideUp(500);
                        resDown = false;
                    }
                } else{
                    $(this).parent().find('.down-letter').slideUp(500,function(){
                        $(this).parent().find('.down-warp').delay(100).slideDown(500)
                    });
                    letDown = false;
                    resDown = true;
                }
            }
        )
    }

    /*����˽�������*/
    for(var i = 0 ; i < letter.length ; i++){
        $(letter[i]).click(function(){
            if(!resDown){
                if(!letDown){
                    $(this).parent().find('.down-letter').slideDown(500);
                    letDown = true;
                }else{
                    $(this).parent().find('.down-letter').slideUp(500);
                    letDown = true;
                }
            }else{
                $(this).parent().find('.down-warp').slideUp(500,function(){
                    $(this).parent().find('.down-letter').delay(100).slideDown(500)
                });
                letDown = true;
                resDown = false;
            }
        })
    }

    /*����*/
    var share = $('.share');
    for(var i = 0 ; i < share.length ; i++){

    }

    /*����*/
    var supp = $('.supp');
    var suppAc = false;
    for(var i = 0 ; i < supp.length ; i++){
        $(supp[i]).click(function(){
            if(!suppAc){
                $(this).children().css('color','red');
                $(this).children().find('.sup-num').text(parseInt($(this).children().find('.sup-num').text())+1);
                suppAc = true;
            }else{
                $(this).children().css('color','#808080');
                $(this).children().find('.sup-num').text(parseInt($(this).children().find('.sup-num').text())-1);
                suppAc = false;
            }
        })
    }

    /*�����ظ������*/
    var poRes = $('.po-res');
    for(var i = 0 ; i < poRes.length ; i++){
        $(poRes[i]).bind('click',function(){
            $(this).parent().parent().parent().parent().next().slideToggle();
        })
    }
    /*ɾ��*/
    var poDel = $('.po-del');
    for(var i = 0 ; i < poDel.length ; i++){
        $(poDel[i]).bind('click',function(){
            $(this).parent().find('.del-sure').slideToggle();
        })
    }
    /*����*/
    var poSup = $('.po-su');
    var t = [];
    for(var i = 0 ; i < poSup.length ; i++){
        t[i] = false;
        $(poSup[i]).click(function(){
            if(!t[i]){
                $(this).css('color','red');
                t[i] = true;
            }else{
                $(this).css('color','black');
                t[i] = false;
            }
        })
    }
})
