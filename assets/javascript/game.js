	// This is where the variables are declared that will be used to run the game
	var winCount = 0;
	var lossCount = 0;
	var guessCounter = 9;
	var guessesSoFar = [];
	var compChoice;
	var letters = ["a", "b", "c", "d",  "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log("Don't cheat... Cheater!")
	
	//  Resets the game after a win or a loss
	function reset() {
		guessCounter = 9;
		guessesSoFar = [];
		compChoice = genCompChoice();

	}
	// This unction randomly chooses a letter from the letters array and sets it to the computer guess
	function genCompChoice(){
		var compChoice = letters[Math.floor(Math.random() * letters.length)];
		return compChoice;
	}

	// Runs the function to randomly generate a letter for the computer
	compChoice = genCompChoice();
	// Listen for user input
	document.onkeyup = function(event) {

		var userChosen = String.fromCharCode(event.keyCode).toLowerCase();
		// Decrement guess counter when the user guesses
		guessCounter--;
		// Update users guesses
		guessesSoFar.push(userChosen);
		// If the user guess matches the computer's then it alerts the user they one and adds a point to wins.
		if (userChosen === compChoice) {
			winCount++;
			alert("Like a GLOVE!")
			reset();
		
		// If the user runs out of guesses this alerts the user they lost and adds a loss to the score
		} else if (guessCounter < 1) {
				lossCount++;
				alert("Lawho-zaher!")
				reset();

			
		}
		// These lines update the html on the page with the various counters
		document.querySelector("#winCount").innerHTML = winCount;
		document.querySelector("#lossCount").innerHTML = lossCount;
		document.querySelector("#guessCounter").innerHTML = guessCounter;
		document.querySelector("#guesses").innerHTML = guessesSoFar.join(",  ");
	};
