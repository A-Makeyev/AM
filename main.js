$(document).ready(function () {

     	// Change the title text when leaving the tab
		$(function() {
			     // Get page title
				var pageTitle = $("title").text();

			// Change page title on blur
			$(window).blur(function() {
				$("title").text("{ Your next Front-End developer }");
			});

			// Change page title back on focus
			$(window).focus(function() {
				$("title").text(pageTitle);
			});
		});




});
