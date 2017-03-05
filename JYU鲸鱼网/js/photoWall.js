/**
 * Created by 英子 on 2016/7/8.
 */
/**
 * Created by 英子 on 2016/6/29.
 */
window.onload = function(){

    var ImgSrc ={data:[
        {src:'img/photoWall/0.jpg'},{src:'img/photoWall/1.jpg'},{src:'img/photoWall/2.jpg'},{src:'img/photoWall/3.jpg'},{src:'img/photoWall/4.jpg'},
        {src:'img/photoWall/5.jpg'},{src:'img/photoWall/6.jpg'},{src:'img/photoWall/7.jpg'},{src:'img/photoWall/8.jpg'},{src:'img/photoWall/9.jpg'},
        {src:'img/photoWall/10.jpg'},{src:'img/photoWall/11.jpg'},{src:'img/photoWall/12.jpg'},{src:'img/photoWall/13.jpg'},{src:'img/photoWall/14.jpg'},
        {src:'img/photoWall/15.jpg'},{src:'img/photoWall/16.jpg'},{src:'img/photoWall/17.jpg'},{src:'img/photoWall/18.jpg'},{src:'img/photoWall/19.jpg'},
        {src:'img/photoWall/20.jpg'},{src:'img/photoWall/21.jpg'},{src:'img/photoWall/22.jpg'},{src:'img/photoWall/23.jpg'},{src:'img/photoWall/24.jpg'},
        {src:'img/photoWall/25.jpg'},{src:'img/photoWall/26.jpg'},{src:'img/photoWall/27.jpg'},{src:'img/photoWall/28.jpg'},{src:'img/photoWall/29.jpg'}
    ]}

    waterfall('container','box');

    window.onscroll = function(){
        if(checkscrollside('container','box')){   //如果滚到底部,就加载图片
            var parent = document.getElementById("container");
            for(var i = 0 ; i < ImgSrc.data.length ; i++){
                var oDiv = document.createElement("div");
                oDiv.className = 'box';
                parent.appendChild(oDiv);
                var imgBox = document.createElement('div');
                imgBox.className ='box-img';
                oDiv.appendChild(imgBox);
                var img = document.createElement('img');
                img.src= ImgSrc.data[i].src;
                imgBox.appendChild(img);
            }
            waterfall('container','box');
        }
    }

    function waterfall(parent,className){
        var oparent = document.getElementById(parent);
        var oChild = getChild(parent,className);  //得到全部照片
        var imgWidth = oChild[0].offsetWidth;   //每个照片的大小
        var documentWidth = document.documentElement.clientWidth;  //屏幕的大小
        var num =Math.floor (documentWidth / imgWidth);
        oparent.style.cssText = 'width:'+num * imgWidth +'px;margin:0 auto'; //固定总体的大小，cssText的使用

        var imgHeightArr = [];  //用来存放第一行中的元素的高度
        for(var i = 0 ; i < oChild.length ; i++){
            var imgHeight = oChild[i].offsetHeight;
            if(i < num){    //第一行
                imgHeightArr[i] = imgHeight;
            }else{
                var minH = Math.min.apply(null,imgHeightArr); //找到元素数组中最矮的元素
                var minHIndex =lowerHeightIndex(imgHeightArr,minH); //找到元素数组中最矮的元素的索引值
                oChild[i].style.position = 'absolute';
                oChild[i].style.top = minH +'px';
                oChild[i].style.left = oChild[minHIndex].offsetLeft + 'px';
                imgHeightArr[minHIndex] += oChild[i].offsetHeight;  //更新它的高度

            }
        }
    }

    function checkscrollside(parent,oChildClassName){
        var oParent = document.getElementById(parent);
        var oChild = getChild(parent,oChildClassName);

        var lastImag = oChild[oChild.length-1].offsetTop +Math.floor((oChild[oChild.length-1].offsetHeight)/2);///创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//页面的滚动高度
        var windowH = document.documentElement.clientHeight;   //屏幕的高
        return lastImag <(scrollTop + windowH) ? true : false;
    }



}

//获取某个ID为parent的父节点下className中子节点
function getChild(parent,className){
    var childArr = [];
    var parent = document.getElementById(parent);
    var allChild = parent.getElementsByTagName('*');
    for(var i = 0 ; i < allChild.length ; i++){
        if(allChild[i].className == className){
            childArr.push(allChild[i])
        }
    }
    return childArr;
}

//获取数组元素中的高度为最矮的元素的索引
function lowerHeightIndex(arr,minH){
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] == minH){
            return i;
        }
    }
}


