$(window).scroll(function(){

  var totalHeight = parseInt($('.container').css('height'));
  var currentPosition = parseInt($('body').scrollTop());

  var percentage = currentPosition / totalHeight * 100 + '%';

  $('.fill').css({'width' : percentage});
  $('.tooltip').css({'margin-left' : percentage}).text(parseInt(percentage) + '%');

});