$(function(event) {
    $('.trigger').on('click', function(event) {
        //웹 브라우저에서 지원하는 기본 기능을 제거
        event.preventDefault();
        //#trigger에 사용자의 이벤트인 click인 적용된 상태를 'this'라고 한다.
        $('.trigger').toggleClass('active');
        $('#main-menu').toggleClass('active');
        $('article').removeClAS('active');
    });
});