$(document).ready(()=>{
	$('.button').on('mouseenter',function(){
		$(this).addClass('button_hover');
	})

	$('.button').on('mouseleave',function(){
		$(this).removeClass('button_hover');
	})
})