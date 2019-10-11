// 获取标签
var header=document.getElementById("header"),
    nav=header.getElementsByTagName("a"),
    headernav=document.getElementById("headernav"),
    navhr=headernav.getElementsByTagName("hr")[0],
    screen2=document.getElementById("screen-2"),
    scr2div=screen2.getElementsByTagName("div"),
    scr2img=screen2.getElementsByTagName("img"),
    scr2hr=screen2.getElementsByTagName("hr")[0],
    screen3=document.getElementById("screen-3"),
    scr3img=screen3.getElementsByTagName("img")[0],
    scr3h1=screen3.getElementsByTagName("h1")[0],
    scr3hr=screen3.getElementsByTagName("hr")[0],
    scr3span=screen3.getElementsByTagName("span")[0],
    scr3div=screen3.getElementsByTagName("div"),
    screen4=document.getElementById("screen-4"),
    scr4img=document.getElementsByTagName("img"),
    scr4span=document.getElementsByTagName("span"),
    scr4h1=screen4.getElementsByTagName("h1")[0],
    scr4hr=screen4.getElementsByTagName("hr")[0],
    scr4div=screen4.getElementsByTagName("div")[0],
    screen5=document.getElementById("screen-5"),
    scr5img=screen5.getElementsByTagName("img")[0],
    scr5h1=screen5.getElementsByTagName("h1")[0],
    scr5hr=screen5.getElementsByTagName("hr")[0],
    scr5div=screen5.getElementsByTagName("div")[0],
    side=document.getElementById("side"),
    sides=side.getElementsByTagName("a");
// 滚动条滚动时，导航栏样式变化
window.addEventListener("scroll", myFunction);
function myFunction(){
    header.style.background="rgba(255, 255, 255, 0.5)";
    header.style.color="black";
    for(i=0;i<nav.length-1;i++){
        nav[i].style.color="black";
    }
}
// 侧边栏随页面滚动改变颜色
function sidecolor(num){
    for(t=0;t<sides.length;t++){
        sides[t].style.color="#787d82";
        sides[t].style.borderBottom="rgb(158, 150, 150) 2px solid";
        sides[num].style.color="red";
        sides[num].style.borderBottom="red 2px solid";
    }
}
// 设置滚动条滚动到一定位置触发对应的动画
window.onscroll=function () {
    // 获取滚动条当前位置
    var top  = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    if(top<=400){
        sidecolor(0);
        navhr.style.right="494px";
    }
    if(top>400){
        scr2div[0].classList.add("anima-1");
        scr2div[0].style.display="block";
        scr2hr.classList.add("scrhr");
        scr2hr.style.display="block";
        scr2img[0].classList.add("scrhr");
        scr2img[0].style.display="inline-block";
        scr2img[1].classList.add("anima-2");
        scr2img[1].style.display="inline-block";
        scr2div[1].classList.add("anima-3");
        scr2div[1].style.display="block";
        navhr.style.right="404px";
        for(t=0;t<sides.length;t++){
            sides[t].style.color="#787d82";
            sides[t].style.borderBottom="rgb(158, 150, 150) 2px solid";
        }
        sidecolor(1);
    }
    if(top>1000){
        scr3hr.classList.add("scrhr");
        scr3img.classList.add("sc3-1");
        scr3h1.classList.add("anima-1");
        scr3span.classList.add("anima-3");
        scr3h1.style.display="block";
        scr3hr.style.display="block";
        scr3span.style.display="block";
        navhr.style.right="314px";
        for(l=0;l<scr3div.length;l++){
            scr3div[l].classList.add("anima-2");
            scr3div[l].style.display="inline-block";
        }
        sidecolor(2);
    }
    if(top>1600){
        scr4hr.classList.add("scrhr");
        scr4h1.classList.add("anima-1");
        scr4div.classList.add("anima-3");
        scr4h1.style.display="block";
        scr4hr.style.display="block";
        scr4div.style.display="block";
        navhr.style.right="224px";
        for(j=0;j<scr4img.length;j++){
            scr4img[j].classList.add("scr4-1");
            scr4img[j].style.display="inline-block";
        }
        for(y=0;y<scr4span.length;y++){
            scr4span[y].classList.add("scr4-1");
            scr4span[y].style.display="inline";
        }
        sidecolor(3);
    }
    if(top>2200){
        scr5hr.classList.add("scrhr");
        scr5img.classList.add("sc5-1");
        scr5h1.classList.add("anima-1");
        scr5div.classList.add("anima-3");
        scr5h1.style.display="block";
        scr5hr.style.display="block";
        scr5div.style.display="block";
        navhr.style.right="134px";
        sidecolor(4);
    }
}
// 滑动门特效
for(i=0;i<nav.length-1;i++){
    navs(i);
    function navs(i) {
        nav[i].onmouseover=function(){
            navhr.style.right=(494-(i*90))+"px";
        }
    }
}

// nav[0].onmouseover=function(){
//     navhr.style.right="494px";
// }
// nav[1].onmouseover=function(){
//     navhr.style.right="404px";
// }
// nav[2].onmouseover=function(){
//     navhr.style.right="314px";
// }
// nav[3].onmouseover=function(){
//     navhr.style.right="224px";
// }
// nav[4].onmouseover=function(){
//     navhr.style.right="134px";
// }
headernav.onmouseout=function(){
    navhr.style.right="494px";
}