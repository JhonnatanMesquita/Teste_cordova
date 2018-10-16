var h = $(window).height() - 10,
	hdiv = $("body").height();

$(document).ready(function(){
	$("body").css({
		height: h+"px"
	});
});

$(window).resize(function(){
	var nh = $(window).height() - 10;
	if (nh != h && nh > hdiv){
		$("body").css({ height: nh+"px"});
	}
	h = nh;
});