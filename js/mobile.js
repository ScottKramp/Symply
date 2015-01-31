$(document).ready(mobile); 
$(window).resize(mobile);
var height, width

function mobile(){
	if(width < 480){
		$('.mobileFooter').css({visibility: 'visible', width: width})
	}else{
		$('.mobileFooter').css({visibility: 'hidden'})
	}
}
