$(document).ready(function(){
	/* http://www.zurb.com/playground/inline-form-labels */
	$("input").focus(function() {
		$(this).parent().addClass("focus");
	});
	
	$("input").blur(function() {
		if($(this).val() == "") {
			$(this).parent().removeClass("focus").removeClass("has-text");
		}
	});
	
	$("input").keypress(function() {
		$(this).parent().removeClass("focus").addClass("has-text");
	});
});