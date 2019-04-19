
		function getRandomColor() {
			var letters = "0123456789ABCDEF".split("");
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.round(Math.random() * 15)];
			}
			return color;
		}


		var clickedTime; var createdTime; var reactionTime;

		var timeout = Math.random();
		timeout = timeout * 7000;
		timeout = Math.floor(timeout);

		var clicked = 0;

/////////////////////////////////////////////////////////////////////////////////////

			
	function showBox () {

		createdTime = Date.now();

		setTimeout(function() {

			if (Math.random() > 0.5) {
				document.getElementById("box").style.borderRadius="180px";
			} else {
				document.getElementById("box").style.borderRadius="0";
			}
		

				var top = Math.random();
				top = top * 500;

				var left = Math.random();
				left = left * 500;
		

			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";


		document.getElementById("box").style.backgroundColor=getRandomColor();

			document.getElementById("box").style.display="block";
			createdTime = Date.now();

		}, timeout);

	}

document.getElementById("box").onclick=function() {

	// message unlocked
	if (clicked == 4) {
	document.getElementById("msg").innerHTML="You find this amusing don't you?";
	}

	if (clicked == 9) {
		document.getElementById("msg").innerHTML="Reach 50 to unlock a secret link";
	}

	if (clicked == 14) {
		document.getElementById("msg").innerHTML="IF12 only there was some kind of a loop to click faster";
	}

	if (clicked == 24) {
		document.getElementById("msg").innerHTML="I lied about the secret link..";
	}

	if (clicked == 34) {
		document.getElementById("msg").innerHTML="Nothing special will happen above this point..";
	}

	if (clicked == 49) {
		document.getElementById("msg").innerHTML="<span><a href='https://tinyurl.com/y559jmmv' target='blank'>SECRET LINK</a></span>";
		document.body.style.backgroundImage = "url('images/success.jpg')";
		document.getElementById("yeah").play();
	}

	if (clicked == 99) {
		alert("You need help");
	}
	


	clicked ++;
	document.getElementById("audio").play();

	clickedTime = Date.now();

	reactionTime = (clickedTime - createdTime) / 1000;
	
		// reaction time
		if ( reactionTime < 1) {

			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		} 

		if (reactionTime >= 1) {

			reactionTime = Math.floor(reactionTime);
			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		}

	 document.getElementById("clicks").innerHTML=clicked;	 

	 // random color for clicks
	 if (clicked > 1) {
	 	document.getElementById("clicks").style.color=getRandomColor();
	 }


	this.style.display="none";


	showBox();
}

showBox();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function showBox2 () {

		createdTime = Date.now();

		setTimeout(function() {

			if (Math.random() > 0.5) {
				document.getElementById("box2").style.borderRadius="180px";
			} else {
				document.getElementById("box2").style.borderRadius="0";
			}
		

				var top2 = Math.random();
				top2 = top2 * 400;

				var left2 = Math.random();
				left2 = left2 * 400;
		

			document.getElementById("box2").style.top=top2+"px";
			document.getElementById("box2").style.left=left2+"px";


		document.getElementById("box2").style.backgroundColor=getRandomColor();

			document.getElementById("box2").style.display="block";
			createdTime = Date.now();

		}, timeout);

}


document.getElementById("box2").onclick=function() {

	// message unlocked
	if (clicked == 4) {
	document.getElementById("msg").innerHTML="You find this amusing don't you?";
	}

	if (clicked == 9) {
		document.getElementById("msg").innerHTML="Reach 50 to unlock a secret link";
	}

	if (clicked == 14) {
		document.getElementById("msg").innerHTML="IF12 only there was some kind of a loop to click faster";
	}

	if (clicked == 24) {
		document.getElementById("msg").innerHTML="I lied about the secret link..";
	}

	if (clicked == 34) {
		document.getElementById("msg").innerHTML="Nothing special will happen above this point..";
	}

	if (clicked == 49) {
		document.getElementById("msg").innerHTML="<span><a href='https://tinyurl.com/y559jmmv' target='blank'>SECRET LINK</a></span>";
		document.body.style.backgroundImage = "url('images/success.jpg')";
		document.getElementById("yeah").play();
	}

	if (clicked == 99) {
		alert("You need help");
	}


	clicked ++;
	document.getElementById("audio2").play();

	clickedTime = Date.now();

	reactionTime = (clickedTime - createdTime) / 1000;
	
		// reaction time
		if ( reactionTime < 1) {

			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		} 

		if (reactionTime >= 1) {

			reactionTime = Math.floor(reactionTime);
			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		}

	 document.getElementById("clicks").innerHTML=clicked;

	 // random color for clicks
	 if (clicked > 1) {
	 	document.getElementById("clicks").style.color=getRandomColor();
	 }

	this.style.display="none";


	showBox2();
}



showBox2();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function showBox3 () {

		createdTime = Date.now();

		setTimeout(function() {

			if (Math.random() > 0.5) {
				document.getElementById("box3").style.borderRadius="180px";
			} else {
				document.getElementById("box3").style.borderRadius="0";
			}
		

				var top3 = Math.random();
				top3 = top3 * 300;

				var left3 = Math.random();
				left3 = left3 * 300;
		

			document.getElementById("box3").style.top=top3+"px";
			document.getElementById("box3").style.left=left3+"px";

		
		document.getElementById("box3").style.backgroundColor=getRandomColor();


			document.getElementById("box3").style.display="block";
			createdTime = Date.now();

		}, timeout);

}

document.getElementById("box3").onclick=function() {

	
	// message unlocked
	if (clicked == 4) {
	document.getElementById("msg").innerHTML="You find this amusing don't you?";
	}

	if (clicked == 9) {
		document.getElementById("msg").innerHTML="Reach 50 to unlock a secret link";
	}

	if (clicked == 14) {
		document.getElementById("msg").innerHTML="IF12 only there was some kind of a loop to click faster";
	}

	if (clicked == 24) {
		document.getElementById("msg").innerHTML="I lied about the secret link..";
	}

	if (clicked == 34) {
		document.getElementById("msg").innerHTML="Nothing special will happen above this point..";
	}

	if (clicked == 49) {
		document.getElementById("msg").innerHTML="<span><a href='https://tinyurl.com/y559jmmv' target='blank'>SECRET LINK</a></span>";
		document.body.style.backgroundImage = "url('images/success.jpg')";
		document.getElementById("yeah").play();
	}

	if (clicked == 99) {
		alert("You need help");
	}


	clicked ++;
	document.getElementById("audio3").play();

	clickedTime = Date.now();

	reactionTime = (clickedTime - createdTime) / 1000;
	
		// reaction time
		if ( reactionTime < 1) {

			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		} 

		if (reactionTime >= 1) {

			reactionTime = Math.floor(reactionTime);
			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		}

	 document.getElementById("clicks").innerHTML=clicked;
	 

	 // random color for clicks
	 if (clicked > 1) {
	 	document.getElementById("clicks").style.color=getRandomColor();
	 }

	this.style.display="none";


	showBox3();
}



showBox3();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


function showBox4 () {

		createdTime = Date.now();

		setTimeout(function() {

			if (Math.random() > 0.5) {
				document.getElementById("box4").style.borderRadius="180px";
			} else {
				document.getElementById("box4").style.borderRadius="0";
			}
		

				var top4 = Math.random();
				top4 = top4 * 300;

				var left4 = Math.random();
				left4 = left4 * 300;
		

			document.getElementById("box4").style.top=top4+"px";
			document.getElementById("box4").style.left=left4+"px";

		
		document.getElementById("box4").style.backgroundColor=getRandomColor();


			document.getElementById("box4").style.display="block";
			createdTime = Date.now();

		}, timeout);

}

document.getElementById("box4").onclick=function() {

	
	// message unlocked
	if (clicked == 4) {
	document.getElementById("msg").innerHTML="You find this amusing don't you?";
	}

	if (clicked == 9) {
		document.getElementById("msg").innerHTML="Reach 50 to unlock a secret link";
	}

	if (clicked == 14) {
		document.getElementById("msg").innerHTML="IF12 only there was some kind of a loop to click faster";
	}

	if (clicked == 24) {
		document.getElementById("msg").innerHTML="I lied about the secret link..";
	}

	if (clicked == 34) {
		document.getElementById("msg").innerHTML="Nothing special will happen above this point..";
	}

	if (clicked == 49) {
		document.getElementById("msg").innerHTML="<span><a href='https://tinyurl.com/y559jmmv' target='blank'>SECRET LINK</a></span>";
		document.body.style.backgroundImage = "url('images/success.jpg')";
		document.getElementById("yeah").play();
	}

	if (clicked == 99) {
		alert("You need help");
	}


	clicked ++;
	document.getElementById("audio4").play();

	clickedTime = Date.now();

	reactionTime = (clickedTime - createdTime) / 1000;
	
		// reaction time
		if ( reactionTime < 1) {

			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		} 

		if (reactionTime >= 1) {

			reactionTime = Math.floor(reactionTime);
			document.getElementById("time").innerHTML=reactionTime + " sec";
			document.getElementById("time").style.color=getRandomColor();
		}

	 document.getElementById("clicks").innerHTML=clicked;
	 

	 // random color for clicks
	 if (clicked > 1) {
	 	document.getElementById("clicks").style.color=getRandomColor();
	 }

	this.style.display="none";



	showBox4();
}


showBox4();


console.log("%cIf you find any shapes in here let me know asap", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
