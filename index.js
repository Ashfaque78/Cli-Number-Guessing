#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randonNumber = Math.floor(Math.random() * 8 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "You can guess a number between 1-8: ",
    },
]);
if (answers.userGussedNumber === randonNumber) {
    console.log("Hurry! you guessed right number.");
}
else {
    console.log("Sorry! You guessed wrong number.");
}
