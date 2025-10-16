const prompt = require('prompt-sync')({sigint: true});
const Field = require('./Field');

const { directionPrompt, closeInput } = require('./directionPrompt');
const movePosition = require('./movePosition');
const updateField = require('./updateField');
const generateField = require('./generateField');



const Intro = '               Welcome to Find My Hat !!!\n     Your Character is represented by the asterisk * Character \n     To Play the Game navigate to your hat ^ and Avoid falling into any holes O \n     To Move: \n          W = Up \n          A = Left \n          S = Down  \n          D = Right'  

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
],
[0,0],
[2,1],
[[0,2],[1,1]]
);



async function gameLoop(){
    let gameContinue = true;
    console.log(Intro);
    myField.print();
   


    while(gameContinue){
    const direction = await directionPrompt(myField);
    const gameResults = movePosition(direction, myField); 
    //Change Field Object to reflect changes
    updateField(myField);
    myField.print();
    

      if (!gameResults) { // cleaner check
            console.log("Game Over!");
            closeInput();
            break; // <-- stops loop immediately
        }
    }
}
    

gameLoop();
