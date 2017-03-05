/**
 * Created by 英子 on 2016/7/8.
 */
/*导航切换*/
$(function () {
    var aList = $('.tab_link');
    var cList = $('.mess-main');
    aList.each(function(n){
        $(this).click(function(){
            aList.removeClass('tab_actived');
            $(this).addClass('tab_actived');
            cList.fadeOut();
            $(cList[n]).fadeIn();
        })
    })

    /*删除功能*/

    /*我的私信*/
    var oneDel_Mess = $('#mess-wall .mess-one-del');
    oneDel_Mess.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#mess-wall').find('.mess_one').eq(n).remove();
        })
    })
    /*我的评论*/
    var oneDel_Argu = $('#argu-wall .mess-one-del');
    oneDel_Argu.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#argu-wall').find('.mess_one').eq(n).remove();
        })
    })
    /*我的树洞*/
    var oneDel_Hole = $('#hole-wall .mess-one-del');
    oneDel_Hole.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#hole-wall').find('.mess_one').eq(n).remove();
        })
    })

    /*置顶功能*/
    /*我的私信*/
    var oneTop_Mess = $('#mess-wall .mess-one-top');
    oneTop_Mess.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#mess-wall').prepend($(this).parents().find('#mess-wall').find('.mess_one').eq(n))
        })
    })
    /*我的评论*/
    var oneTop_Agru = $('#argu-wall .mess-one-top');
    oneTop_Agru.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#argu-wall').prepend($(this).parents().find('#argu-wall').find('.mess_one').eq(n))
        })
    })
    /*我的树洞*/
    var oneTop_Hole = $('#hole-wall .mess-one-top');
    oneTop_Hole.each(function(n){
        $(this).click(function(){
            $(this).parents().find('#hole-wall').find('.hole-form').after(($(this).parents().find('#hole-wall').find('.mess_one').eq(n)))
        })
    })

    /*修改个人资料*/
    /*日期选择器*/
    $( "#datepicker" ).datepicker({
    });
    /*编辑与保存的切换*/
// alert($('#base-btn'))
    var baseEdit = false;
    $('#base-btn').click(function(){
        if(!baseEdit){
            $('.base_inview').hide('fast');
            $('.base_edit').show('fast');
            $(this).text('保存');
            baseEdit = true;
        }else{
            $('.base_inview').show('fast');
            $('.base_edit').hide('fast');
            $(this).text('编辑');
            baseEdit = false;
        }
    })
    var touchEdit = false;
    $('#touch-btn').click(function(){
        if(!touchEdit){
            $('.touch-view').hide('fast');
            $('.touch-edit').show('fast');
            $(this).text('保存');
            touchEdit = true;
        }else{
            $('.touch-view').show('fast');
            $('.touch-edit').hide('fast');
            $(this).text('编辑');
            touchEdit = false;
        }
    })
    /*点击编辑弹出编辑框*/
    $('.base-msg .con a').bind('click',function(){

        $('.base_inview').hide('fast');
        $('.base_edit').show('fast');
    })
    $('.infoblock .con a ').bind('click',function(){
        $('.touch-view').hide('fast');
        $('.touch-edit').show('fast');
    })

    /*地址选择器*/
    addressInit('area','cmbProvince','cmbCity','cmbArea','西北地区', '北京', '市辖区', '东城区');
})
