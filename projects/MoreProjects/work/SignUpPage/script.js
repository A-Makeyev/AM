
// Change title name when switching tabs

$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("title").text("Complete your registration..");
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 
	 // Checking if confirm password matches the password 
	 // Get the elements we're going to use just once.
		   
	let password = document.getElementById("password");
	let confirm  = document.getElementById("confirm_password");
	let submit = document.getElementById("submit");
	let form = password.parentElement;

	let check = function() {
	    if (password.value === confirm.value) {
	        form.classList.remove("invalid");
	        form.classList.add("valid");
	        submit.disabled = false;

	    } else {
	        form.classList.remove("valid");
	        form.classList.add("invalid");
	        submit.disabled = true;
	    }
	}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(function() {

		// Validates correct email address

	$("#validate").submit(function(event) {

		var errorMsg = "";
		var errorSign ="";

		event.preventDefault();

	function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
	};

			// Validates if the email address is currect

		if (!isValidEmailAddress($("#email").val())) {

			errorMsg = "This address seems to be invalid";
			errorSign = "&#9888";
		}

			// Validates if the phone contains numbers only
		
		if (!$.isNumeric($("#phone").val())) {

			errorMsg = errorMsg + "<br> This number seems to be invalid";
			errorSign = "&#9888";
		} 

			// Validates the username 
			
		var username = $("#username").val();
		var username_regex = /^[0-9a-zA-Z]+$/;	// Letters and numbers only

		if (!username.match(username_regex) || username.length == 0) {
			errorMsg = errorMsg + "<br> This username seems to be invalid";
			errorSign = "&#9888";
		}


				// Finishing the form
				// If the error vars remain empty it means the form went successful 

			if (errorMsg == "" && errorSign == "") {

				alert("Sign up completed successfully!");
				location.reload(); // Reloads the page

			} else {
						// Actual error message appears

				$("#error").animate({"opacity": 0}, 500, function() {
					$(this).html(errorMsg);
				}).animate({"opacity": 1}, 500);

					// Triangle logo above the error message appears

				$("#triangle").animate({"opacity": 0}, 500, function() {
					$(this).html(errorSign);
				}).animate({"opacity": 1}, 500);

			}

	});

});