$(document).ready(function(e) {
    /* 导航栏事件 */
    $(".firstsection_center_right ul li").mouseenter(function(){
		left = $(this).position().left;
        $(".huakuai").stop(true,true).animate({left:left}, "fast");
	})

    $(".firstsection_center_right ul li").click(function(){
        $(".huakuai").css('left','$(this).position().left');
    })
    
});