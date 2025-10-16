// the module to generate a new field eachtime the user plays the game


// create an array of the 9 possible options for the game
// eachtime an element is created it will mark off from the array so no postions are overwritten


/*
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
],
[0,0],
[2,1],
[[0,2],[1,1]]
);

*/
const Field = require('./Field');



const pos1 = [0,0];
const pos2 = [0,1];
const pos3 = [0,2];

const pos4 = [1,0];
const pos5 = [1,1];
const pos6 = [1,2];

const pos7 = [2,0];
const pos8 = [2,1];
const pos9 = [2,2];

let myArray = [];

// Generates a Random Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Makes sure the Random Number isnt repeated
function getRandomPos() {
    let randomNumber;
    do {
        randomNumber = getRandomNumber(1, 9);
    } while (myArray.includes(randomNumber));
    myArray.push(randomNumber);
    return randomNumber;
}

// turns the random number bewteen 1 and 9  into a position and return the pos
function positionCase(){
    const pos = getRandomPos();

    switch(pos){
        case 1:
            return pos1;
            break;
        case 2:
            return pos2;
            break;
        case 3:
            return pos3;
            break;
        case 4:
            return pos4;
            break;
        case 5:
            return pos5;
            break;
        case 6: 
            return pos6;
            break;
        case 7:
            return pos7;
            break;
        case 8:
            return pos8;
            break;
        case 9:
            return pos9;
            break;
    }

}

//Generates a NewFiel
function generateField(){
const startPos = positionCase();
const hole1 = positionCase();
const hole2 = positionCase();
const winPos = positionCase();    
    
    
  
const myField = new Field([
  ['░', '░', '░'],
  ['░', '░', '░'],
  ['░', '░', '░'],
],
startPos,
winPos,
[hole1,hole2]
);




myField.field[startPos[0]][startPos[1]] = '*';
myField.field[winPos[0]][winPos[1]] = '^';
myField.field[hole1[0]][hole1[1]] = 'O';
myField.field[hole2[0]][hole2[1]] = 'O';

return myField;
}

module.exports = generateField;
