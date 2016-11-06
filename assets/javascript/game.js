var winCount = 0;
	var lossCount = 0;
	var guessCounter = 11;
	var guessesSoFar = [];
	var compChoice;
	var letters = ["a", "b", "c", "d",  "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	

	function reset() {
		guessCounter = 11;
		guessesSoFar = [];
		compChoice = genCompChoice();

	}

	function genCompChoice(){
		// Random letter picker
		var compChoice = letters[Math.floor(Math.random() * letters.length)];
		return compChoice;
	}

	// Random letter picker
	compChoice = genCompChoice();
	// Listen for user input
	document.onkeyup = function(event) {

		var userChosen = String.fromCharCode(event.keyCode).toLowerCase();
		// Decrement guess counter when the user guesses
		guessCounter--;
		// Update users guesses
		guessesSoFar.push(userChosen);

		if (userChosen === compChoice) {
			winCount++;
			alert("Like a GLOVE!")
			reset();
		
		} else {

			if (guessCounter < 0){
				lossCount++;
				alert("Lawho-zaher!")
				reset();

			}
		}

		document.querySelector("#winCount").innerHTML = winCount;
		document.querySelector("#lossCount").innerHTML = lossCount;
		document.querySelector("#guessCounter").innerHTML = guessCounter;
		document.querySelector("#guesses").innerHTML = guessesSoFar.join(",  ");
	};
