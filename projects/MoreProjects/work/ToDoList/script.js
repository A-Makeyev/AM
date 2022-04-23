$(document).ready((function() {
	$("#add").on("click", function() {
		// Event handler
		
		var inputValue = $("input").val();

		if (inputValue !== "") {

			var newTask = $("<li></li>").text(inputValue); // Gets input value

			$(newTask).prepend("<button title='Remove'class='removeTask'>&#10008;</button>");
			$("#myList").append(newTask); // Adds new task to the list
			$("input").val(""); // Clear the input

			$(".removeTask").on("click", function() {
					$(this).parent().remove();
				}); // Removes the task

		}	
					
	});

		// Adding a new task by pressing enter

	$("input").keypress(function (e) {
		if (e.which == 13) { // If key is enter
		  $("#add").click(); // Click on ADD
		   return false; // Stops the execution of the function    
		}
	});


	var today = new Date(); // Setting up the currect date

	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + '/' + mm + '/' + yyyy;
	
	document.getElementById("dateNow").innerHTML = today;

})); 
