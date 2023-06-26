let toggle = document.querySelector(".mobile_btn");
let mainBody = document.querySelector(".main-body");
let navigation = document.querySelector(".navigation");

toggle.addEventListener("click", function() {
  mainBody.classList.toggle('active');
  navigation.classList.toggle('active');
});


$(window).scroll(function(){
  var sticky = $('.sticky-top nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 50){
  	sticky.addClass('scrolled');
  }else{
  	sticky.removeClass('scrolled');
  } 
});

