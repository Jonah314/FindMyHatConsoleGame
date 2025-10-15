const newCoordinate = require('./newCoordinate');


function moveValidation(fieldObject, Dir){
    
    const newPos = newCoordinate(fieldObject, Dir);
    const x = newPos[0];
    const y = newPos[1];
    //Need to grab value of the maximum x value on grid
    const maxX = fieldObject.field.length;
    const maxY = fieldObject.field[0].length;
    console.log(maxX + " " + maxY);
    if(x < 0 | x >= maxX | y < 0 | y >= maxY){
        console.log('You move will put you out of bounds');
    }
}




module.exports = moveValidation;