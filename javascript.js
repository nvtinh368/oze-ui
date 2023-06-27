let toggle = document.querySelector(".mobile_btn");
let mainBody = document.querySelector(".main-body");
let navigation = document.querySelector(".navigation");

toggle.addEventListener("click", function() {
  mainBody.classList.toggle('active');
  navigation.classList.toggle('active');
});


// khi trang được load thì thực hiện lấy tổng số trang ra
// Sau đó thực hiện hiện load trang và nạp vào javascript

async function loadOrder(page){
	// $("#content").html('')
	$.ajax({
		url: 'https://dummyjson.com/products/1'
	})
	.then(rs =>{
		var arr = new Array(rs['stock']);
		$('#paging').pagination({
			dataSource: arr,
	   		 pageSize:40,
	    	afterPageOnClick : function(event,page){
	    		loadPage(page);
	   	 	}
		})
	})
	.catch(err=>{
		console.log("không load được dữ liệu");
	})

	
}

// Thực hiện load và làm mới lại trang
function loadPage(page){
	$("#content").html('')
	$.ajax({
		url: 'user?page='+page
	})
	.then(rs =>{
		for (let i =0; i < rs.data.lenght; i++){
			const element = rs.data[i];
			var item = $(`<h3>${element.user}</h3>`);
			$("#content").append(item)
		}
	})
	.catch(err=>{
		console.log("không load được dữ liệu");
	})
	
}





$(window).scroll(function(){
  var sticky = $('.sticky-top nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 50){
  	sticky.addClass('scrolled');
  }else{
  	sticky.removeClass('scrolled');
  } 
});

