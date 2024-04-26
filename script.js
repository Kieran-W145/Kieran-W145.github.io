// Get references to elements
const startButton = document.getElementById('start-game1');
const gameContainer = document.getElementById('game-container');
const menu = document.getElementById('menu');
const storyline = document.getElementById('storyline');
const storyText = document.getElementById('story-text');
const optionsButton1 = document.getElementById('option1');
const optionsButton2 = document.getElementById('option2');
const optionsButton3 = document.getElementById('option3');
const optionsButton4 = document.getElementById('option4');
const messageContainer = document.getElementById('message-container');
const exitButton = document.getElementById('exit-button');

// Storyline data
const storylineData = [
    {
        text: "You awake to find yourself on the cold floor of the dungeon in castle Voldesdad. There is a key to unlock the cell you are in but it is out of reach from the steel cage and it appears to be broken, there is a magical book in your cell however, what do you do? ",
        option: ["Force open the cell door", "Use a spell from book to repair the key,", "Shout for help", "Use pickpocket on lock"],
        correctOptionIndex: 2
    },
    {
        text: "The key has been repaired! But it is out of your reach as you are in a cell, what do you do?",
        option: ["", "Find a bridge", "Build a boat", "Follow the river upstream"],
        correctOptionIndex: 1
    },
    
	// stages
	
];

let currentStage = 0;

function startGame() {
    // Hide the menu and show the storyline
    menu.style.display = 'none';
    storyline.style.display = 'block';
    displayStage();
}

function displayStage() {
    storyText.textContent = storylineData[currentStage].text;
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = storylineData[currentStage].options[i];
        optionButtons[i].addEventListener('click', checkAnswer);
    }
}


function checkAnswer(event) {
    const selectedOptionIndex = Array.from(optionButtons).indexOf(event.target);
    if (selectedOptionIndex === storylineData[currentStage].correctOptionIndex) {
        if (currentStage < storylineData.length - 1) {
            // Move to the next stage
            currentStage++;
            displayStage();
        } else {
            endGame("Congratulations! You've completed the game!");
        }
    } else {
        const wrongAnswerMessage = document.createElement('p');
        wrongAnswerMessage.textContent = "Wrong answer.";
		
		

        options.innerHTML = '';

        options.appendChild(wrongAnswerMessage);
        options.appendChild(exitButton);
    }
    }


function endGame(message) {
    // Display message
    alert(message);
    // Reset game to start
    resetGame();
}

function resetGame() {
    // Show the menu and hide the storyline
    menu.style.display = 'block';
    storyline.style.display = 'none';
    // Reset current stage
    currentStage = 0;
}

startButton.addEventListener('click', function() {
    console.log("Start button clicked!");
    startGame();
});

optionsButton1.addEventListener('click', handleOptionButton1Click);
optionsButton2.addEventListener('click', handleOptionButton2Click);
optionsButton3.addEventListener('click', handleOptionButton3Click);
optionsButton4.addEventListener('click', handleOptionButton4Click);

function handleOptionButton1Click() {
    // Output message to the user
     const messageElement = document.createElement('div');
    messageElement.textContent = "Wrong choice";
    messageElement.classList.add('error-message'); // Add a CSS class for styling
    
    messageContainer.innerHTML = '';
    
    messageContainer.appendChild(messageElement);
}

function handleOptionButton2Click() {
    // Output message to the user
     const messageElement2 = document.createElement('div');
    messageElement2.textContent = "Right choice!";
    messageElement2.classList.add('success-message'); // Add a CSS class for styling
    
    messageContainer.innerHTML = '';
    
    messageContainer.appendChild(messageElement2);
}

exitButton.addEventListener('click', exitGame);

function exitGame() {
	// Display exit message
    alert("You have exited the game.");
    // Reset game to start
    resetGame();
}