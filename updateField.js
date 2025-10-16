function updateField(myField){
    const x = myField.startPos[0];
    const y = myField.startPos[1];
    myField.field[x][y]='*';
}

module.exports = updateField;