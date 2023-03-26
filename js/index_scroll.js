$(function() {
    $(window).scroll(function(event){
        var top = $(window).scrollTop();
        console.log('스크롤 높이 : '+top);

        if(top > 150) {
            $('header').css({background: 'rgb(2,28,48)'})
        }else {
            $('header').css({background: 'rgba(2,28,48,0.9)'})
        }
    });
});