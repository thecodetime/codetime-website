$(function(){
  var $h1 = $('h1');
  setInterval(function() {
    if ($h1.hasClass('cursor-on')) {
      $h1.removeClass('cursor-on').addClass('cursor-off');
    } else {
      $h1.removeClass('cursor-off').addClass('cursor-on');
    }
  }, 500);
});
