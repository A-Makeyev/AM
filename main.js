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


		// Fade in elements

		$(function() {
			$("#fade-in-hi").delay(1000).fadeIn();
			$("#fade-in-anatoly").delay(2000).fadeIn();
			$("#fade-in-dev").delay(3500).fadeIn();
			$("#fade-in-projects-title").delay(5500).fadeIn();

			$("#fade-in-project-2").delay(7000).animate({ opacity: 1 }, 3500);
			$("#fade-in-project-1").delay(9000).animate({ opacity: 1 }, 3500);

			$("#fade-in-about").delay(13000).fadeIn();
			$("#fade-in-more-projects").delay(15000).fadeIn();
			$("#fade-in-resume").delay(16000).fadeIn();
		});


});
