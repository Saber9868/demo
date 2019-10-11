// 楼层部分
$fltop1=$(".fl-top-right",".floor-one");
$box1=$(".floor-box",".floor-one");
$divOne=$("div",$box1);
$pOne=$("p",$fltop1);
$imgOne=$("img",$fltop1);
$pOne.on("click",function(){
    var a=$(this).index();
    if(a==1){
        b=40;
    }else if(a==2){
        b=100;
    }else{
        b=175;
    }
    $imgOne.css("left",b+"px");
    $(this).css("color","#f01414").siblings().css("color","#a099b7");
    $divOne.eq(a-1).show().siblings().hide();
})
$fltop2=$(".fl-top-right",".floor-two");
$box2=$(".floor-box",".floor-two");
$divTwo=$("div",$box2);
$pTwo=$("p",$fltop2);
$imgTwo=$("img",$fltop2);
$pTwo.on("click",function(){
    var a=$(this).index();
    if(a==1){
        b=40;
    }else if(a==2){
        b=100;
    }else{
        b=175;
    }
    $imgTwo.css("left",b+"px");
    $(this).css("color","#f01414").siblings().css("color","#a099b7");
    $divTwo.eq(a-1).show().siblings().hide();
})

// 侧边栏动画
$("span",".side").hover(function () {
    $(this).stop().animate({
        opacity:"1"
    })
    $("a",$(this)).stop().animate({
        left:"-60px",
        opacity:"1"
    })
    }, function () {
        $(this).stop().animate({
            opacity:"0.5"
        })
        $("a",$(this)).stop().animate({
            left:"0px",
            opacity:"0" 
        })
    }
);