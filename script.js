const startMenu = document.getElementById('start-menu');
        const gameScreen = document.getElementById('game-menu');
        const storyline = document.getElementById('storyline');
        const startButton = document.getElementById('start-game');
        const highScoresButton = document.getElementById('high-scores');
        const exitButton = document.getElementById('exit-game');
        const optionsContainer = document.getElementById('options-container');

        // Msin storyline data stored here, scenarios
const gameData = [
    {
        storyline: "As you look around, the stench of the dank air in the dungeon hits your nose. The flickering light of the torch in the distance casts shadows on the walls, screams can be heard through the stone halls. You are in a prison cell. What do you do?",
        options: [
            { text: "Look around the cell for any clues", correct: false },
            { text: "Try to pick the lock", correct: true },
            { text: "Listen for the sound of guards", correct: false },
            { text: "Shout out for help", correct: false }
        ]
    },
    {
        storyline: "You successfully pick the lock, you cautiously make your way out of the cell. What's your next move?",
        options: [
            { text: "Head towards the light in the corridor", correct: true },
            { text: "Explore the dark passages", correct: false },
            { text: "Fight the guards unarmed", correct: false },
            { text: "Try to find a weapon", correct: false }
        ]
    },
    {
        storyline: "You head towards the source of light to find yourself at a crossroad. Which way do you go?",
        options: [
            { text: "Turn left", correct: false },
            { text: "Turn right", correct: true },
            { text: "Go straight", correct: false },
            { text: "Go back", correct: false }
        ]
    },
    {
        storyline: "You turn right and continue cautiously down the corridor. You encounter a locked door, what's your next move?",
        options: [
            { text: "Try to break it down", correct: false },
            { text: "Look for a key", correct: false },
            { text: "Look for another way around", correct: true },
            { text: "Call out for help", correct: false }
        ]
    },
	{
        storyline: "You've found a hidden passage behind a piece of tapestry on the wall. It leads to a staircase going upstairs. What do you do?",
        options: [
            { text: "Go through hidden passage and go upstairs", correct: true },
            { text: "Go through hidden pssage and go downstairs", correct: false },
            { text: "Stay here and explore the current area", correct: false },
            { text: "HIde in the hidden passage", correct: false }
        ]
    },
	{
        storyline: "You go through the passageway and go upstairs, as go up the staircase you notice there are guards walking down the staircase, what do you do?",
        options: [
            { text: "Confront the guards", correct: false },
            { text: "Use invisibility cloke and sneak past the guards", correct: false },
            { text: "Hide and wait for the guards to pass", correct: true },
            { text: "Retreat back to the other level", correct: false }
        ]
    },
	{
        storyline: "You hide in the hidden passage and wait for the guards to pass you. You've now reached the castle walls. How do you get past them?",
        options: [
            { text: "Attempt to dig a tunnel in the ground", correct: true },
            { text: "Use catapult to launch yourself out the castle", correct: false },
            { text: "Ask the guards to open the gates", correct: false },
            { text: "Use catapult to blast a hole in the gates", correct: true }
        ]
    },
	{
        storyline: "Congratulations! You've escaped the castle!!",
        
    },
	
];

        let currentGameDataIndex = 0;

        //  Function startGame defined
        function startGame() {
            // Hide start menu, show game screen
            startMenu.style.display = 'none';
            gameScreen.style.display = 'block';

            // Display initial storyline text and options
            displayGameData();
        }

        // Display current game data (storyline and options)
        function displayGameData() {
			const currentGameData = gameData[currentGameDataIndex];
			storyline.textContent = currentGameData.storyline;

			// Clear previous options
			optionsContainer.innerHTML = '';

			// Display options
			currentGameData.options.forEach(optionData => {
				const optionButton = document.createElement('button');
				optionButton.textContent = optionData.text;
				optionButton.classList.add('option');
				optionButton.addEventListener('click', handleOption);
				optionsContainer.appendChild(optionButton);
			});
}

        // Handle the users option
		function handleOption(event) {
			const selectedText = event.target.textContent;
			const currentGameData = gameData[currentGameDataIndex];

    // Find the selected option in the current game data
    const selectedOption = currentGameData.options.find(option => option.text === selectedText);

    if (selectedOption && selectedOption.correct) {
        // Correct option chosen
        alert("You chose the correct option! Now what?");
        // Move to the next set of options if available
        if (currentGameDataIndex < gameData.length - 1) {
            currentGameDataIndex++;
            displayGameData();
        } else {
            // No more game data, end game or show victory message
            alert("Congratulations! You've escaped the castle!");
            resetGame();
        }
    } else {
        // Incorrect option chosen
        alert("Wrong choice! Back to the start.");
		resetGame();
    }
}

        // Reset the game back to main menu
        function resetGame() {
            currentGameDataIndex = 0;
            startMenu.style.display = 'block';
            gameScreen.style.display = 'none';
        }

        // Event listeners for the buttons
        startButton.addEventListener('click', startGame);
        highScoresButton.addEventListener('click', () => alert("High Scores clicked")); // Implement high scores functionality
        exitButton.addEventListener('click', () => {
            // Exit game
            alert("Exiting game...");
            resetGame();
        });
		