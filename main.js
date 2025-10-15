const prompt = require('prompt-sync')({sigint: true});


const directionPrompt = require('./directionPrompt');



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
    
    console.log(Intro);
    myField.print();
    //const direction = await directionPrompt();
    //console.log("its working" + direction);
    console.log(myField.startPos);
}

gameLoop();
