$(function(){
    $('.flexslider').flexslider({
        animation: "slide",  // slide or fade: 애니메이션 효과 설정
        animationLoop: true, // true of false: 애니메이션 효과의 반복 여부를 설정
        itemWidth: 300, // 케러셀 아이템의 너비값을 300px로 설정
        itemMargin: 30, // 케러셀 아이템의 좌/우 여백을 30px로 설정
        mousewheel: true // true or false: 마우스 휠을 스크롤하면 케러셀 아이템이 오른쪽에서 왼쪽으로 슬라이드 되도록 설정
    });
  });