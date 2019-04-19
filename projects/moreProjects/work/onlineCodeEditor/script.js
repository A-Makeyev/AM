$(document).ready(function() {

	/* Placing the code containers in the right place below the menu bar */

var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();
var codeContainerHeight = windowHeight - menuBarHeight;

$(".codeContainer").height(codeContainerHeight + "px");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	
	$(".toggle").click(function() { // Toggles the <li> classes on click	
		$(this).toggleClass("selected");

		var activeDiv = $(this).html();
			// Toggles the current active div
		$("#" + activeDiv + "container").toggle();
			// # + JS + container => #JScontainer

		var showDivs = $(".codeContainer").filter(function() {
			// Filter elements that do not match are removed from the selection
			// Those that match will be returned
			return($(this).css("display") != "none");
			// Returns true if this div is displaying
			
		}).length; // Number of divs that are currently active

			// Text area width set to 100%
			// Then divides by the number of showing divs
		var textAreaWidth = 100 / showDivs;

		$(".codeContainers").width(textAreaWidth + "%");

	});
		
		// Making the RUN button green on hover
		$("#run").mouseenter(function() {
			$(this).css("background", "#08d32a");
			$(this).css("borderColor", "#08d32a");
		});

		// Restoring the original color
		$("#run").mouseleave(function() {
			$(this).css("background", "#c9cbd6");
			$(this).css("borderColor", "#c9cbd6");
		}); 
		

	// Making the code work when clicking RUN

	$("#runButton").click(function() {
						   	   	   // Adds the CSS code              // Adds the HTML code
		$("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());
		/* ~~~~~~~~~~~~~~~ Placing the code from the containers into the iframe (BROWSER container) ~~~~~~~~~~~~~~~ */

			// Evaluating JavaScript 
		document.getElementById("browserFrame").contentWindow.eval($("#jsCode").val());
		
	});



});
