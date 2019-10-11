var index=0,
    menu=document.getElementById("menu"),
    menurow=menu.getElementsByTagName("div"),
    banner=document.getElementById("banner"),
    bannerbox=banner.getElementsByTagName("div");

// 复制过来的兼容代码
function addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, true);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    }
    else {
        element['on' + type] = handler;
    }
}

// 点击导航栏显示对应的banner图
for(i=0;i<menurow.length;i++){
    // 给每个导航按钮添加自定义属性i
    menurow[i].setAttribute("data-index",i);
    addHandler(menurow[i],"click",function(){
        // 点击导航栏隐藏所有banner图
        for(m=0;m<bannerbox.length;m++){
            bannerbox[m].style.display="none";
            menurow[m].className="";
        }
        // 获取自定义属性的值i并赋给index
        index=this.getAttribute("data-index");
        // 将对应导航栏按钮的banner图显示出来
        bannerbox[index].style.display="block";
        // 设置点击导航栏按钮的背景颜色
        menurow[index].className="bgcolor";
    });
}

// 定时器
function autoplay(){
timer=setInterval(function(){
    index++;
    if(index>=bannerbox.length){
        index=0;
    }
    for(m=0;m<bannerbox.length;m++){
        bannerbox[m].style.display="none";
        menurow[m].className="";
    }
    bannerbox[index].style.display="block";
    menurow[index].className="bgcolor";
},1000);
}

// 页面加载时触发定时器
window.onload=function(){
    autoplay();
}

// 鼠标移动到banner图时移除定时器
banner.onmouseover=function(){
    clearInterval(timer);
}

// 鼠标离开banner图时启动定时器
banner.onmouseout=function(){
    clearInterval(timer);
    autoplay();
}