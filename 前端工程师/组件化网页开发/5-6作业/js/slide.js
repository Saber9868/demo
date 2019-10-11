var a=0;
$span=$("span",$(".slide-bottom"));
$img=$("img",$(".slide-img"));
$leftbtn=$(".slide-left");
$rightbtn=$(".slide-right");
$slide=$(".cont-slide");
// 点击底部圆点效果
$span.on('click',function(){
    a=$(this).index();
    slide($(this));
    $img.eq(a).fadeIn().siblings().fadeOut();
});
function slide(obj){
    obj.css({
        background: '#fff',
        border: '1px solid #4d555d'
    }).siblings().css({
        background: '#313a43',
        border: 'none'
    });
}
// 定时器
var set=function set(){
    a++;
    if(a>3) a=0;
    $img.eq(a).fadeIn().siblings().fadeOut();
    slide($span.eq(a));
}
var setInter=setInterval(set, 2000);
// 左按钮
$leftbtn.on('click',function(){
    a--;
    if(a<0) a=3;
    slide($span.eq(a));
    $img.eq(a).stop().fadeIn().siblings().stop().fadeOut();
})
// 右按钮
$rightbtn.on('click',function(){
    a++;
    if(a>3) a=0;
    slide($span.eq(a));
    $img.eq(a).stop().fadeIn().siblings().stop().fadeOut();
})
// 鼠标移入停止定时器
$slide.on('mouseover',function(){
    $leftbtn.show();
    $rightbtn.show();
    clearInterval(setInter);
})
// 鼠标移出启动定时器
$slide.on('mouseout',function(){
    $leftbtn.hide();
    $rightbtn.hide();
    clearInterval(setInter);
    setInter=setInterval(set, 2000);
})