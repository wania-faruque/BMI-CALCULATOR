#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter your weight In Kg:", type: "number", name: "WeightInKg" },
    { message: "Enter your height In Meter:", type: "number", name: "HeightInMeter" },
    {
        message: "Enter your weight In Kg:",
        type: "number",
        name: "WeightInKg",
    },
    {
        message: "Enter your height In Meter:",
        type: "number",
        name: "HeightInMeter",
    },
]);
let bmi = answers.WeightInKg / (answers.HeightInMeter * answers.HeightInMeter);
// conditional statement:
if (bmi < 18.5) {
    console.log("Underwight");
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normal weight");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight");
}
else {
    console.log("Please enter a valid no.");
}
console.log(`Your BMI is ${bmi}`);
