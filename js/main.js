$(document).ready(adjustments); 
$(window).resize(adjustments);
var height, width
var projectPrice = 0;

// $(".menu").click(function(){
//   $(this).toggleClass("open");
// });

function adjustments(){
	height = $(window).height();
	width = $(window).width();
	$('.pageTop').css({height: height - 195})
	$('.stickyFoot').css({width: width - 40})
	$('.pageBottom').css({width: width})
	$('header').css({width: width - 100})
	$('.bar').css({width: width - 160})
	if(width >= 768 || width < 640){
		$('.xImg').css({left: width/2 - 50,})
	}else if(width >= 640 && width < 767 ){
		$('.xImg').css({left: width/2 - 25,})
	}
}
$('.stickyFoot').mouseenter(function(){
	$('.stickyFoot').animate({backgroundColor: '#2ec76b'})
})
$('.stickyFoot').mouseleave(function(){
	$('.stickyFoot').animate({backgroundColor: '#171717'})
})
$('.link').mouseenter(function(){
	$(this).animate({color: '#2ec76b'})
})
$('.link').mouseleave(function(){
	$(this).animate({color: '#171717'})
})
$('.projectTile').mouseenter(function(){
	$(this).animate({backgroundColor: '#2ec76b'})
})
$('.projectTile04, .projectTile14, .projectTile34, .projectTile44, .projectTile22').mouseenter(function(){
	$(this).animate({backgroundColor: '#2ec76b', color: 'black'})
})
$('.projectTile01, .projectTile11, .projectTile21, .projectTile31, .projectTile41').mouseleave(function(){
	if(!$(this).hasClass('activeTile')){
		$(this).animate({backgroundColor: '#f7f7f7'})
	}
})
$('.projectTile02, .projectTile12, .projectTile32, .projectTile42').mouseleave(function(){
	if(!$(this).hasClass('activeTile')){
		$(this).animate({backgroundColor: '#e3e3e3'})
	}
})
$('.projectTile03, .projectTile13, .projectTile33, .projectTile43').mouseleave(function(){
	if(!$(this).hasClass('activeTile')){
		$(this).animate({backgroundColor: '#6d6d6e'})
	}	
})
$('.projectTile04, .projectTile14, .projectTile34, .projectTile44, .projectTile22').mouseleave(function(){
	if(!$(this).hasClass('activeTile')){
		$(this).animate({backgroundColor: '#171717', color: '#f7f7f7'})
	}
})

$('.projectTile').click(function(){
	if($(this).hasClass('activeTile')){
		$(this).removeClass('activeTile')
	}else{
		$(this).addClass('activeTile')
	}
})

// Project Calculator Start

// if($(".projectTile01").click(function(){
// 	if($(this).hasClass('activeTile')){
// 		projectPrice = projectPrice + 1;
// 	}else{
// 		projectPrice = projectPrice - 1;
// 	}
// }))

// Project Calculator End

$('.stickyFoot').click(function(){
	if($('.stickyFoot').hasClass('open')){
		$('.stickyFoot').removeClass('open');
		$('.stickyFoot').animate({height: 20});
	}else{
		$('.stickyFoot').addClass('open');
		$('.stickyFoot').animate({height: height - 40});
	}	
})




























