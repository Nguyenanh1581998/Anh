$(document).ready(function() {
	$(".mobile-menu").click(function(){
		var menuStatus = $(this).attr("data-toggle");
		if(menuStatus == "closed")
		{
			$(".user-panel .pagination, .pre-details li").addClass("show");
			$(this).attr("data-toggle","opened");
		}
		else if(menuStatus == "opened")
		{
			$(".user-panel .pagination, .pre-details li").removeClass("show");
			$(this).attr("data-toggle","closed");
		}
	});
		/*var winHeight = $(window).height();
		var winWidth = $(window).width()
		
		if(winWidth >= 1000 || winHeight <= 700)
			$(".map-holder").height(winHeight);
		else
			$(".map-holder").removeAttr("style")
	$(window).resize(function(){
		winHeight = $(window).height();
		if(winWidth >= 1000 || winHeight <= 700)
		{
			console.log("if "+winHeight)
			$(".map-holder").height(winHeight);
		}
		else
		{
			console.log("else "+winHeight)
			$(".map-holder").removeAttr("style");
		}
	});*/
	
	$(".accord-tab").hover(function(){
		var activeTab = $(this).hasClass("active");
		if(!activeTab)
		{
			$(".accord-tab").removeClass("active");
			$(this).addClass("active");
		}
	});
});
