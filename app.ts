#! /usr/bin/env node
import inquirer from "inquirer";
async function startGame() {
    console.log("Welcome to Adventure Game")
    const name = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is your name?"
    })
console.log(`Hello , ${name.name}`);
// start the Adventure
await startAdventure()
}
async function startAdventure() {
    const {choice} = await inquirer.prompt({
        name: "choice",
        type: "list", 
        choices: ["Explore the forest", "Enter the Cave", "Quit"],
        message: "What do you want to do?"
    })
    switch(choice) {
        case "Explore the forest":
        console.log("you venture into the forest.");
        break;
        case "Enter the Cave":
        console.log("You entered the Cave.");
        break;
        case "Quit":
        console.log("Thanks for playing Game")    
        return;
    }
    // continue the Adventure
    await startAdventure();
}
// Start the Game
startGame();