$(document).ready(function() { 

		// Change the title text when leaving the tab
		$(function() {
			// Get page title
				var pageTitle = $("title").text();

			// Change page title on blur
			$(window).blur(function() {
				$("title").text("Come back!");
			});

			// Change page title back on focus
			$(window).focus(function() {
				$("title").text(pageTitle);
			});
		});


		$("#mail").click(function()  {
			alert("anatoly.makeyev@gmail.com");
		});


 });
