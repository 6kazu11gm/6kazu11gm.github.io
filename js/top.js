(function() {


  /*==========================
  mvAnimation
  ==========================*/
  var mv = $('.l-mainvisual');
  var mask = mv.find('.js-op-mask');
  var mvAnimation = function(){
    mask.find('.logo').velocity({
      'scale': 0.93
    }, 0).delay(500).velocity({
      'scale' : 1,
      'opacity': 1
    }, 6000, 'easeOutExpo');

    mask.delay(1500).velocity({
      'translateX': '100%'
    }, 1600, 'easeInOutQuint');
    mask.find('.js-mask-inner').delay(1500).velocity({
      'translateX': '-100%'
    }, 1600, 'easeInOutQuint', function(){
      
      $('.menu .js-mask').delay(300).velocity({
        'width': '0%'
      }, 1500, 'easeInOutQuint');
    });

    $('.tagline .js-mask').delay(2500).velocity({
      'width': '0%'
    }, 2500, 'easeInOutQuint');

  };


  /*==================================================
  Init
  ==================================================*/
  var topInit = function(){
    mvAnimation();
  };
  topInit();
})();