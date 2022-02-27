"use strict"
function welcomeMessage(){
    alert("Welcome to the random Day Trip Planner! \n Your destination, restaurant, mode of transportationn and entertainment will be randomly selected.");
}
let welcome = welcomeMessage();

let destiantionList = ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth", "Waco", "El Paso"];
let restaurantList = ["Olive Garden", "Saltgrass Steak House", "Five Guys Burgers", "Taco Bell", "Whataburger", "Braums"];
let transportationList = ["Personal Vehicle", "Bus", "Airplane", "Uber"];
let entertainmentList = ["Movie Theater", "Local bar", "Bowling", "Local Band Show", "Guided Tour", "Fishing", "Car Race"];

function randomGeneratorFromList(array){
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

function verifyChoice(array, category){

    let choiceAccepted = false;
    while(choiceAccepted === false){
        let choice = randomGeneratorFromList(array);

        let confirmation = confirm(`Your choice of ${category} is ${choice}! Do you accept this?`);
        if(confirmation){
            alert(`Congratulations! You have accepted ${category}: ${choice}`);
            let categoryChoice = {};
            categoryChoice[category] = choice;
            
            return categoryChoice;
        }
    }
}

function tripConfirmation(destination, restaurant, transportation, entertainment){
    alert(`Congratulations! Here are the details of your Day Trip: \n
        ${Object.keys(destination)}: ${Object.values(destination)}\n
        ${Object.keys(restaurant)}: ${Object.values(restaurant)}\n
        ${Object.keys(transportation)}: ${Object.values(transportation)}\n
        ${Object.keys(entertainment)}: ${Object.values(entertainment)}`);  
}

let destination = verifyChoice(destiantionList, "Destination");
let restaurant = verifyChoice(restaurantList, "Restaurant");
let transportation = verifyChoice(transportationList, "Transportation");
let entertainment = verifyChoice(entertainmentList, "Entertainment");

tripConfirmation(destination,restaurant, transportation, entertainment);


