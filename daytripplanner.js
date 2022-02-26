"use strict"
function welcomeMessage(){
    alert("Welcome to the random Day Trip Planner! \n Your destination, restaurant, mode of transportationn and entertainment will be randomly selected.");
}

let destiantionList = ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth", "Waco", "El Paso"];
let restaurantList = ["Olive Garden", "Saltgrass Steak House", "Five Guys Burgers", "Taco Bell", "Whataburger", "Braums"];
let transportationList = ["Personal Vehicle", "Bus", "Airplane", "Uber"];
let entertainmentList = ["Movie Theater", "Local bar", "Bowling", "Local Band Show", "Guided Tour", "Fishing", "Car Race"];

function randomGeneratorFromList(array){
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

function verifyChoice(array){

    let choiceAccepted = false;
    while(choiceAccepted === false){
        let choice = randomGeneratorFromList(array);
        let confirmation = confirm(`Your choice is ${choice}! Do you accept this?`);
        if(confirmation){
            alert(`Congratulations! You have accepted ${choice}`);
            return choice;
        }
    }
}
let destination = verifyChoice(destiantionList);

