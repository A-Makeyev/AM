$(document).ready(function() { 

		// Change the title text when leaving the tab
		$(function() {
			// Get page title
				var pageTitle = $("title").text();

			// Change page title on blur
			$(window).blur(function() {
				$("title").text("About Me");
			});

			// Change page title back on focus
			$(window).focus(function() {
				$("title").text(pageTitle);
			});
		});


		document.getElementById("main-pic").onclick=function() {
			setTimeout(function() {
				window.open("https://anatoly-portfolio.netlify.com");
			}, 1000);
		}

 });
