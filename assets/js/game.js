// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


// this creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);


var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName+ " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtrating the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + " now has " + playerHealth+ " health remaining."
            );

            // check player's health
            if (playerHealth <= 0 ) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        }
    }

    // function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            var pickedEnemyName = enemyNames[i];
    
            enemyHealth = 50;
    
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
        // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
        endGame();
};

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("The game has now ended. Let's see how you did");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}


startGame();