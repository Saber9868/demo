var input=document.getElementsByTagName("input"),
    headnone=document.getElementById("header-none"),
    span=headnone.getElementsByTagName("span");
input[0].onblur=function(){
    var str=input[0].value;
    var pattern=/^[a-zA-Z]\w{5,19}/;
    if(pattern.test(str)){
        span[0].innerHTML="√";
    }else{
        span[0].innerHTML="请输入由6-20位字母、数字或_组成，并以字母开头的用户名";
    }
}
input[1].onblur=function(){
    var str=input[1].value;
    var pattern=/^\S{6,18}$/;
    if(pattern.test(str)){
        span[1].innerHTML="√";
    }else{
        span[1].innerHTML="请输入6-18位不包括空格的密码";
    }
}
input[2].onblur=function(){
    var str1=input[1].value;
    var str2=input[2].value;
    if(str1==str2){
        span[2].innerHTML="√";
    }else{
        span[2].innerHTML="两次输入的密码不一致";
    }
}
input[3].onblur=function(){
    var str=input[3].value;
    var pattern=/^[\u4e00-\u9fa5]{2,4}$/;
    if(pattern.test(str)){
        span[3].innerHTML="√";
    }else{
        span[3].innerHTML="请输入2-4位中文姓名";
    }
}
input[4].onblur=function(){
    var str=input[4].value;
    var pattern=/^[\d]{14,17}[\d|xX]$/;
    if(pattern.test(str)){
        span[5].innerHTML="√";
    }else{
        span[5].innerHTML="请输入15-18位身份证号码";
    }
}
input[5].onblur=function(){
    var str=input[5].value;
    var pattern=/^\w+@[\w]+\.com|\.com\.cn$/;
    if(pattern.test(str)){
        span[6].innerHTML="√";
    }else{
        span[6].innerHTML="请输入正确的邮箱";
    }
}
input[6].onblur=function(){
    var str=input[6].value;
    var pattern=/^\d{11}$/;
    if(pattern.test(str)){
        span[7].innerHTML="√";
    }else{
        span[7].innerHTML="请输入11位手机号码";
    }
}