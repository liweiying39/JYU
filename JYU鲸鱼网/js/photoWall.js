/**
 * Created by Ӣ�� on 2016/7/8.
 */
/**
 * Created by Ӣ�� on 2016/6/29.
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
        if(checkscrollside('container','box')){   //��������ײ�,�ͼ���ͼƬ
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
        var oChild = getChild(parent,className);  //�õ�ȫ����Ƭ
        var imgWidth = oChild[0].offsetWidth;   //ÿ����Ƭ�Ĵ�С
        var documentWidth = document.documentElement.clientWidth;  //��Ļ�Ĵ�С
        var num =Math.floor (documentWidth / imgWidth);
        oparent.style.cssText = 'width:'+num * imgWidth +'px;margin:0 auto'; //�̶�����Ĵ�С��cssText��ʹ��

        var imgHeightArr = [];  //������ŵ�һ���е�Ԫ�صĸ߶�
        for(var i = 0 ; i < oChild.length ; i++){
            var imgHeight = oChild[i].offsetHeight;
            if(i < num){    //��һ��
                imgHeightArr[i] = imgHeight;
            }else{
                var minH = Math.min.apply(null,imgHeightArr); //�ҵ�Ԫ�����������Ԫ��
                var minHIndex =lowerHeightIndex(imgHeightArr,minH); //�ҵ�Ԫ�����������Ԫ�ص�����ֵ
                oChild[i].style.position = 'absolute';
                oChild[i].style.top = minH +'px';
                oChild[i].style.left = oChild[minHIndex].offsetLeft + 'px';
                imgHeightArr[minHIndex] += oChild[i].offsetHeight;  //�������ĸ߶�

            }
        }
    }

    function checkscrollside(parent,oChildClassName){
        var oParent = document.getElementById(parent);
        var oChild = getChild(parent,oChildClassName);

        var lastImag = oChild[oChild.length-1].offsetTop +Math.floor((oChild[oChild.length-1].offsetHeight)/2);///������������ӿ����waterfall()���ĸ߶ȣ����һ�����ľ�����ҳ����+����ߵ�һ��(
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//ҳ��Ĺ����߶�
        var windowH = document.documentElement.clientHeight;   //��Ļ�ĸ�
        return lastImag <(scrollTop + windowH) ? true : false;
    }



}

//��ȡĳ��IDΪparent�ĸ��ڵ���className���ӽڵ�
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

//��ȡ����Ԫ���еĸ߶�Ϊ���Ԫ�ص�����
function lowerHeightIndex(arr,minH){
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] == minH){
            return i;
        }
    }
}


