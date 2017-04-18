// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $('.flexslider').flexslider({
	  touch: $('.flexslider li').length > 1
  });
});

$(window).load(function() {
	$(".page-link").click(function(){
	    window.location = $(this).find("a:first").attr("href");	    
	    return false;
	});
});
