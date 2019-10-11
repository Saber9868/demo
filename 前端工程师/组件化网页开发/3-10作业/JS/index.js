var boxright=document.getElementById("box-right");      //获取元素
    input=document.getElementsByTagName("input"),
    headnone=document.getElementById("header-none"),
    span=headnone.getElementsByTagName("span"),
    btn=document.getElementById("btn"),
    check=document.getElementById("check"),
    a1=document.getElementById("a1"),
    a2=document.getElementById("a2"),
    a3=document.getElementById("a3");
input[0].onblur=function(){               //验证用户名
    var str=input[0].value;
    var pattern=/^[a-zA-Z]\w{5,29}/;
    if(pattern.test(str)){
        span[0].innerHTML="√";
        span[0].style.color="green";
    }else{
        span[0].innerHTML="6-30位字母、数字或“_”，字母开头";
        span[0].style.fontSize="14px";
        span[0].style.color="red";
    }
}
input[1].onkeyup=function(){          //只输入数字字母或者符号中的一种时一个div背景变红  两种时两个div变红   三种时全部变红
    var str=input[1].value;
    var pattern1=/[\d]/;
    var pattern2=/[a-zA-Z]/;
    var pattern3=/[\W]/;
    console.log(pattern1.test(str)==true);
    console.log(pattern2.test(str)==true);
    console.log(pattern3.test(str)==true);
    if(pattern1.test(str)==true && pattern2.test(str)==true && pattern3.test(str)==true){
        a1.style.backgroundColor="red";
        a2.style.backgroundColor="red";
        a3.style.backgroundColor="red";
    }else if((pattern1.test(str)==true && pattern2.test(str)==true)==true || (pattern1.test(str)==true && pattern3.test(str)==true)==true || (pattern2.test(str)==true && pattern3.test(str)==true)==true){
        a1.style.backgroundColor="red";
        a2.style.backgroundColor="red";
    }else{
        a1.style.backgroundColor="red";
    }
}
input[1].onblur=function(){                   //验证密码
    var str=input[1].value;
    var pattern=/^\S{6,20}$/;
    if(pattern.test(str)==false){
        span[1].innerHTML="请输入6-20位字母、数字或符号";
        span[1].style.fontSize="14px";
        span[1].style.color="red";
    }else{
        span[1].innerHTML="√";
        span[1].style.color="green";
    }
}
input[2].onblur=function(){              //确认密码
    var str1=input[1].value;
    var str2=input[2].value;
    if(str2==""){
        span[2].innerHTML="请输入密码";
        span[2].style.fontSize="14px";
        span[2].style.color="red";
    }else if(str2==str1){
        span[2].innerHTML="√";
        span[2].style.color="green";
    }else{
        span[2].innerHTML="两次输入的密码不一致";
        span[2].style.fontSize="14px";
        span[2].style.color="red";
    }
}
input[3].onblur=function(){          //姓名验证
    var str=input[3].value;
    var pattern=/^[\u4e00-\u9fa5]{2,4}$/;
    if(pattern.test(str)){
        span[3].innerHTML="√";
        span[3].style.color="green";
    }else{
        span[3].innerHTML="请输入2-4位中文姓名";
        span[3].style.fontSize="14px";
        span[3].style.color="red";
    }
}
input[4].onblur=function(){              //身份证验证
    var str=input[4].value;
    var pattern=/^[\d]{14,17}[\d|xX]$/;
    if(pattern.test(str)){
        span[4].innerHTML="√";
        span[4].style.color="green";
    }else{
        span[4].innerHTML="请输入15-18位身份证号码";
        span[4].style.fontSize="14px";
        span[4].style.color="red";
    }
}
input[5].onblur=function(){            //邮箱验证
    var str=input[5].value;
    var pattern=/^\w+@[\w]+\.com|\.com\.cn|\.cn$/;
    if(pattern.test(str)){
        span[5].innerHTML="√";
        span[5].style.color="green";
    }else{
        span[5].innerHTML="请输入正确的邮箱";
        span[5].style.fontSize="14px";
        span[5].style.color="red";
    }
}
input[6].onblur=function(){            //手机号验证
    var str=input[6].value;
    var pattern=/^\d{11}$/;
    if(pattern.test(str)){
        span[6].innerHTML="√";
        span[6].style.color="green";
    }else{
        span[6].innerHTML="请输入11位手机号码";
        span[6].style.fontSize="14px";
        span[6].style.color="red";
    }
}
btn.onclick=function(){                  //设置下一步按钮条件
    if(check.checked==false){
        alert("同意遵守《中国铁路客户服务中心服务条款》才能进行下一步");
    }else{
        if(judeg()==false){
            alert("请填写正确的信息");
        }else{
            alert("注册成功");
        }
    }
}
function judeg(){                 //验证所有条件是否达成
    for(i=0;i<span.length;i++){
        var a=span[i].innerHTML;
        if(a!="√"){
            return false;
        }else{
            return true;
        }
    }
}