const newCoordinate = require('./newCoordinate');

//validates that the move will not take you out of bounds
// Will return true if it is a legal move, and false if you go out of bounds
function moveValidation(fieldObject, Dir){
    // I need to save the orginal Position so if the move Validation fails I can reset the position
    const orginalPos = fieldObject.startPos;
    
    
    const newPos = newCoordinate(fieldObject, Dir);
    const x = newPos[0];
    const y = newPos[1];
    //Need to grab value of the maximum x value on grid
    const maxX = fieldObject.field.length;
    const maxY = fieldObject.field[0].length;
    
    if(x < 0 | x >= maxX | y < 0 | y >= maxY){
        console.log('You move will put you out of bounds');
        fieldObject.startPos = orginalPos;
        return false;
    }else {
        return true;
    }

}




module.exports = moveValidation;