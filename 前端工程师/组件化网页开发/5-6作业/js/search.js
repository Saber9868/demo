$searbtn=$(".search-btn");
$sear=$(".search-sear");
$searnone=$(".search-none");

// 输入框为空时点击搜索按钮无效
$searbtn.on('click',function(){ 
    if($.trim($(".search-sear").val())===""){
        return false;
    }
});
// 输入框内容变动时导入接收到的内容到下拉框并显示
$sear.on('input',function(){
    var url="https://suggest.taobao.com/sug?code=utf-8&q=" + $.trim($(".search-sear").val()) + "&_ksTS=1570001130402_244&callback=jsonp245&code=utf-8&area=c2c";
    $.ajax({
        url: url,
        dataType: "jsonp"
    }).done(function(data){
        var html="",
            dataNum = data['result'].length,
            maxNum=10;
        if (dataNum === 0) {
            $searnone.hide().html("");
            return;
        }
        for(i=0;i<dataNum;i++){
            if(i>=maxNum) break;
            html+= '<li class="search-none-item">'+ data['result'][i][0] +'</li>';
        }
        $searnone.html(html).show();
    }).fail(function(){
        $searnone.hide().html("");
    })
});
// 输入框获取焦点时显示下拉框并阻止其点击隐藏
$sear.on('focus',function(){
    $searnone.show();
}).on('click',function(){
    return false;
});
// 点击其他地方隐藏下拉框
$(document).click(function(){
    $searnone.hide();
});
// 点击下拉框的内容时导入内容到输入框并提交表单
$searnone.on('click','.search-none-item',function(){
    $sear.val($(this).html());
    $sear.parents().submit();
});