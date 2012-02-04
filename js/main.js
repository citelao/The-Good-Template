$(document).ready(function(){
	hljs.initHighlightingOnLoad();
		
	/* http://www.zurb.com/playground/inline-form-labels */
	$("input, textarea").focus(function() {
		$(this).parent().addClass("focus");
	});
	
	$("input, textarea").blur(function() {
		if($(this).val() == "") {
			$(this).parent().removeClass("focus").removeClass("has-text");
		}
	});
	
	$("input, textarea").keypress(function() {
		$(this).parent().removeClass("focus").addClass("has-text");
	});
//	
//	$("select").blur(function(i) {
//		
//	});
});