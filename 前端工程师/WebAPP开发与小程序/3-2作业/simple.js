// ipad下1rem=76.8px
(function(){
    setRemUnit();
    
    window.addEventListener('resize',setRemUnit);

    function setRemUnit(){
        var docEl=document.documentElement;
        var ratio=76.8;
        var viewWidth=docEl.getBoundingClientRect().width || innerWidth;
        docEl.style.fontSize=viewWidth/ratio+'px';
    }
})();