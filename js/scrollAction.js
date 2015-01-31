var scrollNum 

$(document).scroll(function(){
	scrollNum = $(document).scrollTop(); 
	headerMove = -(scrollNum * .5)
	mouseBox = scrollNum * -.3
	if( scrollNum < 85){
		$("header").css({top: headerMove});	
	}else{
		$("header").css({top: '-40px'});	
	}
	
	
	if( scrollNum >= 150){
		$('.stickyFoot').css({bottom: '0px'});
	}else{
		$('.stickyFoot').css({bottom: scrollNum * .4 - 60});
	}
})
