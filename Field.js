const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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
  get holePos(){
    return this._holePos;
  }


  print() {
    this._field.forEach(row => {
      console.log(row.join('')); // join turns ['*','░','O'] into '*░O'
    });
  }
}

module.exports = Field;