var copy, copyCounter;

copy = ['W', 'e', ' ', 'a', 'r', 'e', ' ', 'a', ' ', 'b', 'r', 'a', 'n', 'd', 'i', 'n', 'g', ' ', 'a', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 's', 'i', 'g', 'n', ' ', 't', 'e', 'a', 'm', ' ', 'b', 'a', 's', 'e', 'd', ' ', 'i', 'n', ' ', 'N', 'e', 'w', ' ', 'Y', 'o', 'r', 'k', ' ', 'C', 'i', 't', 'y', '.', ' ', ' ', 'L', 'e', 't', "'", 's', ' ', 'b', 'u', 'i', 'l', 'd', ' ', 's', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g', ' ', 't', 'o', 'g', 'e', 't', 'h', 'e', 'r', '.'];
copyCounter = 0;

setInterval(type, 100);
setInterval(blinker, 500);

function type(){
	times = [200, 300, 400, 500, 600]
	time = times[Math.floor(Math.random()*times.length)];
	setTimeout(typer, time);
	function typer(){
		if(copyCounter  < copy.length){
			$('.typeContent').append(copy[copyCounter])
			copyCounter ++;
		}	
	}
}

function blinker(){
	if ($('.blinker').hasClass('visible')){
		$('.blinker').css({visibility: 'visible'});
		$('.blinker').removeClass('visible');
	}else{
		$('.blinker').css({visibility: 'hidden'});
		$('.blinker').addClass('visible');
	}
}