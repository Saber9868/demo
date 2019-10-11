// 点击时出现隐藏的选项栏
$(".sele").click(function(){
    $(".header-none").show();
    return false;
})
// 当选项栏处于显示状态时点击页面其它部位隐藏选项栏
$("body").click(function(){
    $(".header-none").hide();
})
// 点击选项栏选项时 将搜索框左部文字改变成点击选项的内容
$("div",".header-none").click(function(){
    $("p",".header-right").text($(this).text());
    $(".header-none").hide();
})
$("span",".con2-top").click(function(){
    // 点击对应按钮 显示对应的界面 隐藏其他界面 并改变其背景色和字体颜色 还原其所有兄弟元素的背景色和字体颜色
    $(this).css({
        "background": "rgb(0, 204, 255)",
        "color": "#fff"
    }).siblings().css({
        "background": "#fff",
        "color": "rgb(0, 204, 255)"
    })
    $(".content-2 > div").eq($(this).index()+1).show().siblings().hide();
    if($(".con2-top").hide()){
        $(".con2-top").show()
    }
})
$("b",".con2-bottom1").click(function(){
    $(".con2-top").hide()
    $(".con2-top-none").show()
    $(".con2-none").show()
    $(".con2-bottom1 > table").hide()
})
$("a",".con2-top-none").click(function(){
    $(".con2-top").show()
    $(".con2-top-none").hide()
    $(".con2-none").hide()
    $(".con2-bottom1 > table").show()
})
// 声明一个变量储存表格的位置
var a=0;
// 点击右箭头 表格向左移动
$("a",".con2-none-right").click(function(){
    if(a<=-500){
        return false;
    }else{
        a-=100;
        $(".con2-none-table",".con2-none").css("left",a+"px")
    }
})
// 点击左箭头 表格向右移动
$("a",".con2-none-left").click(function(){
    if(a>=100){
        return false;
    }else{
        a+=100;
        $(".con2-none-table",".con2-none").css("left",a+"px")
    }
})