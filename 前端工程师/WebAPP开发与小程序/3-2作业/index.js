var btn=document.getElementById("btn");
var nav=document.getElementById("top-nav");
var a=false;
btn.onclick=function(){
    if(a==false){
        a=true;
        nav.style.height="13rem";
    }else{
        a=false;
        nav.style.height="0";
    }
}
// 点击按钮显示顶部隐藏的下拉栏