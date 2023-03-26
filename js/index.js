$(document).ready(function(){
  var width = $(window).width();

  if(width >= 1400){

    $('article').on('mouseenter', function(){
      $(this).stop().animate({'width': '30%'}, 1000, function(){
      $(this).find('h3').stop().animate({'left':'20px', 'opacity':'0.8'}, 600);
      $(this).find('h2').stop().animate({'right':'20px', 'opacity':'1'}, 400);
      $(this).find('p').stop().animate({'right':'20px', 'opacity':'0.8'}, 800);
      $(this).find('a').stop().animate({'bottom':'20%', 'opacity':'1'}, 400);
    });
      $(this).find('.index-bg').stop().animate({'opacity':'0.75'}, 1500);
      $(this).find('.bg-box').stop().animate({'width':'100%', 'opacity':'0.85'}, 800);
   });
    $('article').on('mouseleave', function(){
      $(this).stop().animate({'width': '15%'}, 650, function(){
        $(this).find('h3').stop().animate({'left':'-320px', 'opacity':'0'}, 400);
        $(this).find('h2').stop().animate({'right':'-320px', 'opacity':'0'}, 400);
        $(this).find('p').stop().animate({'right':'-320px', 'opacity':'0'}, 800);
        $(this).find('a').stop().animate({'bottom':'0', 'opacity':'0'}, 400);
    });
    $(this).find('.index-bg').stop().animate({'opacity':'0'}, 1200);
    $(this).find('.bg-box').stop().animate({'width':'0', 'opacity':'0'}, 600);
  });

  }else if(width >= 1000 && width < 1400){

    $('article').on('mouseenter', function(){
      $(this).stop().animate({'width': '35%'}, 1000, function(){
        $(this).find('h3').stop().animate({'left':'20px', 'opacity':'0.8'}, 600);
        $(this).find('h2').stop().animate({'right':'20px', 'opacity':'1'}, 400);
        $(this).find('p').stop().animate({'right':'20px', 'opacity':'0.8'}, 800);
        $(this).find('a').stop().animate({'bottom':'20%', 'opacity':'1'}, 400);
      });
      $(this).find('.index-bg').stop().animate({'opacity':'0.75'}, 1500);
      $(this).find('.bg-box').stop().animate({'width':'100%', 'opacity':'0.85'}, 800);
   });
    $('article').on('mouseleave', function(){
      $(this).stop().animate({'width': '15%'}, 650, function(){
        $(this).find('h3').stop().animate({'left':'-320px', 'opacity':'0'}, 400);
        $(this).find('h2').stop().animate({'right':'-320px', 'opacity':'0'}, 400);
        $(this).find('p').stop().animate({'right':'-320px', 'opacity':'0'}, 800);
        $(this).find('a').stop().animate({'bottom':'0', 'opacity':'0'}, 400);
    });
    $(this).find('.index-bg').stop().animate({'opacity':'0'}, 1200);
    $(this).find('.bg-box').stop().animate({'width':'0', 'opacity':'0'}, 600);
  });

  }else if(width >= 600 && width < 1000){
    $('article').on('mouseenter', function(){
      $(this).stop().animate({'height': '35%'}, 1000, function(){
        $(this).find('h3').stop().animate({'left':'20px', 'opacity':'0.8'}, 600);
        $(this).find('h2').stop().animate({'right':'20px', 'opacity':'1'}, 400);
        $(this).find('p').stop().animate({'right':'20px', 'opacity':'0.8'}, 800);
        $(this).find('a').stop().animate({'bottom':'18%', 'opacity':'1'}, 400);
      });
      $(this).find('.index-bg').stop().animate({'opacity':'0.75'}, 1500);
      $(this).find('.bg-box').stop().animate({'width':'100%', 'opacity':'0.85'}, 800);
    });
    $('article').on('mouseleave', function(){
      $(this).stop().animate({'height': '15%'}, 650, function(){
        $(this).find('h3').stop().animate({'left':'-320px', 'opacity':'0'}, 400);
        $(this).find('h2').stop().animate({'right':'-320px', 'opacity':'0'}, 400);
        $(this).find('p').stop().animate({'right':'-320px', 'opacity':'0'}, 800);
        $(this).find('a').stop().animate({'bottom':'0', 'opacity':'0'}, 400);
    });
      $(this).find('.index-bg').stop().animate({'opacity':'0'}, 1200);
      $(this).find('.bg-box').stop().animate({'width':'0', 'opacity':'0'}, 600);
    });

  }else if(width >= 300 && width < 600){

    $('article').on('mouseenter', function(){
      $(this).stop().animate({'height': '35%'}, 1000, function(){
        $(this).find('h3').stop().animate({'left':'20px', 'opacity':'0.8'}, 600);
        $(this).find('h2').stop().animate({'right':'20px', 'opacity':'1'}, 400);
        $(this).find('p').stop().animate({'right':'20px', 'opacity':'0.8'}, 800);
        $(this).find('a').stop().animate({'bottom':'14%', 'opacity':'1'}, 400);
      });
      $(this).find('.index-bg').stop().animate({'opacity':'0.75'}, 1500);
      $(this).find('.bg-box').stop().animate({'width':'100%', 'opacity':'0.85'}, 800);
    });
    $('article').on('mouseleave', function(){
      $(this).stop().animate({'height': '15%'}, 650, function(){
        $(this).find('h3').stop().animate({'left':'-320px', 'opacity':'0'}, 400);
        $(this).find('h2').stop().animate({'right':'-320px', 'opacity':'0'}, 400);
        $(this).find('p').stop().animate({'right':'-320px', 'opacity':'0'}, 800);
        $(this).find('a').stop().animate({'bottom':'0', 'opacity':'0'}, 400);
    });
      $(this).find('.index-bg').stop().animate({'opacity':'0'}, 1200);
      $(this).find('.bg-box').stop().animate({'width':'0', 'opacity':'0'}, 600);
    });
  }
});
