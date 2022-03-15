$(function(){
    var $btnMnu = $('.btn_mnu');
    var $gnb = $('.gnb')
    var $indicator = $('.slide>.slide-pagination>li>a');
    var $container = $('.slide>.slide-container');
    var $link = $('.slide>.slide-container>li');
    var $btnPrev = $('.slide>.prev');
    var $btnNext = $('.slide>.next');
    var intervalKey = null;
    var nowIdx = 0;
    
    
    var $btnLan2 = $('header>.gnb>ul>li:nth-child(1)');
    var $btnTop = $('footer>.top>a');
      
    function slideMove(){
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      $link.eq(nowIdx).find('a').addClass('active');
      $link.parent().siblings().find('a').removeClass('active');
  
      $container.stop().animate({left:-(nowIdx*100)+'%'},1000,'easeInOutCubic');
    }
  
    function nextIdx(){
      if(nowIdx<3){
        nowIdx++;
      }else{
        nowIdx = 0;
      }
    }
  
    function autoPlay(){
      intervalKey = setInterval(function(){
        nextIdx();
        slideMove();
      },2300);
    }
  
    autoPlay();
  
    function autoStop(){
      clearInterval(intervalKey);
    }
  
    $indicator.on('click',function(event){
      event.preventDefault();
      autoStop();
      nowIdx = $indicator.index(this)
      
      slideMove();
    });
      
    $btnPrev.on('click',function(){
      autoStop();
  
      if(nowIdx>0){
        nowIdx--;  
      }else{
        nowIdx = 3;
      }
  
      slideMove();
    });
  
    $btnNext.on('click',function(){
      autoStop();
      nextIdx();
      slideMove();
    });
    //end of slide
  
    //모바일 + button
    $btnMnu.on('click',function(){
      $(this).css({
        transform : 'rotate(360deg)'
      });
  
      $gnb.slideToggle();
    });
  
    //language
    $btnLan2.on('click',function(event){
      event.preventDefault();
      $('header>.gnb>ul>.lang').stop().slideToggle();
    });
  
    //top button
    $btnTop.on('click',function(event){
      event.preventDefault();
  
      $('html,body').stop().animate({
        scrollTop : 0
      },1000,'easeInOutCubic');
    });
  
    //미디어 쿼리 로직
    // var timer = null;
  
    // function resizing(){
    //   var winWidth = $('html,body').width();
  
    //   if(winWidth<768){
    //     alert('해당 이벤트 페이지는 PC(1920px)와 태블릿(768px)에 최적화되었습니다.');
    //   }
    // }
  
    // $(window).one('resize', function(){
    //   clearTimeout(timer);
    //   timer = setTimeout(resizing,400);
    // });
  });