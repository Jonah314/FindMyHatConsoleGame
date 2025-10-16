const prompt = require('prompt-sync')({sigint: true});


const { directionPrompt, closeInput } = require('./directionPrompt');
const movePosition = require('./movePosition');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const Intro = '               Welcome to Find My Hat !!!\n     Your Character is represented by the asterisk * Character \n     To Play the Game navigate to your hat ^ and Avoid falling into any holes O \n     To Move: \n          W = Up \n          A = Left \n          S = Down  \n          D = Right'  



class Field {
 
 constructor(field, startPos, winPos, holePos) {
    this._field = field;
    this._startPos = startPos;
    this._winPos = winPos;
    this._holePos = holePos;
  }
  get startPos(){
    return this._startPos;
  }
  set startPos(newPos){
    this._startPos = newPos;
  }
  get field(){
    return this._field;
  }
  get winPos(){
    return this._winPos;
  }


  print() {
    this._field.forEach(row => {
      console.log(row.join('')); // join turns ['*','░','O'] into '*░O'
    });
  }
}

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
    myField.print();
    

      if (!gameResults) { // cleaner check
            console.log("Game Over!");
            closeInput();
            break; // <-- stops loop immediately
        }
    }
}
    // To Do list: need to create a module to change the map of the game
    // - need to print the map in the befining of every loop

gameLoop();
