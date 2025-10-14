const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';





class Field {
 
 constructor(field) {
    this._field = field;
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
]);

myField.print();