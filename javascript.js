$(window).scroll(function(){
  var sticky = $('.sticky-top nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 50){
  	sticky.addClass('scrolled');
  	console.log("add");
  }else{
  	console.log("rev");
  	sticky.removeClass('scrolled');
  } 
});