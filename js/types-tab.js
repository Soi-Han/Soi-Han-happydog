$(function(){
    $('.ty-info-wrap #ty-tabBtn').click(function(e){
        e.preventDefault(); // 하이퍼링크 기능을 제거
        $('.ty-info-wrap #ty-tabBtn').removeClass('on'); // 모든 버튼을 비활성화한다.
        $(this).addClass('on'); // 클릭한 버튼만 활성화시킨다.
        $('.ty-info-wrap > div').hide(); // 모든 탭내용을 제거한다.
        $(this).next().show(); // 클릭한 탭버튼의 내용만 보여준다. // 또는 슬라이드 다운이나 쇼우
    });
});