$(function(e){
    $('#main-menu > li').mouseenter(function(){
        //$(this): 메인 메뉴 중 마우스 오버 이벤트가 발생된 메인 메뉴를 선택한다.
        //find('선택자'): 선택한 객체의 하위 요소 중에 선택자에 해당하는 요소를 찾는다.
        //slideDown( ): 이벤트 효과 메서드로 요소를 아래로 내리면서 서서히 보여준다.
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('#main-menu > li').mouseleave(function(){
        //slideDown( ): 이벤트 효과 메서드로 요소를 위로 올리면서 서서히 감춘다.
        $(this).find('.sub-menu').stop().slideUp();
    });
});